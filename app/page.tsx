"use client";
import React, { useEffect, useState, useRef } from 'react';

import { Send, Bot, User, Sparkles, Loader2, MessageSquare, LogIn, Copy, Check, Paperclip, Trash2 } from 'lucide-react';


import Link from 'next/link';
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
  useUser
} from "@clerk/nextjs";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function ChatBot() {
  const { user, isSignedIn } = useUser(); // ලොග් වුණු යූසර්ගේ විස්තර මෙතන තියෙනවා
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([

    { role: 'assistant', content: 'Hello! I am Saara, your AI assistant. How can I help you build your project today?' }
  ]);

  // සාරාට කතා කිරීමට හැකිවන සේ සකස් කළ Function එක
  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // කලින් තිබුණු ඒවා නවත්වන්න
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();

      // ගැහැණු කටහඬක් තෝරා ගැනීම
      const femaleVoice = voices.find(voice =>
        voice.name.toLowerCase().includes('female') ||
        voice.name.toLowerCase().includes('google us english') ||
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('zira')
      );

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.lang = 'en-US';
      utterance.rate = 1.1; // ටිකක් වේගවත්
      utterance.pitch = 1.2; // Pitch එක ටිකක් වැඩි හඬක් සඳහා
      window.speechSynthesis.speak(utterance);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Automatically scroll to the bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ඇප් එක ලෝඩ් වෙද්දීම සාරා හඳුන්වා දීම
  useEffect(() => {
    if (isSignedIn && user) {
      const greeting = `Hello ${user.firstName || 'there'}! My name is Saara. How can I support you today?`;
      speak(greeting);
    }
  }, [isSignedIn, user]);

  // ඇප් එක ලෝඩ් වෙද්දීම සහ මැසේජ් එකක් යැවූ විට History එක Fetch කිරීම
  useEffect(() => {
    if (isSignedIn) {
      const fetchHistory = async () => {
        try {
          const res = await fetch('/api/history');
          const data = await res.json();
          if (Array.isArray(data)) {
            setHistory(data);
          }
        } catch (error) {
          console.error("History loading error:", error);
        }
      };
      fetchHistory();
    }
  }, [messages, isSignedIn]);

  const loadConversation = async (conversationId: string) => {
    if (!conversationId) return;
    setIsLoading(true);
    setCurrentConversationId(conversationId);
    try {
      const res = await fetch(`/api/history/${conversationId}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (error) {
      console.error("Load Conversation Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setMessages(prev => [...prev, { role: 'assistant', content: `පොඩ්ඩක් ඉන්න, මම මේ "${file.name}" ෆයිල් එක කියවන්නම්. (Please wait while I read your file.)` }]);
      speak(`I see you've attached ${file.name}. How should I analyze it for you?`);
    }
  };

  // Drag and Drop handlers
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setMessages(prev => [...prev, { role: 'assistant', content: `Dropped "${file.name}". මම මේක කියවන්නද?` }]);
      speak(`Received your file ${file.name}. Ready to analyze.`);
    }
  };

  const deleteConversation = async (conversationId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Don't load the chat when clicking delete
    if (!conversationId) return;
    if (!confirm("Are you sure you want to delete this chat?")) return;

    // UI එක ඉක්මනින් Update කිරීම (Optimistic Update)
    const previousHistory = [...history];
    setHistory(prev => prev.filter(item => item.conversationId !== conversationId));

    try {
      const res = await fetch(`/api/history/${conversationId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        if (currentConversationId === conversationId) {
          createNewChat();
        }
      } else {
        setHistory(previousHistory);
        alert("Failed to delete the conversation.");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      setHistory(previousHistory);
    }
  };


  const createNewChat = () => {

    const greeting = `Hello ${user?.firstName || 'there'}! I am Saara, your AI assistant. How can I help you today?`;
    setMessages([
      { role: 'assistant', content: greeting }
    ]);
    setCurrentConversationId(null);
    speak(greeting);
    setInput('');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: input,
          conversationId: currentConversationId
        }),
      });

      const data = await response.json();

      if (data.text) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
        if (data.conversationId) {
          setCurrentConversationId(data.conversationId);
        }
      } else {
        throw new Error(data.error || "No response");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "සමාවෙන්න, මට සම්බන්ධ වෙන්න බැරි වුණා. කරුණාකර නැවත උත්සාහ කරන්න." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {/* Drag overlay indicator */}
      {isDragging && (
        <div className="absolute inset-0 z-50 bg-blue-600/20 backdrop-blur-sm border-2 border-dashed border-blue-500 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-[#111] p-10 rounded-3xl shadow-2xl border border-white/10 animate-pulse">
            <Sparkles size={60} className="mx-auto text-blue-500 mb-4" />
            <p className="text-xl font-bold">Drop files here for Saara to analyze</p>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-64 bg-[#111] border-r border-white/10 p-4 hidden md:flex flex-col">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="bg-blue-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Sparkles size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight">DK Tech AI</span>
        </div>

        <button
          onClick={createNewChat}
          className="w-full py-2.5 px-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm text-left mb-6 flex items-center gap-2 font-medium"
        >
          <span className="text-lg">+</span> New Chat
        </button>

        {/* Recent Chats Section */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <p className="text-[10px] text-gray-500 px-2 uppercase tracking-[0.2em] mb-4 font-bold">Recent Conversations</p>
          <div className="flex flex-col gap-1">
            <SignedIn>
              {history.length > 0 ? (
                history.slice(0, 10).map((chat: any) => (
                  <div key={chat.id} className="relative group/item">
                    <button
                      onClick={() => loadConversation(chat.conversationId)}
                      className={`w-full py-2.5 px-4 rounded-xl transition-all text-xs text-left flex items-center gap-3 group ${currentConversationId === chat.conversationId
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-600/20'
                        : 'hover:bg-white/5 text-gray-400 hover:text-white'
                        }`}
                    >
                      <MessageSquare size={14} className={currentConversationId === chat.conversationId ? "opacity-100" : "opacity-40 group-hover:opacity-100 transition-opacity"} />
                      <span className="truncate pr-6">{chat.title || chat.content}</span>
                    </button>
                    <button
                      onClick={(e) => deleteConversation(chat.conversationId, e)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 hover:bg-red-500/20 hover:text-red-500 text-gray-500 transition-all"
                      title="Delete chat"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))


              ) : (
                <p className="text-[10px] text-gray-700 px-4 italic font-medium">No history yet</p>
              )}
            </SignedIn>
            <SignedOut>
              <p className="text-[10px] text-blue-400/60 px-4 italic font-medium">Please sign in to see history</p>
            </SignedOut>
          </div>
        </div>

        {/* User Profile Section (New) */}
        <div className="mt-4 border-t border-white/10 pt-6 pb-2 px-2 text-gray-300">
          <SignedIn>
            <div className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3">
                <UserButton afterSignOutUrl="/" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold truncate max-w-[100px]">{user?.firstName}</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-tighter">Pro Member</span>
                </div>
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                <LogIn size={16} /> Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Design Switcher Menu */}
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/portfolio" className="w-full py-2 px-4 rounded-xl hover:bg-white/5 transition-all text-[11px] text-left flex items-center gap-2 text-gray-500 hover:text-white border border-dashed border-white/5">
            <Sparkles size={14} className="text-yellow-500" /> View Master Portfolio
          </Link>
        </div>

        {/* Enrollment Card */}
        <div className="mt-6 p-1">
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/5 border border-blue-600/20 rounded-2xl p-4 shadow-xl">
            <div className="flex justify-between items-start mb-1">
              <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Enrollment Sync</p>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <p className="text-2xl font-black text-white leading-none">10 / 10</p>
            <div className="w-full bg-white/10 h-1.5 mt-3 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-full shadow-[0_0_10px_#2563eb]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-slide-in`}>
              {msg.role === 'assistant' && (
                <span className="text-[10px] text-blue-400 font-bold ml-14 uppercase tracking-widest">Saara</span>
              )}
              <div className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'assistant' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                  {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div className={`p-4 md:p-5 rounded-[2rem] text-sm leading-relaxed relative group transition-all duration-300 ${msg.role === 'assistant'
                  ? 'bg-[#161616] border border-white/5 text-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/10'
                  : 'bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.4)]'
                  }`}>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => copyToClipboard(msg.content, index)}
                      className="absolute -right-10 top-2 p-2 rounded-lg bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10 text-gray-400 hover:text-white"
                      title="Copy message"
                    >
                      {copiedIndex === index ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                  )}
                  {msg.role === 'assistant' ? (
                    <div className="markdown-content space-y-2">
                      <ReactMarkdown
                        components={{
                          code({ node, inline, className, children, ...props }: any) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                              <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                className="rounded-lg my-4 text-xs shadow-inner"
                                {...props}
                              >
                                {String(children).replace(/\n$/, '')}
                              </SyntaxHighlighter>
                            ) : (
                              <code className={`${className} bg-white/10 px-1.5 py-0.5 rounded text-blue-300 font-mono text-xs`} {...props}>
                                {children}
                              </code>
                            );
                          },
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (

                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>

              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />

          {isLoading && (
            <div className="flex gap-4 justify-start animate-pulse">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Loader2 size={20} className="animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-[#161616] border border-white/5">
                <p className="text-sm text-gray-500 italic font-medium tracking-tight font-sans">AI is crafting your response...</p>
              </div>
            </div>
          )}
        </div>

        {/* Floating Input Area */}
        <div className="p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition duration-1000 pointer-events-none"></div>

            {selectedFile && (
              <div className="absolute -top-12 left-0 right-0 p-2 bg-blue-600/20 border border-blue-600/30 rounded-xl flex items-center justify-between text-xs px-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Paperclip size={14} />
                  <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                </div>
                <button onClick={() => setSelectedFile(null)} className="hover:text-white text-gray-400 transition-colors">取消</button>
              </div>
            )}

            {/* Input Container */}
            <div className="flex gap-2 items-center bg-[#111] border border-white/5 p-2 rounded-[1.5rem] shadow-2xl relative">
              <input
                type="file"
                ref={fileInputRef}
                onChange={onFileSelect}
                className="hidden"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.txt"
              />
              <button
                onClick={handleAttachClick}
                className="p-3 rounded-2xl hover:bg-white/5 text-gray-500 hover:text-white transition-all shrink-0 active:scale-95"
                title="Attach Document"
              >
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isSignedIn ? "Ask Saara anything..." : "Please Sign In to chat..."}
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-200 py-3 px-2 min-w-0"
                disabled={isLoading || !isSignedIn}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !isSignedIn}
                className="p-2.5 bg-blue-600 rounded-xl hover:bg-blue-500 transition-all shadow-lg disabled:opacity-50 active:scale-95 shrink-0"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-700 mt-6 tracking-[0.2em] font-bold uppercase opacity-50">
            Instructor: Sudesh Kumarasiri | Batch 01 | © 2026 AI Full-Stack Bootcamp
          </p>
        </div>
      </div>
    </div>
  );
}