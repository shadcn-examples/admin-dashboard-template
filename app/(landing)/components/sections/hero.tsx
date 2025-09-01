"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Components" },
  { value: "12+", label: "EmptyState Templates" },
  { value: "5k+", label: "Happy Customers" },
  { value: "99%", label: "Satisfaction Rate" }
];

export const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.1),transparent_50%)]" />

      <div className="relative mx-auto grid place-items-center py-16 md:py-40 lg:max-w-(--breakpoint-xl)">
        <div className="space-y-10 pb-20 text-center lg:max-w-(--breakpoint-md)">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">
              Multipurpose Admin Dashboard Template
            </h1>
            <p className="text-muted-foreground mx-auto max-w-(--breakpoint-sm) text-xl">
              {`Multipurpose and powerful admin panel template built with Shadcn components. Contains Typescript files.`}
            </p>
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button size="lg" asChild>
              <Link href="/ecommerce">
                View Live Demo
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" asChild variant="secondary">
              <Link
                href="https://github.com/shadcn-examples/admin-dashboard-template"
                target="_blank">
                View Github
              </Link>
            </Button>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <figure className="relative aspect-3/2 w-full">
          <Image
            fill
            className="rouded-lg relative mx-auto flex w-full items-center rounded-lg bg-top object-cover leading-none dark:hidden"
            src="/screenshot.png"
            alt="shadcn admin dashboard landing page"
          />
        </figure>
      </div>
    </section>
  );
};
