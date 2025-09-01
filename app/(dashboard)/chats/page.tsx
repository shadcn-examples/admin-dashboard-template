import type { Metadata } from "next";
import ChatApp from "@/app/(dashboard)/chats/components/chat";

export const metadata: Metadata = {
  title: "Chat App - Admin Dashboard Template",
  description:
    "Chat ui components and blocks for building chat apps. Built with React, Next.js and Tailwind CSS. shadcn/ui compatible and Typescript files included."
};

export default function MessagingApp() {
  return <ChatApp />;
}
