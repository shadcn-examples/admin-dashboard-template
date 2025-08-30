import React from "react";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import data from "../../data.json";
import { SectionCards2 } from "@/components/section-cards2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Admin Dashboard Template",
  description:
    "Ecommerce admin dashboard template built with React and Next.js. shadcn/ui compatible and Typescript files included."
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <Tabs defaultValue="overview" className="space-y-4">
        <div className="px-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="overview" className="space-y-4">
          <SectionCards />
          <SectionCards2 />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
