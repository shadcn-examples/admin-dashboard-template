"use client";

import * as React from "react";
import {
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconFolder,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconBrandGithubFilled,
  IconMessageChatbot,
  IconLayoutKanban,
  IconUser,
  IconBasket
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Jack",
    email: "m@example.com",
    avatar: "https://bundui-images.netlify.app/avatars/08.png"
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/ecommerce",
      icon: IconDashboard
    },
    {
      title: "Chats",
      url: "/chats",
      icon: IconMessageChatbot
    },
    {
      title: "Kanban Board",
      url: "/kanban-board",
      icon: IconLayoutKanban
    },
    {
      title: "Projects",
      url: "/projects-list",
      icon: IconFolder
    },
    {
      title: "User Profile",
      url: "/user-profile-page",
      icon: IconUser
    },
    {
      title: "Orders",
      url: "/orders",
      icon: IconBasket
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch
    },
    {
      title: "Github",
      url: "https://github.com/shadcn-examples/admin-dashboard-template",
      icon: IconBrandGithubFilled
    }
  ],
  documents: [
    {
      name: "Base",
      url: "#",
      icon: IconDatabase
    },
    {
      name: "Navigation",
      url: "#",
      icon: IconReport
    },
    {
      name: "Data Entry",
      url: "#",
      icon: IconFileWord
    },
    {
      name: "Data Display",
      url: "#",
      icon: IconDatabase
    },
    {
      name: "Others",
      url: "#",
      icon: IconDatabase
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
