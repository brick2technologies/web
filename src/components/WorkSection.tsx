import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp, FiZap } from "react-icons/fi";
import Modal from "./WorkModal";
import { Helmet } from "react-helmet-async";

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

export default function ParallaxWorkSection() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Our Work | Brick2Tech Technologies – Web Development Projects</title>
        <meta
          name="description"
          content="Explore Brick2Tech’s portfolio featuring real estate, healthcare, e-commerce, and industrial projects built with Next.js, React, and AI-driven design for performance and innovation."
        />
        <link rel="canonical" href="https://brick2tech.com/#work" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Brick2Tech Portfolio | Selected Works" />
        <meta
          property="og:description"
          content="View Brick2Tech’s top web development and branding projects from Hyderabad — combining technology, design, and strategy."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />
        <meta property="og:url" content="https://brick2tech.com/#work" />
      </Helmet>

      <section
        id="work"
        className="bg-white"
        aria-labelledby="work-heading"
        role="region"
      >
        {/* Hero Section */}
        <div className="px-4 py-24 md:py-32">
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#0098D4]">
                Portfolio
              </p>
              <h1
                id="work-heading"
                className="mb-6 text-5xl font-bold text-[#142C4C] md:text-7xl"
              >
                Selected <span className="text-[#0098D4]">Works</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-700 md:text-2xl">
                Crafting digital experiences that drive results and exceed expectations
              </p>
            </motion.div>
          </div>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <TextParallaxContent
            key={project.id}
            imgUrl={project.image}
            subheading={project.category.toUpperCase()}
            heading={project.title}
            project={project}
            index={index}
          />
        ))}

        {/* CTA Section */}
        <div className="px-4 py-14 md:py-12 bg-transparent text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-[#142C4C] md:text-6xl">
              Let's Build Something <span className="text-[#0098D4]">Amazing</span>
            </h2>
            <p className="mb-8 text-xl text-gray-700 md:text-2xl">
              Ready to transform your ideas into reality?
            </p>
            <button
              className="group inline-flex items-center rounded-full bg-[#142C4C] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#0098D4] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#0098D4]/30"
              onClick={() => setOpenModal(true)}
              aria-label="Start your project"
            >
              Start Your Project
              <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-white text-gray-900 p-8 shadow-2xl">
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

// ==================== Sub Components ====================

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  project,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  project: Project;
  index: number;
}) => {
  return (
    <div
      style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
      role="group"
      aria-label={`Project ${heading}`}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <ProjectContent project={project} />
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      role="img"
      aria-label="Project visual preview"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,30,60,0.85) 0%, rgba(0,174,255,0.65) 100%)",
          opacity,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl font-semibold md:mb-4 md:text-3xl text-[#0098D4] drop-shadow-md">
        {subheading}
      </p>
      <h3 className="text-center text-4xl font-bold md:text-7xl drop-shadow-lg">
        {heading}
      </h3>
    </motion.div>
  );
};

const ProjectContent = ({ project }: { project: Project }) => {
  const statEntries = Object.entries(project.stats);

  return (
    <div
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12"
      role="article"
      aria-labelledby={`project-${project.id}-title`}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="col-span-1 md:col-span-5"
      >
        <div className="mb-4 inline-block rounded-full bg-[#0098D4]/10 px-4 py-1 text-sm font-semibold text-[#0098D4]">
          {project.category}
        </div>
        <h2
          id={`project-${project.id}-title`}
          className="mb-4 text-3xl font-bold text-[#142C4C] md:text-4xl"
        >
          {project.title}
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
          {project.description}
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-lg bg-[#142C4C]/5 px-3 py-1 text-sm font-medium text-[#142C4C]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="col-span-1 md:col-span-7"
      >
        <div className="mb-8 grid grid-cols-2 gap-4">
          {statEntries.map(([key, value], i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#0098D4]/20 bg-gradient-to-br from-white to-[#f8f9fa] p-6 shadow-sm transition-all hover:shadow-md hover:border-[#0098D4]/40"
            >
              <div className="mb-2 flex items-center gap-2">
                {i === 0 ? (
                  <FiTrendingUp className="text-xl text-[#0098D4]" />
                ) : (
                  <FiZap className="text-xl text-[#0098D4]" />
                )}
                <p className="text-sm font-medium uppercase tracking-wide text-[#142C4C]/70">
                  {key}
                </p>
              </div>
              <p className="text-3xl font-bold text-[#142C4C]">{value}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
          className="group inline-flex w-full items-center justify-center rounded-xl bg-[#142C4C] px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-[#0098D4] hover:scale-105 md:w-auto focus:outline-none focus:ring-4 focus:ring-[#0098D4]/30"
          aria-label={`View ${project.title} project`}
        >
          View Project
          <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </motion.div>
    </div>
  );
};
