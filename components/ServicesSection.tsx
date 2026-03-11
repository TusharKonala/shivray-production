import { cn } from "@/lib/utils";
import { Camera, Flag, Lightbulb, Megaphone, Target } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Political Campaign Strategy",
    description:
      "At Shivray Production, we work as strategic partners and kingmakers for political leaders. Our team studies political landscapes, voter sentiment, and regional dynamics to design winning campaign strategies that help leaders connect with the people effectively.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management & Promotion",
    description:
      "In today’s digital era, political presence online is essential. We manage and grow leaders’ social media profiles, create engaging content, handle daily postings, and run targeted promotional campaigns that increase visibility, public engagement, and credibility.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Political Consulting",
    description:
      "Every constituency is different, and every campaign needs a unique strategy. Our team provides ground-level political insights and strategic guidance to help leaders understand where to focus, how to communicate, and which approach will work best in different regions.",
  },
  {
    icon: Camera,
    title: "Professional Photo & Video Production",
    description:
      "Visual storytelling plays a crucial role in modern political communication. Shivray Production offers a full range of professional media production services, including Political photoshoots, Cinematic campaign videos, Social media reels, Drone videography, Portrait photography, and Event documentation. Our creative team ensures every frame reflects leadership, vision, and authenticity.",
  },
  {
    icon: Flag,
    title: "Election Campaign Management",
    description:
      "From planning to execution, Shivray Production has experience handling the entire communication and promotional responsibilities during elections. We support leaders with digital campaigns, media content, and strategic planning to ensure a powerful presence throughout the election process.",
  },
] as const;

const tabletService = services[4];
const TabletIcon = tabletService.icon;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-white"
      aria-labelledby="services-heading"
    >
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
              Why Shivray Production
            </h2>
            <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
              From campaign strategy to election management, Shivray Production
              provides complete political media and communication services that
              help leaders connect with people and build strong public
              influence.
            </p>
          </div>

          {/* ITEM 2 – Services Grid */}
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
              {services
                .slice(0, 4)
                .map(({ icon: Icon, title, description }, index) => (
                  <div
                    key={title}
                    className={cn(
                      "flex flex-col items-start gap-4 p-6 text-left transition-colors sm:gap-6 sm:p-8",
                      "border border-gray-200 hover:bg-gray-50",
                      // Tablet borders
                      index % 2 === 0 && "md:border-l-0",
                      index % 2 === 1 && "md:border-r-0",
                      // Restore borders on desktop
                      "lg:border-l lg:border-r",
                      // Desktop borders
                      index === 0 && "lg:border-l-0",
                      index === 2 && "lg:border-r-0",
                      "md:border-t-0",
                      index === 3 && "lg:hidden",
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
                  </div>
                ))}
              <div className="flex md:flex lg:hidden col-span-1 md:col-span-2 md:justify-center">
                <div className="flex w-full md:max-w-md flex-col items-start gap-4 p-6 sm:p-8 border border-gray-200 md:border-t-0 md:border-b-0 hover:bg-gray-50">
                  <TabletIcon className="size-9 shrink-0 text-orange-600 sm:size-10" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tabletService.title}
                  </h3>
                  <p className="text-gray-600 sm:text-base">
                    {tabletService.description}
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex col-span-3 justify-center">
                {services
                  .slice(3)
                  .map(({ icon: Icon, title, description }, index) => (
                    <div
                      key={title}
                      className={cn(
                        "flex w-full max-w-md flex-col items-start gap-4 p-6 text-left transition-colors sm:gap-6 sm:p-8 border border-gray-200 hover:bg-gray-50",
                        "border-t-0 border-b-0",
                        index === 0 && "border-l-0",
                        index === 1 && "border-r-0",
                      )}
                    >
                      <Icon
                        className="size-9 shrink-0 text-orange-600 sm:size-10"
                        aria-hidden
                      />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {title}
                      </h3>
                      <p className="text-gray-600 sm:text-base">
                        {description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
