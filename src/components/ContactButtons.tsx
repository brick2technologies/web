"use client";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  const whatsappNumber = "919000441665"; // 🇮🇳 your number without '+' or spaces
  const phoneNumber = "+91 9000441665";  // same as your actual contact

  return (
    <div className="fixed bottom-24 right-5 flex flex-col items-center gap-4 z-[55]">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20👋%20I%20want%20to%20know%20more%20about%20your%20services!`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="group relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300"
      >
        <FaWhatsapp size={26} />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#25D366] text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        aria-label="Call Us"
        whileHover={{ scale: 1.15, y: -3 }}
        whileTap={{ scale: 0.9 }}
        className="group relative bg-[#0098D4] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(0,152,212,0.6)] transition-all duration-300"
      >
        <FiPhone size={26} />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#0098D4] text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Call Us
        </span>
      </motion.a>
    </div>
  );
}
