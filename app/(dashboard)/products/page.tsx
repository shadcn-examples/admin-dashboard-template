import type { Metadata } from "next";
import Products from "./components/products";

export const metadata: Metadata = {
  title: "Product List - Admin Dashboard Template",
  description:
    "A product list is a catalog displaying products with key details. Filter or search the list. Built with React, Next.js, Tailwind CSS and shadcn/ui."
};

export default function Page() {
  return <Products />;
}
