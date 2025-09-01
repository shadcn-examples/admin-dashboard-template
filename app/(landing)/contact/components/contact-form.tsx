"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast("Message sent!", {
        description: "Thank you for your message. We'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-16 lg:py-40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            <Mail />
            Get in Touch
          </Badge>
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Contact Us</h1>
          <p className="text-muted-foreground text-lg text-balance">
            Have questions about Admin Dashboard Template? Need support or want to discuss custom
            solutions? We&#39;d love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject *
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-white hover:from-blue-700 hover:to-purple-700">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="text-center">
            <p className="mt-4 text-sm text-gray-500">We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
