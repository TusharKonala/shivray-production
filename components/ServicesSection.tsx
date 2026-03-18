import { cn } from "@/lib/utils";
import {
  BarChart3,
  Camera,
  Megaphone,
  Palette,
  Radio,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Creative Content Creation",
    description:
      "We create impactful and engaging content for both political campaigns and corporate brands. From social media creatives and campaign visuals to videos and storytelling, our content is designed to capture attention, communicate clearly, and build strong audience connections.",
  },
  {
    icon: BarChart3,
    title: "Media Planning & Ad Buying",
    description:
      "Our team strategically plans and executes advertising campaigns across digital platforms, ensuring maximum reach and efficient budget utilization. We run targeted promotions that help leaders and brands increase visibility, engagement, and overall impact.",
  },
  {
    icon: Radio,
    title: "Traditional Advertising",
    description:
      "We extend digital campaigns with strategic communication approaches that strengthen brand presence and recall. Our focus remains on creating consistent messaging and visibility across platforms to ensure campaigns reach the right audience effectively.",
  },
  {
    icon: Target,
    title: "Strategic Campaign Management",
    description:
      "We specialize in end-to-end campaign management, combining political strategy with modern marketing techniques. From planning and positioning to execution, we help leaders and organizations run structured, effective, and result-driven campaigns.",
  },
  {
    icon: Palette,
    title: "Brand Development",
    description:
      "We help leaders and businesses build strong, recognizable brands through identity design, messaging, and consistent communication. Our approach ensures a clear image, stronger public perception, and long-term brand value.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "From social media management to performance marketing, we provide complete digital solutions that help political leaders and businesses grow online, generate engagement, and build a powerful digital presence.",
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
          {/* ITEM 2 – Services Grid */}
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className={cn(
                    "flex flex-col items-start gap-4 p-6 text-left transition-colors sm:gap-6 sm:p-8",
                    "border border-gray-200 hover:bg-gray-50",

                    // Tablet borders (2 cols)
                    index % 2 === 0 && "md:border-l-0",
                    index % 2 === 1 && "md:border-r-0",
                    "md:border-t-0",
                    "md:border-b-0",

                    // Desktop borders (3 cols)
                    "lg:border-l lg:border-r",
                    index % 3 === 0 && "lg:border-l-0", // first column
                    index % 3 === 2 && "lg:border-r-0", // last column
                  )}
                >
                  <Icon
                    className="size-9 shrink-0 text-orange-600 sm:size-10"
                    aria-hidden
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 sm:text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
