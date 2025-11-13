import { SpaceBackground } from "./ui/Spacebackground";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-8 overflow-hidden"
      aria-labelledby="about-heading"
    >
      

      {/* ✅ Left Column — Sticky with Accessible Background */}
      <div
        className="flex items-center justify-center rounded-2xl overflow-hidden sticky top-0 h-screen"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 z-0 w-full h-full flex items-center justify-center"
          role="presentation"
        >
          <div className="w-[90%] h-[90%] md:w-[85%] md:h-[85%] rounded-full overflow-hidden">
            <SpaceBackground particleCount={300} />
          </div>
        </div>

        {/* ✅ Logo with Lazy Loading + Descriptive Alt */}
        <div className="relative z-10 text-center">
          <img
            src="https://res.cloudinary.com/diqux3y0a/image/upload/v1762429271/logo_wdkohr.png"
            alt="Brick2Tech Technologies official logo"
            className="w-48 md:w-72 object-contain mx-auto drop-shadow-lg"
            loading="lazy"
            width="288"
            height="288"
            decoding="async"
          />
        </div>
      </div>

      {/* ✅ Right Column — Scrollable Content */}
      <div className="flex flex-col justify-start space-y-20 py-8 md:py-20 md:mt-28">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="px-4 md:px-0"
        >
          {/* ✅ Semantic Heading */}
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-extrabold text-[#142C4C] mb-6 leading-tight"
          >
            About <span className="text-[#0098D4]">Brick2Tech</span>
          </h1>

          {/* ✅ Accessible & Readable Text */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-4">
            <strong className="text-[#142C4C]">Brick 2 Technologies</strong> is
            a creative digital agency focused on delivering high-quality web
            development, branding, and marketing solutions that help businesses
            stand out and grow online.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
            We combine{" "}
            <span className="font-medium text-[#0098D4]">technology</span>,{" "}
            <span className="font-medium text-[#0098D4]">design</span>, and{" "}
            <span className="font-medium text-[#0098D4]">strategy</span> to
            craft seamless digital experiences that inspire trust and drive
            results.
          </p>

          {/* ✅ Quotation with Accessible Markup */}
          <blockquote
            className="border-l-4 border-[#0098D4] pl-6 mt-6 text-lg text-gray-700 italic leading-relaxed max-w-2xl"
            aria-label="Brick2Tech mission statement"
          >
            “At Brick2Tech, we don’t just build websites — we build digital
            identities that empower brands to lead.”
          </blockquote>
        </motion.article>
      </div>
    </section>
  );
};

export default About;
