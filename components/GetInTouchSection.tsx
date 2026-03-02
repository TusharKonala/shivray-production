import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GetInTouchSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
          {/* Column 1: Content */}
          <div className="flex h-full flex-col items-start gap-6 text-left sm:gap-7 lg:gap-8">
            <div className="flex flex-col items-start gap-4 sm:gap-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                Get In Touch
              </span>
              <h2
                id="contact-heading"
                className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
              >
                Let&apos;s Start Your Digital Journey
              </h2>
              <p className="w-full text-base text-gray-600 sm:text-lg lg:text-xl">
                Ready to take your digital presence to the next level? Get in
                touch with us today and let&apos;s discuss how we can help you
                achieve your goals.
              </p>
            </div>

            {/* Contact methods */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-orange-600 text-white">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    EMAIL US
                  </span>
                  <span className="text-sm text-gray-600 sm:text-base">
                    hello@digitalpro.com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-orange-600 text-white">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    CALL US
                  </span>
                  <span className="text-sm text-gray-600 sm:text-base">
                    +1 (234) 567-890
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-orange-600 text-white">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">
                    VISIT US
                  </span>
                  <span className="text-sm text-gray-600 sm:text-base">
                    123 Digital Avenue, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-sm font-semibold text-gray-900">
                FOLLOW US
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-none border border-gray-300 text-gray-600 transition-colors hover:bg-orange-600 hover:text-white"
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="flex h-full items-stretch">
            <form className="flex w-full flex-col gap-5 rounded-none bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="w-full text-[11px] font-semibold tracking-wide text-gray-900 sm:text-xs"
                >
                  YOUR NAME <span className="text-orange-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-500/40 sm:text-base"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="w-full text-[11px] font-semibold tracking-wide text-gray-900 sm:text-xs"
                >
                  EMAIL ADDRESS <span className="text-orange-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-500/40 sm:text-base"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="company"
                  className="w-full text-[11px] font-semibold tracking-wide text-gray-900 sm:text-xs"
                >
                  COMPANY NAME
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name (optional)"
                  className="w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-500/40 sm:text-base"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="project"
                  className="w-full text-[11px] font-semibold tracking-wide text-gray-900 sm:text-xs"
                >
                  PROJECT DETAILS <span className="text-orange-600">*</span>
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  placeholder="Tell us about your project, goals, and timelines"
                  className="w-full min-h-[140px] resize-vertical rounded-none border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-500/40 sm:text-base"
                />
              </div>

              <Button
                type="submit"
                className={cn(
                  "mt-2 h-11 w-full cursor-pointer rounded-none bg-orange-600 px-4 text-base font-semibold text-white sm:h-12 sm:text-lg",
                  "hover:bg-orange-700 focus-visible:ring-orange-500",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  Send Message
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

