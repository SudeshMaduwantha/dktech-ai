import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Add this line to force Node.js runtime
export const runtime = 'nodejs';

export async function GET() {
  try {
    // Get latest chats
    const chats = await prisma.chat.findMany({
      orderBy: { createdAt: 'desc' },
    });

    // Group by conversationId
    const conversationsMap = new Map();
    chats.forEach((chat: any) => {
      if (!conversationsMap.has(chat.conversationId)) {
        conversationsMap.set(chat.conversationId, {
          id: chat.id,
          conversationId: chat.conversationId,
          content: chat.content,
          title: chat.title, // Might be null
          createdAt: chat.createdAt
        });
      } else {
        // If we find an entry for this conversation that has a title, prefer it
        if (chat.title && !conversationsMap.get(chat.conversationId).title) {
          conversationsMap.get(chat.conversationId).title = chat.title;
        }
      }
    });

    const result = Array.from(conversationsMap.values());
    return NextResponse.json(result);

  } catch (error: any) {
    console.error("History Error:", error);
    return NextResponse.json([]);
  }
}
