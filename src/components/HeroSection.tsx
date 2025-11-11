import AetherFlowHero from "./ui/BGHero";
import { Helmet } from "react-helmet-async";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0A192F] text-white"
      aria-labelledby="hero-heading"
    >
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Brick2Tech | Web Development & Digital Solutions in Hyderabad</title>
        <meta
          name="description"
          content="Brick2Tech Technologies is Hyderabad’s leading web development and digital solutions company. We build high-performance websites and modern digital experiences using MERN and AI-driven automation."
        />
        <meta
          name="keywords"
          content="web development Hyderabad, MERN stack websites, digital marketing, AI automation, React developer Hyderabad, full stack developer"
        />
        <meta name="author" content="Brick2Tech Technologies" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://brick2tech.com/" />

        {/* ✅ Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brick2Tech Technologies | Web Development Agency in Hyderabad" />
        <meta
          property="og:description"
          content="Transform your online presence with Brick2Tech — experts in web development, branding, and digital solutions from Hyderabad."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />
        <meta property="og:url" content="https://brick2tech.com/" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brick2Tech | Build Your Digital Future" />
        <meta
          name="twitter:description"
          content="Professional web development and digital marketing services from Hyderabad. MERN stack experts delivering top-tier performance."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/diqux3y0a/image/upload/v1752839930/B2T_logo_white_zo4oxt.png"
        />

        {/* ✅ Performance & Accessibility */}
        <meta name="theme-color" content="#0A192F" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* 🌌 Accessible 3D Background */}
      <div
        role="presentation"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
      >
        <AetherFlowHero />
      </div>

      {/* ✅ Accessible Heading for SEO */}
      <h1
        id="hero-heading"
        className="sr-only"
      >
        Brick2Tech Technologies — Web Development & Digital Agency in Hyderabad
      </h1>
    </section>
  );
}
