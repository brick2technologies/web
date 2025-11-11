"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiZap,
  FiTrendingUp,
  FiArrowRight,
 
  FiArrowUpRight,
} from "react-icons/fi";
import WorkModal from "./WorkModal";

/* ------------------------------------------------------------------ */
/* DATA                                                               */
/* ------------------------------------------------------------------ */
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats: Record<string, string>;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nisarga Hyd",
    category: "real estate & digital marketing",
    description:
      "A modern real estate and digital marketing website built to showcase premium projects and boost online visibility for property listings and marketing campaigns.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762837677/Screenshot_2025-11-11_103640_qnbg0h.png",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Marketing Automation"],
    stats: { leads: "+120%", traffic: "+200%" },
    link: "https://nisargahyd.com",
  },
  {
    id: 2,
    title: "HK Gastro Hospital",
    category: "healthcare",
    description:
      "A hospital website for gastroenterology specialists, featuring appointment booking, doctor profiles, and patient service management.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762837772/Screenshot_2025-11-11_103906_mwjh3w.png",
    tags: ["React", "Node.js", "MongoDB", "Booking System"],
    stats: { appointments: "+350%", satisfaction: "4.9/5" },
    link: "https://hkgastro.in",
  },
  {
    id: 3,
    title: "Shubha",
    category: "ecommerce & event management",
    description:
      "A complete e-commerce and event management platform offering pooja samagri and event planning services with seamless shopping experience.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762837812/Screenshot_2025-11-11_103955_lboh5u.png",
    tags: ["Next.js", "Stripe", "MongoDB", "E-commerce"],
    stats: { sales: "+210%", returnUsers: "75%" },
    link: "https://shubha.co.in",
  },
  {
    id: 4,
    title: "BridgeGap Hospital",
    category: "healthcare",
    description:
      "A dedicated cancer hospital website serving Northern Telangana, designed for awareness, appointment scheduling, and patient engagement.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762837905/Screenshot_2025-11-11_104128_q2j3ed.png",
    tags: ["React", "Tailwind", "Firebase", "Healthcare UI"],
    stats: { reach: "+300%", patients: "+10K+" },
    link: "https://bridgegaphospital.vercel.app",
  },
  {
    id: 5,
    title: "Metsonic",
    category: "industrial equipment supplier",
    description:
      "A B2B industrial supply company website showcasing testing machines for industries, institutions, and colleges across India.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762837954/Screenshot_2025-11-11_104210_b28poa.png",
    tags: ["Next.js", "GSAP", "Responsive Design", "Product Showcase"],
    stats: { clients: "+180+", inquiries: "+240%" },
    link: "https://metsonic.vercel.app",
  },
  {
    id: 6,
    title: "A360 Studio",
    category: "architecture & interior design",
    description:
      "An architecture and design studio website showcasing 3D walkthroughs, building plans, and modern design concepts for premium clients.",
    image:
      "https://res.cloudinary.com/diqux3y0a/image/upload/v1762838020/Screenshot_2025-11-11_104323_ldt8bs.png",
    tags: ["React", "Tailwind", "Framer Motion", "3D Visuals"],
    stats: { projects: "200+", engagement: "+160%" },
    link: "https://a360studio.vercel.app",
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
export default function ApproachProjectsFlow() {
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

        {/* ---------------------- Projects Section ---------------------- */}
        <div className="bg-gradient-to-b from-[#f8f9fa] to-white py-20">
          <div className="px-6 max-w-7xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center text-3xl md:text-5xl font-extrabold text-[#142C4C] mb-12"
            >
              Our <span className="text-[#0098D4]">Projects</span>
            </motion.h3>

            <div className="hidden md:grid gap-16">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
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
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="snap-center flex-shrink-0 w-80"
                  >
                    <ProjectCardMobile project={project} />
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
              Let’s turn your vision into a powerful digital reality.
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

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`flex flex-col md:flex-row items-center gap-8 ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="flex-1">
      <div className="relative overflow-hidden rounded-3xl shadow-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/80 to-transparent" />
      </div>
    </div>

    <div className="flex-1 space-y-4">
      <h3 className="text-3xl font-bold text-[#142C4C]">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <ul className="space-y-1">
        {project.tags.map((tag, i) => (
          <li key={i} className="text-sm text-[#0098D4] font-medium">
            • {tag}
          </li>
        ))}
      </ul>
      <div className="pt-4">
        <button
          onClick={() =>
            window.open(project.link, "_blank", "noopener,noreferrer")
          }
          className="inline-flex items-center gap-2 rounded-full bg-[#0098D4] px-6 py-2 text-white font-semibold hover:bg-[#142C4C] transition-all"
        >
          View Project <FiArrowUpRight />
        </button>
      </div>
    </div>
  </motion.div>
);

const ProjectCardMobile = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
    <div className="h-48 relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/70 to-transparent" />
    </div>
    <div className="p-6 space-y-3">
      <h4 className="text-xl font-bold text-[#142C4C]">{project.title}</h4>
      <p className="text-sm text-gray-600">{project.description}</p>
    </div>
  </div>
);
