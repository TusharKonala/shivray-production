import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Great firm to work with and very creative team. All our events and branding work has been completed very diligently. Their team works hard day and night and truly goes above and beyond to achieve results.",
    initial: "R",
    name: "Ram Phuge",
    title: "Mangalam Group",
  },
  {
    text: "Working with Shivray Production has been a great experience. Their professionalism and creativity in advertising posts and video promotions have helped us attract more customers and improve our brand presence.",
    initial: "S",
    name: "Syed Nasseer Hussaini",
    title: "Owner, Fitness Arena Gym & Zafaa Banquets",
  },
  {
    text: "Their team understands the importance of communication and presentation. From creative content to strategic planning, everything was handled professionally with great attention to detail.",
    initial: "B",
    name: "Bandu Khandve",
    title: "Owner, Jagatguru International School",
  },
  {
    text: "They have been a strong pillar in our journey. Their team handles promotions and content with creativity and strategy, and truly understands the vision to deliver real impact.",
    initial: "U",
    name: "Umesh Kate",
    title: "Founder, Umesh Kate Youth Foundation",
  },
  {
    text: "Their ability to emotionally connect our message with people makes them stand out. Shivray Production is not just a service provider, but a true partner in our journey.",
    initial: "P",
    name: "Poonam Vidhate",
    title: "Founder, Wama Women’s Club",
  },
  {
    text: "As a newly established publication, Shivray Production helped us shape our vision and strengthen our brand identity with a strong conceptual approach.",
    initial: "S",
    name: "Smita Shinde",
    title: "Owner, Saavi Publications",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full bg-gray-50"
      aria-labelledby="testimonials-heading"
    >
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
            <p className="max-w-2xl text-foreground  text-xl">
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
