import { cn } from "@/lib/utils";
import {
  BarChart3,
  Brain,
  Globe,
  MessageSquare,
  Puzzle,
  Users,
  type LucideIcon,
} from "lucide-react";

const missionValues: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: MessageSquare,
    title: "Transparency & Communication",
    text: "We believe in maintaining clear and open communication with our clients. From planning to campaign execution, our team ensures that leaders stay informed about every step of the process.",
  },
  {
    icon: BarChart3,
    title: "Measurable Impact",
    text: "Our campaigns are designed to create real engagement and measurable influence. We track audience reach, engagement levels, and campaign performance to continuously improve strategies.",
  },
  {
    icon: Users,
    title: "Collaboration & Leadership Vision",
    text: "At Shivray Production, your vision is the foundation of everything we do. We work closely with leaders and their teams to ensure their message reaches the people in the most powerful and authentic way.",
  },
  {
    icon: Puzzle,
    title: "Customized Political Solutions",
    text: "No two political campaigns are the same. That's why we develop customized strategies and communication plans tailored to the needs of each leader, region, and election environment.",
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    text: "We go beyond content creation. Our team analyzes political trends, voter psychology, and regional dynamics to design strategic campaigns that strengthen public connection and influence.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Campaign Expertise",
    text: "Modern political communication requires a strong presence across multiple platforms. Shivray Production creates integrated campaigns that ensure maximum reach and impact.",
  },
];

function ValueCard({
  icon: Icon,
  title,
  text,
  className,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-4 p-6 text-left transition-colors sm:gap-6 sm:p-8",
        "border border-gray-200 hover:bg-gray-50",
        className,
      )}
    >
      <Icon
        className="size-9 shrink-0 text-orange-600 sm:size-10"
        aria-hidden
      />

      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

      <p className="text-foreground sm:text-base">{text}</p>
    </div>
  );
}

export function MissionSection() {
  return (
    <section
      id="mission"
      className="w-full bg-gray-50"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-8 sm:gap-8 sm:py-12 lg:gap-12 lg:py-14">
          {/* Mission Intro */}
          <div className="flex flex-col items-start gap-3 text-left sm:gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              OUR MISSION
            </span>

            <h2
              id="mission-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            >
              We are Inspired by Leadership, Driven by Strategy.
            </h2>
          </div>

          {/* Mission paragraph */}
          <p className="w-full text-lg text-foreground sm:text-xl">
            Our mission is to empower political leaders, social organizations,
            and public representatives with strategic communication, powerful
            storytelling, and modern campaign tools that help them connect with
            people and create meaningful impact in society—across social media
            platforms, video platforms, ground-level promotional campaigns, and
            digital and traditional media.
          </p>

          {/* Experience section */}
          <div className="w-full">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Experience That Matters
            </h3>

            <div className="flex flex-col gap-3 text-foreground sm:text-base">
              <p>
                Shivray Production has worked with renowned political leaders,
                organizations, and public representatives across Maharashtra.
                Our experience includes projects associated with:
              </p>

              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Leaders connected with{" "}
                  <strong>Ajit Pawar&apos;s Nationalist Congress Party</strong>
                </li>

                <li>
                  Campaign work for{" "}
                  <strong>Swarajya Party led by Sambhaji Raje Bhosale</strong>
                </li>

                <li>
                  Media and promotional work related to{" "}
                  <strong>Raigad Fort Authority</strong>
                </li>

                <li>
                  Campaign support for{" "}
                  <strong>MLAs, MPs, and Municipal Corporators</strong>
                </li>
              </ul>

              <p>
                This experience allows us to understand the complexities of
                political communication and deliver impactful campaign
                solutions.
              </p>
            </div>
          </div>

          {/* Closing mission paragraph */}
          <p className="w-full text-lg text-foreground sm:text-xl">
            We believe that the right strategy, the right message, and the right
            execution can shape the future of leadership.
          </p>

          {/* Mission values grid */}
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3">
              {missionValues.map((value, index) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  text={value.text}
                  className={cn(
                    index % 2 === 0 && "md:border-l-0",
                    index % 2 === 1 && "md:border-r-0",
                    index >= 4 && "md:border-b-0",

                    "lg:border-l lg:border-r",
                    index % 3 === 0 && "lg:border-l-0",
                    index % 3 === 2 && "lg:border-r-0",
                    index >= 3 && "lg:border-b-0",

                    "md:border-t-0",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
