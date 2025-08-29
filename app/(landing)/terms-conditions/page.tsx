import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  openGraph: {
    images: [`/seo.jpg`]
  }
};

export default function Home() {
  return (
    <section className="py-8 lg:py-16">
      <div className="mx-auto max-w-(--breakpoint-md) mb-8 lg:mb-12">
        <h1 className="text-3xl font-bold mb-8 sm:text-4xl">Terms and Conditions</h1>
        <article className="ps-4">
          <ol className="list-decimal space-y-6">
            <li>
              <h2 className="text-2xl font-semibold mb-2">General Information</h2>
              <p>
                This website (<a href="https://shadcnuikit.com/">shadcnuikit.com</a>) is operated by{" "}
                <strong>Bundui</strong>. By using the Site, you agree to the terms and conditions
                outlined below. If you do not agree with these terms, please refrain from using the
                Site.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
              <p>
                <strong>Bundui</strong> reserves the right to modify the services and content
                provided on the Site. Accessing and using the Site is your responsibility.{" "}
                <strong>Bundui</strong> may make changes to the services without prior notice.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Intellectual Property Rights</h2>
              <p>
                The content, design, text, graphics, logos, icons, images, audio clips, data
                compilations, and software on the Site are the property of <strong>Bundui</strong>{" "}
                or its respective rights holders. Unauthorized use of these materials is prohibited.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
              <p>
                The Site may contain links to third-party websites. <strong>Bundui</strong> is not
                responsible for the content of these websites, and these links are provided for your
                convenience only.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Privacy</h2>
              <p>
                The protection of your personal information is of great importance to{" "}
                <strong>Bundui</strong>. Our Privacy Policy explains how your personal data is
                collected, used, and protected.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
              <p>
                <strong>Bundui</strong> shall not be held liable for any direct or indirect damages
                arising from your use of the Site. Any issues encountered while using the Site are
                solely the user&#39;s responsibility.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
              <p>
                <strong>Bundui</strong> reserves the right to update these terms and conditions at
                any time. Updates will take effect once posted on this page. It is recommended that
                you review this page periodically.
              </p>
            </li>

            <li>
              <h2 className="text-2xl font-semibold mb-2">Contact</h2>
              <p>
                If you have any questions regarding these terms and conditions, please contact us:
              </p>
              <address className="flex gap-2 not-italic">
                <strong>Bundui</strong>
                <a href="mailto:contact@shadcnuikit.com">contact@shadcnuikit.com</a>
              </address>
            </li>
          </ol>
        </article>
      </div>
    </section>
  );
}
