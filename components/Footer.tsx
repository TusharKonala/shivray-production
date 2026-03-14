"use client";

import Link from "next/link";
import { Clapperboard } from "lucide-react";

const serviceLinks = [
  { href: "#services", label: "Campaign Strategy" },
  { href: "#services", label: "Social Media Management" },
  { href: "#services", label: "Political Consulting" },
  { href: "#services", label: "Photo & Video Production" },
  { href: "#services", label: "Election Management" },
] as const;

const companyLinks = [
  { href: "#about", label: "About Us" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

const contactEmail = "hello@digitalpro.com";
const contactPhone = "+1 (234) 567-890";
const contactLocation =
  "123 Digital Avenue, Suite 400, San Francisco, CA 94105";
const contactLocationMap =
  "https://www.google.com/maps/search/?api=1&query=123+Digital+Avenue+Suite+400+San+Francisco+CA+94105";
const contactWhatsApp = "https://wa.me/1234567890";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
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
              className="inline-flex items-center gap-2 text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Shivray Production home"
            >
              <span className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-none bg-orange-600 text-white">
                <Clapperboard
                  className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
                  strokeWidth={2.5}
                />
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                SHIVRAY PRODUCTION
              </span>
            </Link>

            <p className="text-gray-400">The power behind political success.</p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              SERVICES
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
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
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              CONTACT
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactPhone.replace(/\s/g, "")}`}
                  className={linkClass}
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <a
                  href={contactLocationMap}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactLocation}
                </a>
              </li>
              <li>
                <a
                  href={contactWhatsApp}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ===== FULL WIDTH DIVIDER ===== */}
          <div className="col-span-1 border-t border-gray-800 pt-2 md:col-span-2 lg:col-span-4" />

          {/* ===== Row 2 Wrapper ===== */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-center gap-2 py-2 text-sm text-gray-400 lg:flex-row lg:justify-between">
              {/* Left */}
              <div className="text-center lg:text-left">
                © 2026 Shivray Production. All rights reserved.
              </div>

              {/* Right */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 lg:justify-end">
                {legalLinks.map(({ href, label }) => (
                  <a key={label} href={href} className={linkClass}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
