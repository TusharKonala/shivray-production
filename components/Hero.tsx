import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="border-gray-200/80 bg-white"
      aria-label="Hero"
    >
      <div className="border-b mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 xl:grid-cols-2 lg:gap-12 xl:gap-16 py-6 lg:py-8">
          {/* Column 1: Content */}
          <div className="flex flex-col justify-center gap-6 lg:gap-8">
            {/* Badge */}
            {/* <span
              className={cn(
                "inline-flex w-fit rounded-none border border-gray-300/80 bg-transparent px-4 py-1.5 text-sm tracking-wide font-medium text-gray-700",
              )}
            >
              Enterprise Digital Solutions
            </span> */}

            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold tracking-wide text-orange-600">
                SHIVRAY PRODUCTION
              </span>

              <span className="inline-flex w-fit border border-gray-300/80 px-3 py-1 text-sm font-medium text-gray-700">
                The Power Behind Political Success
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Transform Your</span>
              <span className="block">Digital Presence</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl md:max-w-6xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              We deliver high-impact media, digital marketing, and strategic
              campaign content that enables brands, organizations, and leaders
              to expand their reach, strengthen audience engagement, and drive
              sustainable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className={cn(
                  "h-14 rounded-none bg-orange-600 px-8 text-lg font-semibold text-white",
                  "hover:bg-orange-700 focus-visible:ring-orange-500",
                )}
              >
                <a href="#contact" className="flex items-center gap-2">
                  Start your Project
                  <span aria-hidden>→</span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className={cn(
                  "h-14 rounded-none border-orange-600 bg-transparent px-8 text-lg font-semibold text-orange-600",
                  "hover:bg-orange-50 hover:border-orange-600 hover:text-orange-600",
                )}
              >
                <a href="#portfolio">View Our Work</a>
              </Button>
            </div>
          </div>

          {/* Column 2: Image */}
          <div className="relative flex min-h-[200px] w-full items-center justify-center sm:min-h-[400px] lg:min-h-[460px] xl:min-h-[490px]">
            <Image
              src="/hero-banner.jpg"
              alt="Digital solutions for enterprise growth"
              width={1600}
              height={1200}
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
