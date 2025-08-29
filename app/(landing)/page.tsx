import Testimonials from "@/app/(landing)/components/testimonials";
import Features from "@/app/(landing)/components/features";
import { HeroSection } from "@/app/(landing)/components/sections/hero";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}
