"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import WorkModal from "./WorkModal";

/* ------------------------------------------------------------------ */
/* DATA - PROJECTS                                                    */
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

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */
export default function ProjectsSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id="work" className="bg-gradient-to-b from-[#f8f9fa] to-white py-20">
        <div className="px-6 max-w-7xl mx-auto">
          {/* ---------------------- Header ---------------------- */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-5xl font-extrabold text-[#142C4C] mb-12"
          >
            Our <span className="text-[#0098D4]">Projects</span>
          </motion.h3>

          {/* ---------------------- Desktop Layout ---------------------- */}
          <div className="hidden md:grid gap-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* ---------------------- Mobile Layout ---------------------- */}
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
                <div key={project.id} className="snap-center flex-shrink-0 w-80">
                  <ProjectCardMobile project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------- Final CTA ---------------------- */}
        <div className="px-6 py-20 bg-gradient-to-t from-[#142C4C] to-[#142C4C]/95 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
      </section>

      <WorkModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-Components                                                     */
/* ------------------------------------------------------------------ */

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
    className={`flex flex-col md:flex-row items-center gap-10 ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Image Section */}
    <div className="flex-1">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#142C4C]/80 via-transparent to-transparent" />
      </motion.div>
    </div>

    {/* Text Section */}
    <div className="flex-1 space-y-4">
      <h3 className="text-3xl md:text-4xl font-bold text-[#142C4C]">
        {project.title}
      </h3>
      <p className="text-gray-700">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-sm bg-[#0098D4]/10 text-[#0098D4] px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Numbers Speak Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
      >
        {Object.entries(project.stats).map(([key, value], i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-gradient-to-b from-white to-[#f8f9fa] border border-[#0098D4]/30 shadow-sm hover:shadow-lg p-4 transition-all"
          >
            <p className="text-sm uppercase font-semibold text-[#142C4C]/60">
              {key}
            </p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-2xl font-extrabold text-[#0098D4]"
            >
              {value}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* View Button */}
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

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-[#0098D4]/10 text-[#0098D4] px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Numbers Speak */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {Object.entries(project.stats).map(([key, value], i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-b from-white to-[#f8f9fa] border border-[#0098D4]/20 shadow-sm p-3"
          >
            <p className="text-[10px] uppercase text-[#142C4C]/60 font-semibold">
              {key}
            </p>
            <p className="text-lg font-bold text-[#0098D4]">{value}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          window.open(project.link, "_blank", "noopener,noreferrer")
        }
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0098D4] px-4 py-2 text-xs font-semibold text-white hover:bg-[#142C4C] transition-all"
      >
        View Project <FiArrowUpRight size={12} />
      </button>
    </div>
  </div>
);
