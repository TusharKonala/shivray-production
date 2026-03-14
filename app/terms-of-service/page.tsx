import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Shivray Production",
  description:
    "Terms of Service for Shivray Production. Please read these terms before using our website and services.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-foreground sm:mt-12">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                By accessing or using the website and services of Shivray
                Production, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our website
                or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                2. Description of Services
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Shivray Production provides political media, campaign strategy,
                and communication services. Our website offers information about
                our services and an optional contact form through which you may
                submit your name, email address, company name, and project
                details. We use this information only to respond to your
                inquiries and do not share it with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                3. Use of the Website
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                You agree to use this website only for lawful purposes and in a
                manner that does not infringe the rights of others or restrict
                their use of the website. You must not attempt to gain
                unauthorized access to any part of the site, systems, or data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                4. Intellectual Property
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                All content on this website, including text, graphics, logos,
                and images, is the property of Shivray Production or its
                licensors and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or use our content
                without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                5. Limitation of Liability
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Shivray Production shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your
                use of this website or our services. Our liability is limited to
                the maximum extent permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                6. Changes to Terms
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                We may update these Terms of Service from time to time. We will
                post the updated terms on this page and update the &quot;Last
                updated&quot; date. Your continued use of the website after
                changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                7. Contact
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                For questions about these Terms of Service, please contact us
                via the contact form or the contact details provided on our
                website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
