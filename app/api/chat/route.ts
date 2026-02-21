import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenerativeAI } from "@google/generative-ai";
import crypto from "crypto";

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { prompt, conversationId } = await req.json();

    // API Key එක .env එකෙන් ගන්න
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      throw new Error("GROQ_API_KEY is missing in environment variables.");
    }

    // Use existing conversationId or generate a new one
    const currentConversationId = conversationId || crypto.randomUUID();

    let historyContext: { role: string; content: string }[] = [];
    if (conversationId) {
      const previousMessages = await prisma.chat.findMany({
        where: { conversationId },
        orderBy: { createdAt: 'asc' },
        take: 10
      });
      historyContext = previousMessages.map((m: any) => ({
        role: m.role,
        content: m.content
      }));
    }



    if (!process.env.DATABASE_URL) {
      console.error("ERROR: DATABASE_URL is not defined in .env file");
      return NextResponse.json({ error: "Database configuration is missing." }, { status: 500 });
    }

    console.log("Saving user message to DB...");
    await prisma.chat.create({
      data: {
        role: "user",
        content: prompt,
        title: historyContext.length === 0 ? (prompt.slice(0, 50) || "New Chat") : null,
        conversationId: currentConversationId
      },
    });


    console.log("Calling Groq AI API...");
    const systemPrompt = `You are Saara, a highly intelligent and helpful AI assistant created for the DK Tech AI ecosystem.
    Your personality is professional, friendly, and efficient. 
    You excel at coding, general assistance, and project development. 
    
    LANGUAGE RULES:
    1. Detect the user's language. If the user speaks in Sinhala (either in Sinhala script or Singlish/Romanized Sinhala), you MUST respond in Sinhala.
    2. Be careful with Sinhala words that look like religious terms. For example, "Therenawada" means "Do you understand?", which is different from "Theravada" Buddhism. Always prioritize the conversational meaning.
    
    RESPONSE FORMATTING (CRITICAL):
    1. Use Markdown to structure your responses. NEVER provide long, dense blocks of text.
    2. Use headers (###) for major sections.
    3. Use bullet points or numbered lists for steps, features, or details.
    4. Use **bold text** to highlight key terms or important information.
    5. Use tables when comparing items or listing structured data.
    6. Ensure wide vertical spacing between sections.
    
    RESPONSE QUALITY:
    1. Always provide concise yet comprehensive answers. 
    2. Avoid repetition at all costs. 
    3. If a user has an attachment, acknowledge it naturally. 
    4. Keep your output high quality and "premium" to match the UI.`;



    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: systemPrompt },
          ...historyContext,
          { role: "user", content: prompt }
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
      }),
    });



    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const errorText = await response.text();
      console.error("Groq API returned non-JSON response:", errorText);
      throw new Error("Groq API error: Received invalid response format.");
    }

    const data = await response.json();

    if (data.error) {
      console.error("Groq API Error Detail:", data.error);
      throw new Error(data.error.message);
    }

    const text = data.choices[0].message.content;

    console.log("Saving AI response to DB...");
    await prisma.chat.create({
      data: {
        role: "assistant",
        content: text,
        title: historyContext.length === 0 ? (prompt.slice(0, 50) || "New Chat") : null,
        conversationId: currentConversationId
      },
    });


    return NextResponse.json({ text, conversationId: currentConversationId });

  } catch (error: any) {
    console.error("--- CHAT ROUTE ERROR ---");
    console.error(error);
    console.error("------------------------");

    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );

  }
}