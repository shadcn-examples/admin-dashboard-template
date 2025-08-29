import ProfilePage from "./components/profile-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile Page - Admin Dashboard Template",
  description:
    "Ecommerce admin dashboard template built with React and Next.js. shadcn/ui compatible and Typescript files included. Open source."
};

export default function Page() {
  return <ProfilePage />;
}
