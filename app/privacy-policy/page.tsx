import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Shivray Production",
  description:
    "Privacy Policy for Shivray Production. Learn how we collect and use your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-block text-sm font-medium text-orange-600 transition-colors hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            ← Back to Home
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-foreground sm:mt-12">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                1. Introduction
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Shivray Production (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, and safeguard
                information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                2. Information We Collect
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Our website collects limited information only through an
                optional contact form. If you choose to submit the form, we may
                collect your <strong>name</strong>,{" "}
                <strong>email address</strong>, <strong>company name</strong>,
                and <strong>project details</strong>. You are not required to
                provide this information to browse our site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                3. How We Use Your Information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                The information you provide through the contact form is used
                solely to respond to your inquiries and to communicate with you
                about your project or request. We do not use your data for
                marketing campaigns, analytics profiling, or any purpose other
                than responding to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                4. Sharing of Information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                We do not sell, rent, or share your personal information with
                third parties. Your name, email, company name, and project
                details are kept confidential and are used only internally to
                respond to your contact request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                5. Data Security
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                We take reasonable measures to protect the information you
                submit through our website. However, no method of transmission
                over the Internet is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                6. Your Rights
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                You may request access to, correction of, or deletion of any
                personal information we hold about you. To do so, please contact
                us using the details provided on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                7. Contact Us
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                If you have questions about this Privacy Policy or our data
                practices, please contact us through the contact form or the
                contact information available on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
