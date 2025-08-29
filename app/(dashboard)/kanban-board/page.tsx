
import * as React from "react";
import type { Metadata } from "next";
import KanbanRender from "@/app/(dashboard)/kanban-board/components/kanban-render";

export const metadata: Metadata = {
  title: "Kanban Board - Admin Dashboard Template",
  description:
    "Ecommerce admin dashboard template built with React and Next.js. shadcn/ui compatible and Typescript files included. Open source."
};

export default function Page() {
  return (
    <KanbanRender/>
  );
}
