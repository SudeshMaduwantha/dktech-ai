import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const chats = await prisma.chat.findMany({
            where: { conversationId: id },
            orderBy: { createdAt: 'asc' }
        });
        return NextResponse.json(chats);
    } catch (error: any) {
        console.error("Conversation Fetch Error:", error);
        return NextResponse.json({ error: "Failed to fetch conversation history" }, { status: 500 });
    }
}
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await prisma.chat.deleteMany({
            where: { conversationId: id }
        });
        return NextResponse.json({ success: true, message: "Conversation deleted successfully" });
    } catch (error: any) {
        console.error("Conversation Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete conversation" }, { status: 500 });
    }
}
