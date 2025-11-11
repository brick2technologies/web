import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { Helmet } from "react-helmet";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    testimonial:
      "Transformed our digital presence with innovative solutions and unmatched attention to detail.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLabs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    testimonial:
      "200% increase in conversions within the first month. Outstanding results!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studio",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    testimonial:
      "Delivered a stunning website that perfectly captures our brand identity.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO",
    company: "InnovateTech",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    testimonial:
      "Platform performance improved dramatically after their expert optimization.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "E-commerce Manager",
    company: "ShopSmart",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    testimonial:
      "Beautiful and functional e-commerce platform. Sales up 150% in two months!",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager",
    company: "AppVentures",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    testimonial:
      "Guided us from concept to launch. Final product exceeded all expectations.",
    rating: 5,
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "Brand Director",
    company: "LuxuryBrands",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    testimonial:
      "Unmatched design aesthetic. Website reflects true luxury and elegance.",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "Operations Director",
    company: "LogisticsPro",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    testimonial:
      "Flawless complex system delivered on time with incredible attention to detail.",
    rating: 5,
  },
  {
    id: 9,
    name: "Amanda White",
    role: "Startup Founder",
    company: "NextGen Solutions",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    testimonial:
      "Understood our startup vision and delivered beyond expectations — on budget!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);
  const row3 = testimonials.slice(6, 9);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
      role="region"
    >
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Client Testimonials | Brick2Tech Technologies</title>
        <meta
          name="description"
          content="Read real client testimonials from industry leaders across healthcare, real estate, startups, and enterprise sectors who trusted Brick2Tech for their digital transformation."
        />
        <link rel="canonical" href="https://brick2tech.com/#testimonials" />
        <meta property="og:title" content="Brick2Tech Client Testimonials" />
        <meta
          property="og:description"
          content="Trusted by CEOs, founders, and marketing leaders — Brick2Tech delivers outstanding digital solutions that drive measurable business results."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />
      </Helmet>

      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:mb-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0098D4]/10 px-3 py-1.5 text-xs font-bold text-[#0098D4]"
            aria-label="Client Voices"
          >
            <FiStar className="h-3.5 w-3.5" aria-hidden="true" />
            Client Voices
          </div>

          <h2
            id="testimonials-heading"
            className="mb-3 text-3xl font-bold text-[#142C4C] sm:text-4xl lg:text-5xl"
          >
            Trusted by <span className="text-[#0098D4]">Industry Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#142C4C]/70 sm:text-base">
            Real results from real clients who chose excellence.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-5 sm:space-y-6" aria-label="Client testimonials carousel">
        <MarqueeRow testimonials={[...row1, ...row1]} direction="right" duration={28} />
        <MarqueeRow testimonials={[...row2, ...row2]} direction="left" duration={32} />
        <MarqueeRow testimonials={[...row3, ...row3]} direction="right" duration={30} />
      </div>

      {/* Gradient Fades (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32"
      />
    </section>
  );
}

// ====== MARQUEE ROW COMPONENT ======
const MarqueeRow = ({
  testimonials,
  direction,
  duration,
}: {
  testimonials: Testimonial[];
  direction: "left" | "right";
  duration: number;
}) => {
  return (
    <div className="relative flex overflow-hidden" role="list">
      <motion.div
        className="flex gap-3 sm:gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

// ====== CARD COMPONENT ======
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative flex w-[240px] flex-shrink-0 flex-col rounded-xl border border-[#0098D4]/20 bg-white p-4 shadow-sm transition-all hover:shadow-md sm:w-[300px] sm:p-5"
      role="listitem"
      aria-label={`${testimonial.name} from ${testimonial.company} — ${testimonial.role}`}
    >
      {/* Rating */}
      <div className="mb-2 flex gap-0.5" aria-label={`Rating: ${testimonial.rating} out of 5`}>
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar
            key={i}
            className="h-3.5 w-3.5 fill-[#0098D4] text-[#0098D4] sm:h-4 sm:w-4"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Testimonial */}
      <p className="mb-3 text-xs leading-snug text-[#142C4C]/80 sm:text-sm">
        “{testimonial.testimonial}”
      </p>

      {/* Avatar + Info */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#0098D4]/20 sm:h-11 sm:w-11">
          <img
            src={testimonial.image}
            alt={`Photo of ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-[#142C4C] sm:text-base">
            {testimonial.name}
          </h3>
          <p className="text-[10px] text-[#142C4C]/60 sm:text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
};
