import type { Metadata } from "next";
import AiChat from "@/app/(dashboard)/ai-chat/components/ai-chat";

export const metadata: Metadata = {
  title: "AI Chat App - Admin Dashboard Template",
  description:
    "AI chat ui components and blocks for building chat apps. Built with React, Next.js and Tailwind CSS. shadcn/ui compatible and Typescript files included."
};

export default function Page() {
  return <AiChat />;
}
