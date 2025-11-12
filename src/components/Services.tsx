import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FiShoppingCart,
  FiBriefcase,
  FiLayers,
  FiSmartphone,
  FiTrendingUp,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";
import Modal from './WorkModal';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "E-Commerce Solutions",
    description:
      "Build powerful online stores that convert visitors into customers with seamless shopping experiences.",
    icon: <FiShoppingCart className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Multi-vendor Support",
      "Analytics Dashboard",
    ],
  },
  {
    id: 2,
    title: "Corporate Websites",
    description:
      "Professional enterprise websites that establish credibility and showcase your brand's authority.",
    icon: <FiBriefcase className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    features: [
      "CMS Integration",
      "Team Portals",
      "Document Management",
      "Multi-language Support",
    ],
  },
  {
    id: 3,
    title: "Portfolio & Creative",
    description:
      "Stunning portfolio websites that showcase your work and attract your ideal clients.",
    icon: <FiLayers className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    features: [
      "Custom Animations",
      "Gallery Systems",
      "Client Testimonials",
      "Contact Forms",
    ],
  },
  {
    id: 4,
    title: "Web Applications",
    description:
      "Custom web apps built with cutting-edge technology to solve your unique business challenges.",
    icon: <FiSmartphone className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    features: [
      "Real-time Features",
      "API Integration",
      "Cloud Deployment",
      "Scalable Architecture",
    ],
  },
  {
    id: 5,
    title: "Landing Pages",
    description:
      "High-converting landing pages optimized for marketing campaigns and lead generation.",
    icon: <FiTrendingUp className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: [
      "A/B Testing Ready",
      "SEO Optimized",
      "Fast Loading",
      "Conversion Focused",
    ],
  },
  {
    id: 6,
    title: "Custom Solutions",
    description:
      "Tailored web solutions designed specifically for your unique business requirements.",
    icon: <FiGlobe className="text-2xl text-[#0098D4]" />,
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    features: [
      "Fully Customizable",
      "Third-party Integration",
      "Advanced Features",
      "Ongoing Support",
    ],
  },
];

export default function ServicesShowcase() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Our Services | Brick2Tech Technologies – What We Build</title>
        <meta
          name="description"
          content="Explore Brick2Tech’s wide range of web development services including e-commerce, corporate sites, web apps, and custom digital solutions crafted with Next.js, React, and Tailwind."
        />
        <link rel="canonical" href="https://brick2tech.com/#services" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section
        id="services"
        className="bg-white"
        aria-labelledby="services-heading"
        role="region"
      >
        {/* Hero Section */}
        <div className="px-4 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#0098D4]">
              Our Services
            </p>
            <h1
              id="services-heading"
              className="mb-6 text-5xl font-bold text-[#142C4C] md:text-7xl"
            >
              What We <span className="text-[#0098D4]">Build</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-700 md:text-2xl">
              We craft digital experiences designed to perform, scale, and inspire.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="space-y-24 md:space-y-36">
          {services.map((service, index) => (
            <ServiceBlock
              key={service.id}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="px-4 py-20 text-center bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-[#142C4C] md:text-6xl">
              Let’s Build <span className="text-[#0098D4]">Your Vision</span>
            </h2>
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              Start your next big idea with our expert development team.
            </p>
            <button
              className="group inline-flex items-center rounded-full bg-[#142C4C] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#0098D4] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#0098D4]/30"
              onClick={() => setOpenModal(true)}
            >
              Start Your Project
              <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </section>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

/* ==================== Sub Components ==================== */

const ServiceBlock = ({
  service,
  reverse,
}: {
  service: Service;
  reverse?: boolean;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={`mx-auto flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } max-w-7xl items-center gap-8 md:gap-16 px-6`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Left / Right Image */}
      <motion.div
        style={{ y, opacity }}
        className="relative flex-1 rounded-3xl overflow-hidden shadow-lg"
      >
        <img
          src={service.image}
          alt={service.title}
          className="h-[320px] md:h-[420px] w-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* Right / Left Text */}
      <motion.div
        style={{ y }}
        className="flex-1"
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4">{service.icon}</div>
        <h3 className="text-3xl font-bold text-[#142C4C] md:text-4xl mb-4">
          {service.title}
        </h3>
        <p className="text-lg text-gray-700 mb-6">{service.description}</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[#142C4C]/80 font-medium"
            >
              <span className="text-[#0098D4]">•</span> {feature}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
