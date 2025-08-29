import ContactForm from "@/app/(landing)/contact/components/contact-form";

export const metadata = {
  title: `Shadcn Admin Dashboard - Contact`,
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

export default function Page() {
  return <ContactForm />;
}
