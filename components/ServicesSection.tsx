import Link from "next/link";
import {
  Share2,
  Search,
  Code,
  Smartphone,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage your audience and build brand awareness across all major social platforms with data-driven strategies.",
    href: "#services",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Dominate search rankings with our proven SEO techniques that drive organic traffic and boost visibility.",
    href: "#services",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Create stunning, high-performance websites that convert visitors into customers with cutting-edge technology.",
    href: "#services",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build powerful mobile applications that deliver exceptional user experiences on iOS and Android.",
    href: "#services",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Craft a unique brand identity that resonates with your target audience and stands out in the market.",
    href: "#services",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track and optimize your campaigns with data-driven insights and real-time analytics that fuel growth.",
    href: "#services",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="w-full bg-white" aria-labelledby="services-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-10 sm:gap-8 sm:py-14 lg:gap-12 lg:py-16">
          {/* ITEM 1 – Heading Block */}
          <div className="flex flex-col items-start gap-3 text-left sm:gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              OUR SERVICES
            </span>
            <h2
              id="services-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Comprehensive Digital Solutions
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
              From strategy to execution, we offer a full suite of digital
              services designed to elevate your brand and drive meaningful
              results.
            </p>
          </div>

          {/* ITEM 2 – Services Grid */}
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
              {services.map(
                ({ icon: Icon, title, description, href }, index) => (
                  <div
                    key={title}
                    className={cn(
                      // Base (mobile)
                      "flex flex-col items-start gap-4 p-6 text-left transition-colors sm:gap-6 sm:p-8",
                      "border-b border-gray-200 hover:bg-gray-50",
                      index === services.length - 1 && "border-b-0",

                      // Tablet (md: 2 columns)
                      "md:border md:border-gray-200",
                      index % 2 === 0 && "md:border-l-0", // first column
                      index % 2 === 1 && "md:border-r-0", // second column
                      index < 2 && "md:border-t-0", // first row
                      index >= services.length - 2 && "md:border-b-0", // last row

                      // Desktop (lg: 3 columns)
                      "lg:border",
                      index % 3 === 0 && "lg:border-l-0",
                      index % 3 === 2 && "lg:border-r-0",
                      index < 3 && "lg:border-t-0",
                      index >= 3 && "lg:border-b-0",
                    )}
                  >
                    <Icon
                      className="size-9 shrink-0 text-orange-600 sm:size-10"
                      aria-hidden
                    />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {title}
                    </h3>
                    <p className="text-gray-600 sm:text-base">{description}</p>
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-orange-600 transition-colors hover:text-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      LEARN MORE
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
