import { Settings, Plus } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects List - Admin Dashboard Template",
  description:
    "A project list is a structured overview of projects with their key details and statuses. Built with React, Next.js and Tailwind CSS. shadcn/ui compatible and Typescript files included."
};

const projects = [
  {
    id: 1,
    title: "Mobile App",
    subtitle: "Prototyping",
    progress: 78,
    timeLeft: "1 week left",
    date: "May 01, 2021",
    color: "bg-orange-500",
    progressColor: "bg-orange-500",
    badgeColor: "bg-orange-500",
    icon: "📱",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 2,
    title: "Design Learn Management System",
    subtitle: "UI/UX Design",
    progress: 32,
    timeLeft: "2 week left",
    date: "June 04, 2021",
    color: "bg-blue-200",
    progressColor: "bg-blue-500",
    badgeColor: "bg-blue-500",
    icon: "💻",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 3,
    title: "Chat Mobile App",
    subtitle: "Prototyping",
    progress: 64,
    timeLeft: "6 week left",
    date: "Oct 27, 2021",
    color: "bg-pink-200",
    progressColor: "bg-pink-500",
    badgeColor: "bg-pink-500",
    icon: "💬",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 4,
    title: "Store Dashboard",
    subtitle: "UI/UX Design",
    progress: 45,
    timeLeft: "3 week left",
    date: "Sep 16, 2021",
    color: "bg-green-200",
    progressColor: "bg-green-500",
    badgeColor: "bg-green-500",
    icon: "📊",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 5,
    title: "NFT Marketplace App",
    subtitle: "Prototyping",
    progress: 69,
    timeLeft: "4 week left",
    date: "Jan 03, 2021",
    color: "bg-purple-200",
    progressColor: "bg-red-500",
    badgeColor: "bg-red-500",
    icon: "🎨",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 6,
    title: "Mobile App",
    subtitle: "Prototyping",
    progress: 56,
    timeLeft: "2 week left",
    date: "May 09, 2021",
    color: "bg-blue-200",
    progressColor: "bg-blue-500",
    badgeColor: "bg-blue-500",
    icon: "📱",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 7,
    title: "LMS App Design",
    subtitle: "UI/UX Design",
    progress: 78,
    timeLeft: "2 week left",
    date: "Jan 03, 2021",
    color: "bg-yellow-200",
    progressColor: "bg-orange-500",
    badgeColor: "bg-orange-500",
    icon: "🎓",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  },
  {
    id: 8,
    title: "Design Learn Management System",
    subtitle: "UI/UX Design",
    progress: 25,
    timeLeft: "1 week left",
    date: "June 04, 2021",
    color: "bg-blue-200",
    progressColor: "bg-blue-500",
    badgeColor: "bg-blue-500",
    icon: "💻",
    team: [
      { id: 1, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 2, avatar: "/placeholder.svg?height=32&width=32" },
      { id: 3, avatar: "/placeholder.svg?height=32&width=32" }
    ]
  }
];

export default function Page() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 md:gap-6 md:py-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects Board</h1>
          <p className="mt-1 text-gray-600">List of your ongoing projects</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`${project.color} relative overflow-hidden border-0 text-white`}>
            <CardContent className="p-6">
              {/* Settings Icon */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 h-auto p-1 text-white hover:bg-white/20">
                <Settings className="h-4 w-4" />
              </Button>

              {/* Date */}
              <div className="mb-4 text-sm opacity-90">{project.date}</div>

              {/* Project Icon */}
              <div className="mb-4 text-4xl">{project.icon}</div>

              {/* Project Title */}
              <div className="mb-6">
                <h3 className="mb-1 text-lg leading-tight font-semibold">{project.title}</h3>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm opacity-90">Progress</span>
                  <span className="text-sm font-semibold">{project.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/30">
                  <div
                    className="h-2 rounded-full bg-white transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between">
                {/* Team Avatars */}
                <div className="flex -space-x-2">
                  {project.team.map((member, index) => (
                    <div
                      key={member.id}
                      className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-white"
                      style={{ zIndex: project.team.length - index }}>
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={`Team member ${member.id}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Time Left Badge */}
                <Badge
                  className={`${project.badgeColor} border-0 text-white hover:${project.badgeColor}`}>
                  {project.timeLeft}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
