"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiClock, FiGift } from "react-icons/fi";

export default function OfferPopupModal() {
  const [showModal, setShowModal] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
  });
  const [timeLeft, setTimeLeft] = useState(600);
  const reopenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  // Show modal after 3 seconds initially
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer for offer
  useEffect(() => {
    if (!showModal || timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [showModal, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Close → show icon → reopen after 10s (expand from icon)
  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => setShowFloatingIcon(true), 400);

    // Reopen form after 10 seconds
    if (reopenTimer.current) clearTimeout(reopenTimer.current);
    reopenTimer.current = setTimeout(() => {
      setShowFloatingIcon(false);
      setShowModal(true);
    }, 10000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Thank you! Our team will contact you soon!");
    setFormData({ name: "", phone: "", projectType: "" });
    handleClose();
  };

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (reopenTimer.current) clearTimeout(reopenTimer.current);
    };
  }, []);

  return (
    <>
      {/* 🎁 Floating Icon */}
      <AnimatePresence>
        {showFloatingIcon && (
          <motion.div
            key="float-btn"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              rotate: [0, -3, 3, 0],
              transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.4 },
            }}
            // ✅ Keep icon visible at all times
            className="fixed bottom-16 right-6 md:bottom-16 md:right-5 z-[9999] pointer-events-auto"
          >
            <motion.button
              onClick={() => {
                setShowFloatingIcon(false);
                setShowModal(true);
              }}
              aria-label="Reopen Offer Modal"
              className="relative bg-[#142C4C] text-white p-5 rounded-full shadow-[0_0_25px_rgba(0,174,239,0.7)] hover:shadow-[0_0_40px_rgba(0,174,239,1)] transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/40"
            >
              <FiGift size={26} className="drop-shadow-md" />

              {/* Floating sparkles falling */}
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  initial={{ opacity: 0, y: 0, x: 0 }}
                  animate={{
                    y: [0, 30],
                    x: [0, Math.random() * 15 - 8],
                    opacity: [1, 0],
                    scale: [1, 0.5],
                  }}
                  transition={{
                    duration: 1.2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 Offer Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9990] cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              className="fixed inset-0 z-[9991] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: 100,
                y: 100,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                layout
                className="relative w-full max-w-sm sm:max-w-md bg-gradient-to-b from-[#17375E] to-[#0E1D36] rounded-2xl shadow-2xl border border-[#00AEEF]/30 text-white overflow-hidden"
              >
                {/* ❌ Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  aria-label="Close Modal"
                  className="absolute top-3 right-3 text-white/80 hover:text-white transition focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/30 z-50"
                >
                  <FiX size={22} />
                </button>

                {/* Header */}
                <div className="text-center py-6 px-5">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#72DFFF] px-4 py-1.5 rounded-full text-xs font-medium mb-4"
                  >
                    <FiClock size={14} />
                    Ends in{" "}
                    <span className="font-bold text-white ml-1">{formatTime(timeLeft)}</span>
                  </motion.div>

                  <h2 className="text-xl sm:text-2xl font-extrabold mb-2 text-white">
                    🚀 Grab Your Website at{" "}
                    <span className="text-[#00D47F]">40% OFF</span>!
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Make your business shine online with a modern website today!
                  </p>
                </div>

                {/* Discount Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mx-auto text-center text-[#00D47F] bg-[#00D47F]/15 border border-[#00D47F]/30 w-[85%] text-sm rounded-lg py-1.5 mb-3"
                >
                  🎁 Special Deal: Save 40% Today Only!
                </motion.div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-md border-t border-white/20 p-5 rounded-t-2xl text-left flex flex-col gap-3 sm:gap-4"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name / Business"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm placeholder-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm placeholder-white/60 border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
                  />

                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm border border-white/25 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50 appearance-none"
                  >
                    <option value="" disabled className="text-gray-700">
                      Select Project Type
                    </option>
                    <option className="text-black">Website Design</option>
                    <option className="text-black">E-commerce</option>
                    <option className="text-black">Landing Page</option>
                    <option className="text-black">Corporate Site</option>
                    <option className="text-black">Portfolio</option>
                  </select>

                  {/* 🌟 Claim Offer Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full mt-1 bg-[#00AEEF] hover:bg-white hover:text-[#142C4C] text-sm font-bold py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_10px_rgba(0,174,239,0.4)]"
                  >
                    Claim Offer <FiSend className="text-base" />
                  </motion.button>
                </motion.form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
