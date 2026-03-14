import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    image: "/web-dev.jpg",
    category: "WEB DEVELOPMENT",
    title: "E-Commerce Revolution",
    description: "250% increase in conversions",
  },
  {
    image: "/fintech.jpg",
    category: "APP DEVELOPMENT",
    title: "FinTech Mobile App",
    description: "100K+ downloads in 3 months",
  },
  {
    image: "/luxury-branding.jpg",
    category: "BRANDING",
    title: "Luxury Brand Identity",
    description: "Brand recognition up 180%",
  },
  {
    image: "/marketing-strategy.jpg",
    category: "SOCIAL MEDIA",
    title: "SaaS Marketing Campaign",
    description: "5M impressions, 45% engagement",
  },
  {
    image: "/seo.jpg",
    category: "SEO",
    title: "Enterprise SEO Strategy",
    description: "Page 1 rankings for 50+ keywords",
  },
  {
    image: "/tech-startup.jpg",
    category: "FULL SERVICE",
    title: "Tech Startup Launch",
    description: "$2M funding raised post-launch",
  },
] as const;

export function WorkSection() {
  return (
    <section
      id="portfolio"
      className="w-full bg-white"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-8 sm:gap-12 sm:py-10 lg:gap-14 lg:py-14">
          {/* Item 1 – Heading Block */}
          <div className="flex flex-col items-start gap-3 text-left sm:gap-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              OUR WORK
            </span>
            <h2
              id="work-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Success Stories & Case Studies
            </h2>
            <p className="max-w-2xl text-gray-600 sm:text-lg">
              Explore our portfolio of transformative projects that have helped
              businesses achieve remarkable growth and digital excellence.
            </p>
          </div>

          {/* Item 2 – Projects Grid (2 rows × 3 cols) */}
          {/* Item 2 – Projects Grid */}
          <div className="mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {projects.map(({ image, category, title, description }) => (
                <div
                  key={title}
                  className="group bg-white transition-colors hover:bg-gray-50"
                >
                  {/* Image Wrapper */}
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Orange Hover Overlay (ONLY ON IMAGE) */}
                    <div className="absolute inset-0 bg-orange-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                      <div className="text-white">
                        <div className="text-xs font-semibold uppercase tracking-wider mb-1">
                          {category}
                        </div>
                        <div className="text-sm">{description}</div>
                      </div>
                    </div>
                  </div>

                  {/* Text Section (Unchanged) */}
                  <div className="flex flex-col gap-2 p-5 sm:gap-3 sm:p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      {category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {title}
                    </h3>

                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Item 3 – CTA Button */}
          <div className="flex justify-start">
            <Button
              asChild
              className={cn(
                "h-12 min-w-[150px] rounded-none bg-orange-600 px-6 text-base text-white sm:h-12 sm:min-w-[210px] sm:px-10",
                "hover:bg-orange-700 focus-visible:ring-orange-500",
              )}
            >
              <a href="#contact" className="inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="size-4 sm:size-5" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
