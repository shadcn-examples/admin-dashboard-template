"use client";

import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Logo from "@/app/(landing)/components/logo";

interface RouteProps {
  href: string;
  label: string;
  items?: {
    href: string;
    label: string;
    description?: string;
    isComing: boolean;
    isDisabled?: boolean;
  }[];
}

export const routeList: RouteProps[] = [
  {
    href: "/ecommerce",
    label: "Live Preview",
    items: [
      {
        href: "/ecommerce",
        label: "Next.js",
        description: "Next.js template built on React",
        isComing: false
      },
      {
        href: "/html",
        label: "HTML",
        description: "HTML template based on Alpine.js",
        isComing: true
      },
      {
        href: "/figma",
        label: "Figma",
        description: "Figma version for designers",
        isComing: true
      }
    ]
  },
  {
    href: "/roadmap",
    label: "Roadmap"
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed start-0 end-0 top-2 z-40 lg:top-5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-opacity-15 bg-background/70 flex items-center justify-between rounded-2xl border p-4 backdrop-blur-xs">
          <Logo />
          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-card border-secondary flex flex-col justify-between rounded-tr-2xl rounded-br-2xl">
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center">
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-2">
                    {routeList.map((route, i) => (
                      <Button
                        key={i}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base">
                        <Link href={route.href}>{route.label}</Link>
                      </Button>
                    ))}

                    <Button aria-label="Get Template" asChild>
                      <Link
                        href="https://github.com/shadcn-examples/admin-dashboard-template"
                        target="_blank">
                        Get Dashboard
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* <!-- Desktop --> */}
          <NavigationMenu className="mx-auto hidden lg:block">
            <NavigationMenuList className="space-x-0">
              {routeList.map((route) => (
                <>
                  {route.items?.length ? (
                    <NavigationMenuItem key={route.label}>
                      <NavigationMenuTrigger>{route.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[240px] gap-2 md:grid-cols-1">
                          {route.items.map((subRoute, i) => (
                            <ListItem
                              key={i}
                              title={subRoute.label}
                              href={subRoute.href}
                              isComing={subRoute.isComing}>
                              {subRoute.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={route.label}>
                      <NavigationMenuLink
                        asChild
                        className={cn(navigationMenuTriggerStyle(), "bg-transparent!")}>
                        <Link href={route.href}>{route.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent!")}>
                  <Link
                    href="https://github.com/shadcn-examples/admin-dashboard-template"
                    target="_blank">
                    Github
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex">
            <Button aria-label="Get Template" asChild>
              <Link
                href="https://github.com/shadcn-examples/admin-dashboard-template"
                target="_blank">
                Get Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

function ListItem({
  title,
  children,
  href,
  isComing,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; isComing: boolean }) {
  return (
    <li {...props} className={cn({ "pointer-events-none opacity-60": isComing })}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="leading-none font-semibold">
            {title} {isComing ? <Badge variant="outline">Coming soon</Badge> : null}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
