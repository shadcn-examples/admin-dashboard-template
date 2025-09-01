"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Plus,
  Star,
  Archive,
  Puzzle,
  Search,
  MessageCircle,
  Settings,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Chat {
  id: string;
  title: string;
  preview: string;
  timestamp: Date;
}

interface SidebarProps {
  chats: Chat[];
  selectedChatId: string | null;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
}

export function Sidebar({ chats, selectedChatId, onNewChat, onSelectChat }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-80 flex-col border-r">
      {/* Header */}
      <div className="border-b p-4">
        <Button onClick={onNewChat} variant="outline" className="w-full">
          <Plus />
          New Chat
        </Button>
      </div>

      {/* Navigation */}
      <div className="space-y-1 px-4 py-2">
        <Button className="w-full justify-between" variant="ghost">
          <div className="flex items-center gap-2">
            <Star />
            Favorites
          </div>
          <Badge>2</Badge>
        </Button>
        <Button variant="ghost" className="text-muted-foreground w-full justify-between">
          <div className="flex items-center gap-2">
            <Archive />
            Archived
          </div>
          <Badge>32</Badge>
        </Button>
      </div>

      {/* Recent Chats */}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="px-4 py-2">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
              Recent Chats
            </h3>
            <Search className="h-4 w-4" />
          </div>
          <div className="relative">
            <Input
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 px-4">
          <div className="space-y-1 pb-4">
            {filteredChats.map((chat) => (
              <Button
                key={chat.id}
                variant="ghost"
                onClick={() => onSelectChat(chat.id)}
                className={cn(
                  "hover:bg-muted h-auto w-full justify-start p-3 text-left",
                  selectedChatId === chat.id && "bg-muted"
                )}>
                <div className="flex w-full items-start gap-2">
                  <MessageCircle className="text-muted-foreground mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{chat.title}</div>
                    <div className="text-muted-foreground mt-0.5 truncate text-xs">
                      {chat.preview}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
