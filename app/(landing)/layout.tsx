import React from "react";
import { Navbar } from "@/app/(landing)/components/navbar";
import { FooterSection } from "@/app/(landing)/components/sections/footer";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
