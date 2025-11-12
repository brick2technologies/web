"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiLayout,
  FiCode,
  FiZap,
  FiTrendingUp,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

/* ---------------------- DATA ---------------------- */
const steps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We dive deep to understand your goals, audience, and market landscape. This stage sets the creative and technical direction.",
    icon: <FiLayout />,
    color: "#0098D4",
  },
  {
    id: 2,
    title: "Design",
    description:
      "We craft visually stunning and intuitive designs that elevate your brand and user experience across all devices.",
    icon: <FiCode />,
    color: "#00A2E0",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Using modern technologies, we build scalable, efficient, and high-performance solutions tailored to your needs.",
    icon: <FiZap />,
    color: "#0079B8",
  },
  {
    id: 4,
    title: "Launch",
    description:
      "We deploy, optimize, and track performance — ensuring your digital presence achieves real-world impact.",
    icon: <FiTrendingUp />,
    color: "#00517D",
  },
];

/* ---------------------- COMPONENT ---------------------- */
export default function ApproachSection() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: "#approach",
        start: "top center",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <section
      id="approach"
      className="relative bg-gradient-to-b from-white via-[#f9fcff] to-[#e8f6ff] overflow-hidden pt-10"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0098D4]/10 px-5 py-2 text-base font-semibold text-[#0098D4]"
        >
          Our Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-[#142C4C] mt-3 px-4"
        >
          The <span className="text-[#0098D4]">Flow</span> of Creation
        </motion.h2>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        {/* Animated SVG Path */}
        <svg
          className="absolute left-[50%] top-0 -translate-x-1/2 w-[6px] h-full z-0"
          viewBox="0 0 6 1000"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M3 0 L3 1000"
            stroke="#0098D4"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Process Steps */}
        <div className="flex flex-col gap-28 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-6 h-6 rounded-full bg-[#0098D4] border-4 border-white shadow-[0_0_15px_rgba(0,152,212,0.5)] z-20"></div>

              {/* Card */}
              <div
                className="relative bg-white/90 backdrop-blur-md shadow-lg rounded-3xl p-8 md:w-1/2 border border-[#0098D4]/10"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-[0_0_20px_rgba(0,152,212,0.15)] text-3xl"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#142C4C] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="relative h-32 overflow-hidden mt-20 ">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
