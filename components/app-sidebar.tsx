"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers
} from "@tabler/icons-react";
import { GithubIcon, MessageCircle } from "lucide-react";

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
      url: "#",
      icon: IconDashboard
    },
    {
      title: "Chats",
      url: "#",
      icon: MessageCircle
    },
    {
      title: "Inbox",
      url: "#",
      icon: IconChartBar
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers
    }
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#"
        },
        {
          title: "Archived",
          url: "#"
        }
      ]
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
      icon: GithubIcon
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
