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
        <h1 className="text-3xl font-bold mb-8 sm:text-4xl">Refund Policy</h1>
        <article>
          <h2>Repayment Terms</h2>
          <p>
            We care that you are satisfied with our products and services. However, refunds may be
            available in the following cases:
          </p>
          <ul className="list-disc">
            <li>Due to technical problems or errors in the product or service.</li>
            <li>In case of incorrect product shipment or service provision.</li>
          </ul>
          <h2>Refund Requests</h2>
          <p>
            To request a refund, you must contact us within 3 days from the date of purchase. For
            refund requests, you must provide the following information
          </p>
          <ul className="list-disc">
            <li>Order number</li>
            <li>Reason for your refund request</li>
          </ul>
          <h2>Return and Refund Policy</h2>
          <p>
            After the return of the product, 10 business days are required to confirm the return.
          </p>
          <h2>Refund Process</h2>
          <p>
            Once your refund has been approved, the refund amount will be credited back to the
            payment method used at the time of purchase. It may take some time (3-5 business days)
            for your refund to reflect in your bank account, depending on your bank&#39;s processing
            time.
          </p>
          <h2>Contact Information</h2>
          <p>If you have any questions regarding our refund policy, please contact us at</p>
          <p>
            <a href="mailto:contact@shadcnuikit.com">contact@shadcnuikit.com</a>
          </p>
        </article>
      </div>
    </section>
  );
}
