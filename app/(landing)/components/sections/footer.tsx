import Link from "next/link";
import Logo from "../logo";
import { Github } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-balance text-white opacity-70">
              The most comprehensive and modern admin dashboard template. Built with React,
              TypeScript, and Tailwind CSS for maximum performance and customization. shadcn/ui is
              compatible.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://github.com/shadcn-examples/admin-dashboard-template"
                target="_blank">
                <Github className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/ecommerce" className="transition-colors hover:text-white">
                  Live Demo
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="transition-colors hover:text-white">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/updates" className="transition-colors hover:text-white">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/licenses" className="transition-colors hover:text-white">
                  Licenses
                </Link>
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">Privacy Policy</li>
              <li className="cursor-pointer transition-colors hover:text-white">
                Terms of Service
              </li>
              <li className="cursor-pointer transition-colors hover:text-white">
                <Link href="/contact" className="transition-colors hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AdminPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
