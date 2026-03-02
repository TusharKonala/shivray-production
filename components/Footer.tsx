"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceLinks = [
  { href: "#services", label: "Social Media Marketing" },
  { href: "#services", label: "SEO" },
  { href: "#services", label: "Web Development" },
  { href: "#services", label: "App Development" },
  { href: "#services", label: "Branding" },
] as const;

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
  { href: "#careers", label: "Careers" },
] as const;

const legalLinks = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#cookies", label: "Cookie Policy" },
] as const;

const linkClass =
  "text-gray-400 transition-colors hover:text-orange-500 focus:outline-none focus-visible:text-orange-500";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900" role="contentinfo">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 pt-10 pb-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8 lg:pt-14 lg:pb-6">
          {/* ===== Row 1 ===== */}

          {/* Col 1 */}
          <div className="flex flex-col gap-3">
            <Link
              href="#home"
              className="inline-flex items-center gap-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="DigitalPro home"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-orange-600 text-xl font-bold text-white">
                D
              </span>
              <span className="text-2xl font-bold tracking-tight text-white">
                DigitalPro
              </span>
            </Link>

            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions and
              strategic marketing.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              SERVICES
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              COMPANY
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              NEWSLETTER
            </h3>
            <p className="text-gray-400">
              Stay updated with our latest news and insights.
            </p>

            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
              />
              <button
                type="submit"
                className="flex h-[42px] w-[42px] shrink-0 cursor-pointer items-center justify-center bg-orange-600 text-white transition-colors hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" aria-hidden />
              </button>
            </form>
          </div>

          {/* ===== FULL WIDTH DIVIDER ===== */}
          <div className="col-span-1 border-t border-gray-800 pt-2 md:col-span-2 lg:col-span-4" />

          {/* ===== Row 2 Wrapper ===== */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center gap-2 py-2 text-sm text-gray-400 lg:flex-row lg:justify-between">
              {/* Left */}
              <div className="text-center lg:text-left">
                © 2026 DigitalPro. All rights reserved.
              </div>

              {/* Right */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 lg:justify-end">
                {legalLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className={linkClass}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
