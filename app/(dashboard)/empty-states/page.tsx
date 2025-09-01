import { FolderPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empty State - Admin Dashboard Template",
  description:
    "An empty state is a UI screen shown when no data or content is available. Built with React, Next.js, Tailwind CSS and shadcn/ui."
};

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <FolderPlus className="text-muted-foreground mx-auto h-16 w-16" />
        <h2 className="mt-6 text-xl font-semibold">No projects</h2>
        <p className="text-muted-foreground mt-2 text-sm">Get started by creating a new project.</p>
        <div className="mt-6">
          <Button>
            <Plus />
            New Project
          </Button>
        </div>
      </div>
    </div>
  );
}
