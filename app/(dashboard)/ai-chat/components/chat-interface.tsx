"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, Share, ThumbsUp, ThumbsDown, Send, Paperclip, Mic } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import type { Message } from "@ai-sdk/react";

interface ChatInterfaceProps {
  messages: Message[];
}

export function ChatInterface({ messages }: ChatInterfaceProps) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-4">
              {message.role === "user" ? (
                <>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="rounded-lg bg-gray-100 p-4">
                      <p className="text-gray-900">{message.content}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-500 text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="rounded-lg border border-gray-200 bg-white p-4">
                      <p className="mb-4 text-gray-900">{message.content}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Share className="h-4 w-4" />
                        </Button>
                        <div className="ml-auto flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          {false && (
            <div className="flex gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-500 text-white">AI</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.1s" }}></div>
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-6">
        <div className="mx-auto max-w-3xl">
          <form className="relative">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Ask me anything..."
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mic className="h-4 w-4" />
              </Button>
              <Button type="submit" size="sm" className="h-8 w-8 p-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
