import AetherFlowHero from "./ui/BGHero";


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0A192F] text-white"
      aria-labelledby="hero-heading"
    >
      

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
