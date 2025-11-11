"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiZap,
  FiShoppingCart,
  FiBriefcase,
  FiLayers,
  FiSmartphone,
  FiGlobe,
  FiTrendingUp,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import WorkModal from "./WorkModal";

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "E-Commerce Solutions",
    description:
      "Build powerful online stores that convert visitors into customers with seamless shopping experiences.",
    icon: <FiShoppingCart className="text-2xl" />,
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
    icon: <FiBriefcase className="text-2xl" />,
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
    icon: <FiLayers className="text-2xl" />,
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
    icon: <FiSmartphone className="text-2xl" />,
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
    icon: <FiTrendingUp className="text-2xl" />,
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
    icon: <FiGlobe className="text-2xl" />,
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

const approachSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand goals & audience",
    icon: <FiLayout />,
  },
  {
    number: "02",
    title: "Design",
    description: "Craft stunning visuals",
    icon: <FiCode />,
  },
  {
    number: "03",
    title: "Develop",
    description: "Build with precision",
    icon: <FiZap />,
  },
  {
    number: "04",
    title: "Launch",
    description: "Deploy & optimize",
    icon: <FiTrendingUp />,
  },
];

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */
export default function ApproachServicesFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.3]);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div id="approach" ref={containerRef} className="bg-white overflow-hidden">
        {/* ---------------------- Sticky Header ---------------------- */}
        <motion.div
          style={{ y, opacity }}
          className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100"
        >
          <div className="px-6 py-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0098D4]/10 px-4 py-2 text-sm font-bold text-[#0098D4]">
                <FiZap /> Our Process
              </span>
              <h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-[#142C4C]">
                From Vision to <span className="text-[#0098D4]">Victory</span>
              </h2>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------------- Approach Flow ---------------------- */}
        <div className="px-6 py-20 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {approachSteps.map((step, i) => (
              <ApproachCard key={i} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* ---------------------- Curved Connector ---------------------- */}
        <div className="relative h-32 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f8f9fa"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            />
          </svg>
        </div>

        {/* ---------------------- Services Flow ---------------------- */}
        <div className="bg-gradient-to-b from-[#f8f9fa] to-white py-20">
          <div className="px-6 max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-3xl md:text-5xl font-extrabold text-[#142C4C] mb-12"
            >
              What We <span className="text-[#0098D4]">Build</span>
            </motion.h3>

            {/* Desktop */}
            <div className="hidden md:grid gap-16">
              {services.map((service, i) => (
                <ServiceFlowCard key={service.id} service={service} index={i} />
              ))}
            </div>

            {/* Mobile */}
            <div className="md:hidden overflow-x-auto">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    div::-webkit-scrollbar { display:none; }
                    div { -ms-overflow-style:none; scrollbar-width:none; }
                  `,
                }}
              />
              <div className="flex gap-6 px-6 pb-6 snap-x snap-mandatory">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="snap-center flex-shrink-0 w-80"
                  >
                    <ServiceCardMobile service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- Final CTA ---------------------- */}
        <div className="px-6 py-20 bg-gradient-to-t from-[#142C4C] to-[#142C4C]/95">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold mb-6">
              Ready to Start Your{" "}
              <span className="text-[#0098D4]">Journey</span>?
            </h3>
            <p className="text-xl mb-8 text-gray-300">
              Let's turn your vision into a powerful digital reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpenModal(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#0098D4] px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-white hover:text-[#142C4C] transition-all"
            >
              Start Your Project
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <WorkModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                     */
/* ------------------------------------------------------------------ */
const ApproachCard = ({
  step,
  index,
}: {
  step: (typeof approachSteps)[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="relative group"
  >
    <div className="text-center">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0098D4] text-white text-2xl shadow-lg group-hover:scale-110 transition-transform">
        {step.icon}
      </div>
      <div className="text-6xl font-black text-[#142C4C]/10 absolute -top-8 left-1/2 -translate-x-1/2">
        {step.number}
      </div>
      <h4 className="mt-8 text-xl font-bold text-[#142C4C]">{step.title}</h4>
      <p className="mt-2 text-gray-600">{step.description}</p>
    </div>

    {index < 3 && (
      <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-[#0098D4] to-[#142C4C] -translate-x-4" />
    )}
  </motion.div>
);

const ServiceFlowCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            {service.icon}
          </div>
        </motion.div>
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-bold text-[#142C4C]">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-gray-600">
              <FiCheck className="text-[#0098D4]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServiceCardMobile = ({ service }: { service: Service }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
    <div className="h-48 relative">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/70 to-transparent" />
      <div className="absolute bottom-4 left-4 text-white text-3xl">
        {service.icon}
      </div>
    </div>
    <div className="p-6 space-y-3">
      <h4 className="text-xl font-bold text-[#142C4C]">{service.title}</h4>
      <p className="text-sm text-gray-600">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.features.slice(0, 2).map((f, i) => (
          <span
            key={i}
            className="text-xs bg-[#0098D4]/10 text-[#0098D4] px-3 py-1 rounded-full"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  </div>
);
