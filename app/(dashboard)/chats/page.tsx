import type { Metadata } from "next";
import ChatApp from "@/app/(dashboard)/chats/components/chat";

export const metadata: Metadata = {
  title: "Chat App - Admin Dashboard Template",
  description:
    "Ecommerce admin dashboard template built with React and Next.js. shadcn/ui compatible and Typescript files included. Open source."
};

export default function MessagingApp() {
  return (
    <ChatApp/>
  );
}
