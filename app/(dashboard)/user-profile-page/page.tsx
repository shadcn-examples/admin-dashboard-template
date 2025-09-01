import ProfilePage from "./components/profile-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile EmptyState - Admin Dashboard Template",
  description:
    "A user profile page is a personal page displaying a user’s information, settings, and activity. Built with React, Next.js and Tailwind CSS. shadcn/ui compatible and Typescript files included."
};

export default function Page() {
  return <ProfilePage />;
}
