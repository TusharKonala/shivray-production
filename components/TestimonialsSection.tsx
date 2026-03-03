import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Working with this agency transformed our digital presence completely. Their strategic approach and attention to detail resulted in a 300% increase in qualified leads.",
    initial: "S",
    name: "Sarah Johnson",
    title: "CEO, TechFlow Solutions",
  },
  {
    text: "The team delivered beyond our expectations. Their expertise in SEO and content strategy helped us dominate our niche in just 6 months.",
    initial: "M",
    name: "Michael Chen",
    title: "Marketing Director, GrowthLabs",
  },
  {
    text: "From branding to web development, they handled everything seamlessly. Our new website is not just beautiful, it converts like crazy!",
    initial: "E",
    name: "Emily Rodriguez",
    title: "Founder, Bloom Beauty",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-10 sm:gap-10 sm:py-12 lg:gap-12 lg:py-16">
          {/* Item 1 — Header (left aligned) */}
          <div className="flex flex-col items-start gap-5 text-left sm:gap-6 lg:gap-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
              TESTIMONIALS
            </span>
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            >
              What Our Clients Say
            </h2>
            <p className="max-w-2xl text-gray-600 text-xl">
              Don&apos;t just take our word for it. Here&apos;s what industry
              leaders have to say about working with us.
            </p>
          </div>

          {/* Item 2 — Testimonials Grid */}
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {testimonials.map(({ text, initial, name, title }) => (
                <div
                  key={name}
                  className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col text-left"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-600 text-orange-600"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-8">
                    &quot;{text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-600 flex items-center justify-center text-white font-bold">
                      {initial}
                    </div>

                    <div>
                      <div className="font-bold text-gray-900">{name}</div>
                      <div className="text-sm text-gray-600">{title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
