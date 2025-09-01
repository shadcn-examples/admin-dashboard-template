"use client";

import { useState } from "react";
import { Sidebar } from "@/app/(dashboard)/ai-chat/components/sidebar";
import { useChat } from "@ai-sdk/react";
import { WelcomeScreen } from "@/app/(dashboard)/ai-chat/components/welcome-screen";
import { ChatInterface } from "@/app/(dashboard)/ai-chat/components/chat-interface";
import { DefaultChatTransport } from "ai";

export default function AiChat() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [chats, setChats] = useState([
    {
      id: "1",
      title: "Can you fly?",
      preview: "Not on my own! I exist o...",
      timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
    },
    {
      id: "2",
      title: "Do you have emotion...",
      preview: "I can't feel emotions my...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
    },
    {
      id: "3",
      title: "Will robots take over t...",
      preview: "Science fiction is fun, b...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    {
      id: "4",
      title: "What's the meaning o...",
      preview: "That's a big question ph...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3) // 3 hours ago
    },
    {
      id: "5",
      title: "Can you write a song ...",
      preview: "I can definitely help you...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4) // 4 hours ago
    },
    {
      id: "6",
      title: "What's the best way t...",
      preview: "Unfortunately, there's n...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5) // 5 hours ago
    },
    {
      id: "7",
      title: "What's your favorite c...",
      preview: "As a language model, I ...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6) // 6 hours ago
    },
    {
      id: "8",
      title: "Can you predict the f...",
      preview: "I can't see the future, b...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 7) // 7 hours ago
    },
    {
      id: "9",
      title: "What's the best pizza ...",
      preview: "That's entirely up to you...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8) // 8 hours ago
    },
    {
      id: "10",
      title: "Are you sentient?",
      preview: "Sentience is a complex ...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 9) // 9 hours ago
    },
    {
      id: "11",
      title: "Can you solve this m...",
      preview: "Just type ou...",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 10) // 10 hours ago
    }
  ]);

  const { messages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat"
    })
  });

  const handleNewChat = () => {
    setSelectedChatId(null);
    // Reset chat messages would happen here in a real app
  };

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const handleSuggestionClick = (suggestion: string) => {
    // In a real app, this would start a new chat with the suggestion
    setSelectedChatId("new");
  };

  return (
    <div className="flex">
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />
      <div className="flex flex-1 flex-col">
        {!selectedChatId ? (
          <WelcomeScreen onSuggestionClick={handleSuggestionClick} />
        ) : (
          <ChatInterface messages={messages} />
        )}
      </div>
    </div>
  );
}
