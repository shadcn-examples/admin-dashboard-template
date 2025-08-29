import { promises as fs } from "fs";
import path from "path";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import OrdersDataTable from "./data-table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders Page - Admin Dashboard Template",
  description:
    "A list of orders generated using the Tanstack Table. Built with Tailwind CSS, Shadcn UI and Next.js."
};

async function getOrders() {
  const data = await fs.readFile(path.join(process.cwd(), "app/(dashboard)/orders/data.json"));

  return JSON.parse(data.toString());
}

export default async function Page() {
  const orders = await getOrders();

  return (
    <div className="flex flex-col gap-4 px-4 py-4 md:gap-6 md:py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <Button asChild>
          <Link href="#">
            <PlusCircleIcon className="me-2" /> Create Order
          </Link>
        </Button>
      </div>
      <OrdersDataTable data={orders} />
    </div>
  );
}
