import * as React from "react";
import type { Metadata } from "next";
import KanbanRender from "@/app/(dashboard)/kanban-board/components/kanban-render";

export const metadata: Metadata = {
  title: "Kanban Board - Admin Dashboard Template",
  description:
    "A Kanban board is a visual tool for managing tasks and workflow. Built with React, Next.js and Tailwind CSS. shadcn/ui compatible and Typescript files included."
};

export default function Page() {
  return <KanbanRender />;
}
