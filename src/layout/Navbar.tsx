import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function AnimatedNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  // ✅ Detect scroll for glass background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close when clicking outside (mobile)
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-12 py-4 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="cursor-pointer"
      >
        <img
          src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752840311/B2T_logo_wsxdog.png"
          alt="Brick2Tech Logo"
          className="h-20 w-auto object-contain"
        />
      </motion.div>

      {/* MENU / PANEL */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onMouseEnter={() => setOpen(true)} // ✅ open on hover
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-8 py-2 sm:py-2.5 rounded-full bg-[#142C4C] hover:bg-[#0098D4] text-white font-extrabold tracking-widest text-lg sm:text-xl shadow-[0_0_15px_rgba(0,152,212,0.5)] transition-all duration-300 mt-4 font-bouquet"
          >
            <Menu size={24} className="text-white" />
            <span className="hidden sm:inline">Menu</span>
          </motion.button>
        )}

        {open && (
          <motion.div
            ref={dropdownRef}
            key="dropdown"
            initial={{ opacity: 0, scale: 0.8, y: -20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: -20, x: 20 }}
            transition={{
              duration: 0.45,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onMouseLeave={() => setOpen(false)} // ✅ close when mouse leaves
            className="absolute top-0 right-0 origin-top-right w-[65vw] sm:w-[20rem] md:w-[26rem] h-[55vh] sm:h-[60vh] lg:h-[67vh] bg-gradient-to-b from-[#142C4C] to-[#0098D4] rounded-bl-[2.5rem] shadow-2xl flex flex-col items-center justify-start py-10 px-8 z-[100] overflow-hidden backdrop-blur-md"
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 mb-6 px-8 py-2 sm:py-2.5 rounded-full bg-white text-[#142C4C] font-extrabold tracking-widest text-lg sm:text-xl shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 font-bouquet"
            >
              <X size={26} className="text-[#142C4C]" />
              Close
            </motion.button>

            {/* Menu Items with Scroll */}
            <ul className="flex flex-col items-center space-y-7">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 * i + 0.15,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.12,
                    color: "#ffffff",
                    textShadow: "0px 0px 16px rgba(255,255,255,0.9)",
                    transition: { duration: 0.15 },
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white font-extrabold text-3xl sm:text-4xl cursor-pointer transition-all duration-200 font-bouquet hover:tracking-wider"
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
