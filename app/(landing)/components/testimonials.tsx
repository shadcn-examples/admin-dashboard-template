import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Loved by Developers Worldwide
          </h2>
          <div className="mb-8 flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-lg font-semibold text-gray-700">
              4.9/5 from 500+ reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "Frontend Developer",
              content:
                "This template saved me weeks of development time. The code quality is exceptional!",
              avatar: "SJ"
            },
            {
              name: "Mike Chen",
              role: "Startup Founder",
              content: "Perfect for our admin panel. Professional design and easy to customize.",
              avatar: "MC"
            },
            {
              name: "Lisa Rodriguez",
              role: "UI/UX Designer",
              content: "Beautiful components and great attention to detail. Highly recommended!",
              avatar: "LR"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 font-semibold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700">&#34;{testimonial.content}&#34;</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg">
              Read More Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
