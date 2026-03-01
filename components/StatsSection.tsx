import { Award, TrendingUp, Users, CircleCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "500+",
    label: "PROJECTS DELIVERED",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "CLIENT SATISFACTION",
  },
  {
    icon: Users,
    value: "150+",
    label: "TEAM MEMBERS",
  },
  {
    icon: CircleCheck,
    value: "15+",
    label: "YEARS EXPERIENCE",
  },
] as const;

export function StatsSection() {
  return (
    <section className="bg-white" aria-label="Key statistics">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 py-8 sm:gap-8 sm:py-10 lg:grid-cols-4 lg:gap-8 lg:py-12">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-2 text-center items-center lg:text-left lg:items-start sm:gap-3"
            >
              <div className="flex items-center gap-3">
                <Icon
                  className="size-4 shrink-0 text-orange-600 sm:size-5"
                  aria-hidden
                />
                <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {value}
                </span>
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-600 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
