import Image from "next/image";

const listItems = [
  "Data-driven strategies that deliver measurable ROI",
  "Award-winning creative team with proven expertise",
  "End-to-end solutions from concept to execution",
  "Transparent communication and dedicated support",
] as const;

export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="bg-gray-50">
      <div className="mx-auto w-full max-w-7xl border-b border-gray-200/80 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-10 sm:py-12 sm:gap-10 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Column 1: Image */}
          <div className="relative w-full overflow-hidden h-[320px] sm:h-[380px] lg:h-[400px]">
            <Image
              src="/about-us.jpg"
              alt="DigitalPro team and digital innovation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Column 2: Content */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              ABOUT US
            </span>
            <h2
              id="about-heading"
              className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              We Build Digital Experiences That Drive Growth
            </h2>
            <p className="max-w-xl text-gray-600 sm:text-lg">
              Founded in 2011, DigitalPro has been at the forefront of digital
              innovation, helping businesses of all sizes achieve their online
              goals. Our passionate team of strategists, designers, and
              developers work together to create solutions that matter.
            </p>
            <ul className="space-y-3">
              {listItems.map((item) => (
                <li key={item}>
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-1 bg-orange-600 mt-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
