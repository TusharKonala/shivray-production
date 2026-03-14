import Link from "next/link";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Cookie Policy | Shivray Production",
  description:
    "Cookie Policy for Shivray Production explaining our approach to cookies and website technologies.",
};

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

          <div className="mt-10 space-y-8 text-foreground sm:mt-12">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                1. What Are Cookies
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Cookies are small text files that may be placed on your device
                when you visit a website. They are commonly used to help
                websites function efficiently and provide information to site
                owners. This page explains how Shivray Production approaches the
                use of cookies on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                2. How We Use Cookies
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Currently, Shivray Production does not use cookies for tracking,
                analytics, or advertising purposes. If cookies are introduced in
                the future to support additional website functionality, this
                Cookie Policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                3. Types of Cookies
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Websites commonly use different types of cookies, including:
                <br />
                <br />
                <strong>Strictly necessary cookies:</strong> These cookies are
                required for a website to function properly and enable features
                such as basic page navigation and security.
                <br />
                <br />
                <strong>Functional cookies:</strong> These may be used to
                remember user preferences such as language or region in order to
                improve the browsing experience.
                <br />
                <br />
                Shivray Production currently does not use advertising or
                analytics cookies that track user behavior across websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                4. Your Choices
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                Most web browsers allow you to control cookies through their
                settings. You can configure your browser to refuse cookies or
                alert you when cookies are being sent. Please note that
                restricting cookies may affect the functionality of some
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                5. Updates
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for legal reasons. Any updates will
                be posted on this page and the "Last updated" date will be
                revised accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                6. Contact Us
              </h2>

              <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                If you have any questions about this Cookie Policy, please
                contact us through the contact form or the contact information
                available on our website.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
