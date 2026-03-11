import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-gray-50">
      <div className="mx-auto w-full max-w-7xl border-b border-gray-200/80 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-8 sm:py-10 md:py-12 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:py-14">
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
              Strategic Media & Campaign Solutions
            </h2>
            <p>
              <strong>Shivray Production</strong> is a dynamic political media
              and campaign strategy company dedicated to empowering leaders and
              organizations with impactful communication and strategic
              execution. In today’s fast-moving political landscape, success
              requires more than just a vision; it demands powerful
              storytelling, strategic planning, and a strong digital presence.
              Shivray Production brings all these elements together to help
              political leaders connect with people, build influence, and
              strengthen their public image.
            </p>
            <p>
              Our team specializes in political campaign management, social
              media promotion, strategic consulting, and high-quality visual
              production. From creating compelling digital content to designing
              complete election strategies, we provide end-to-end solutions that
              support leaders throughout their political journey.
            </p>
            <p>
              Over the years, Shivray Production has worked with several
              respected political leaders, parties, and public representatives
              across Maharashtra. Our experience includes collaborations related
              to leaders associated with{" "}
              <strong>Nationalist Congress Party led by Ajitdada Pawar</strong>,
              <strong> Swarajya Party led by Sambhaji Raje Bhosale</strong>,
              work connected with the <strong>Raigad Fort Authority</strong>,
              and election campaigns for
              <strong> MLAs, MPs, and Corporators</strong>. Our goal is simple
              to transform leadership vision into impactful public
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
