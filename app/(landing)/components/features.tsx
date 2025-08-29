import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: "Lightning Fast",
    description:
      "Built with performance in mind. Optimized React components for blazing fast user experience."
  },
  {
    icon: <Palette className="h-6 w-6 text-purple-600" />,
    title: "Beautiful Design",
    description:
      "Carefully crafted components with attention to detail. Modern aesthetics that users love."
  },
  {
    icon: <Code className="h-6 w-6 text-green-600" />,
    title: "Developer Friendly",
    description:
      "Clean, well-documented code with TypeScript support. Easy to customize and extend."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-orange-600" />,
    title: "Fully Responsive",
    description: "Perfect on all devices. Mobile-first design approach ensures great UX everywhere."
  },
  {
    icon: <Shield className="h-6 w-6 text-red-600" />,
    title: "Secure & Reliable",
    description: "Built with security best practices. Production-ready code you can trust."
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Community Driven",
    description: "Active community support with regular updates and feature improvements."
  }
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Everything You Need to Build Amazing Dashboards
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our template comes packed with professionally designed components, layouts, and features
            to accelerate your development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
