import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Zap, Star, Bug, Plus } from "lucide-react";

export const metadata = {
  title: `Shadcn Admin Dashboard - Updates`,
  description:
    "Multipurpose and powerful admin dashboard template. Compatible with shadcn/ui. Developed with Next.js, React and Tailwind CSS. Typescript supported.",
  openGraph: {
    images: [
      {
        url: "/seo.png"
      }
    ]
  }
};

const Updates = () => {
  const updates = [
    {
      version: "v2.1.0",
      date: "2024-03-15",
      type: "Feature",
      title: "New Kanban Board Component",
      description:
        "Added a fully featured kanban board component with drag-and-drop functionality, perfect for project management dashboards.",
      icon: <Plus className="h-5 w-5" />,
      color: "bg-green-500"
    },
    {
      version: "v2.0.5",
      date: "2024-03-10",
      type: "Enhancement",
      title: "Improved Dashboard Performance",
      description:
        "Optimized chart rendering and data loading for 40% faster dashboard performance. Updated React Query implementation for better caching.",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      version: "v2.0.4",
      date: "2024-03-05",
      type: "Feature",
      title: "Dark Mode Support",
      description:
        "Added comprehensive dark mode support across all components with automatic system preference detection and manual toggle.",
      icon: <Star className="h-5 w-5" />,
      color: "bg-purple-500"
    },
    {
      version: "v2.0.3",
      date: "2024-02-28",
      type: "Bug Fix",
      title: "Form Validation Improvements",
      description:
        "Fixed issues with form validation in complex nested forms. Improved error handling and user feedback messages.",
      icon: <Bug className="h-5 w-5" />,
      color: "bg-red-500"
    },
    {
      version: "v2.0.2",
      date: "2024-02-25",
      type: "Enhancement",
      title: "Mobile Responsiveness Updates",
      description:
        "Enhanced mobile experience across all dashboard components. Improved touch interactions and mobile navigation.",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-blue-500"
    },
    {
      version: "v2.0.1",
      date: "2024-02-20",
      type: "Feature",
      title: "Advanced Analytics Charts",
      description:
        "Added new chart types including heatmaps, treemaps, and advanced time series charts with zoom and pan functionality.",
      icon: <Plus className="h-5 w-5" />,
      color: "bg-green-500"
    },
    {
      version: "v2.0.0",
      date: "2024-02-15",
      type: "Major Release",
      title: "AdminPro v2.0 Launch",
      description:
        "Complete redesign with new component library, improved TypeScript support, and 50+ new components. Breaking changes included.",
      icon: <Star className="h-5 w-5" />,
      color: "bg-gradient-to-r from-blue-600 to-purple-600"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Feature":
        return "bg-green-100 text-green-700";
      case "Enhancement":
        return "bg-blue-100 text-blue-700";
      case "Bug Fix":
        return "bg-red-100 text-red-700";
      case "Major Release":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen py-16 lg:py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Project Updates</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Stay up to date with the latest features, improvements, and bug fixes we&#39;ve made to
            Admin Dashboard Template.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <CalendarDays className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Last updated: {formatDate("2024-03-15")}</span>
          </div>
        </div>

        {/* Updates Timeline */}
        <div className="space-y-8">
          {updates.map((update, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-12 w-12 ${update.color} flex items-center justify-center rounded-xl text-white shadow-lg`}>
                      {update.icon}
                    </div>
                    <div>
                      <CardTitle className="mb-1 text-xl font-semibold text-gray-900">
                        {update.title}
                      </CardTitle>
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className={getTypeColor(update.type)}>
                          {update.type}
                        </Badge>
                        <span className="text-sm font-medium text-blue-600">{update.version}</span>
                        <span className="text-sm text-gray-500">{formatDate(update.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="leading-relaxed text-gray-700">{update.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Have suggestions for new features?
          </h3>
          <p className="mb-4 text-gray-600">
            We&#39;d love to hear your feedback and ideas for improving AdminPro.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
