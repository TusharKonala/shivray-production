"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto w-full max-w-7xl flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4">
        {/* Left: Logo */}
        <Link
          href="#home"
          className="flex shrink-0 items-center gap-2 text-gray-900 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          aria-label="DigitalPro home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-none bg-orange-600 text-xl font-bold text-white">
            D
          </span>
          <span className="text-2xl font-bold tracking-tight">DigitalPro</span>
        </Link>

        {/* Center: Links (Desktop only ≥1024px) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: CTA (Desktop) + Hamburger (Mobile/Tablet) */}
        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button
            asChild
            className={cn(
              "hidden lg:inline-flex h-11 bg-orange-600 px-4 text-white rounded-none",
              "hover:bg-orange-700 focus-visible:ring-orange-500",
            )}
          >
            <Link href="#contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>

          {/* Mobile + Tablet Hamburger */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden size-9 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile & Tablet Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-gray-200 bg-white px-5 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-gray-600 transition-colors hover:bg-orange-50 hover:text-orange-600 active:bg-orange-100 active:text-orange-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-gray-100 pt-4 flex justify-center">
            <Button
              asChild
              className="w-full max-w-sm rounded-none justify-center h-10 bg-orange-600 text-white hover:bg-orange-700"
            >
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
