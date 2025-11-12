"use client";
import { useState, useEffect } from "react";
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
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  // Show modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!showModal || timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [showModal, timeLeft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Handle close → smooth shrink → floating icon
  const handleClose = () => {
    setShowModal(false);
    // delay icon appearance to match exit animation
    setTimeout(() => setShowFloatingIcon(true), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("🎉 Thank you! Our team will contact you soon!");
    setFormData({ name: "", phone: "", projectType: "" });
    handleClose();
  };

  return (
    <>
      {/* Floating Icon (shows after modal closes) */}
      <AnimatePresence>
        {showFloatingIcon && (
          <motion.button
            key="float-btn"
            initial={{ opacity: 0, scale: 0.5, x: 80, y: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              setShowFloatingIcon(false);
              setShowModal(true);
            }}
            aria-label="Reopen Offer Modal"
            className="fixed bottom-5 right-5 bg-[#0098D4] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-[60] focus:outline-none focus:ring-4 focus:ring-[#0098D4]/40"
          >
            <FiGift size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Offer Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                x: 200,
                y: 200,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()} // prevent backdrop click
                layout
                className="relative w-full max-w-lg sm:max-w-md md:max-w-lg bg-gradient-to-b from-[#142C4C] to-[#0B1A33] rounded-3xl shadow-2xl border border-[#0098D4]/20 text-white overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  aria-label="Close Modal"
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition focus:outline-none focus:ring-4 focus:ring-[#0098D4]/30 z-50"
                >
                  <FiX size={26} />
                </button>

                {/* Header */}
                <div className="text-center py-10 px-6 sm:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-[#0098D4]/20 text-[#00b3ff] px-5 py-2 rounded-full font-semibold mb-5"
                  >
                    <FiClock />
                    Hurry! Offer ends in{" "}
                    <span className="font-bold text-white ml-1">{formatTime(timeLeft)}</span>
                  </motion.div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-snug">
                    🚀 Limited-Time Offer
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg px-2 sm:px-4">
                    Get your dream website before the clock runs out!
                  </p>
                </div>

                {/* Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-xl border-t border-white/20 p-6 sm:p-8 rounded-t-3xl text-left"
                >
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Project / Business Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#0098D4]/50"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#0098D4]/50"
                    />

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#0098D4]/50 appearance-none"
                    >
                      <option value="" disabled className="text-gray-700">
                        Select Project Type
                      </option>
                      <option className="text-black">Website Design</option>
                      <option className="text-black">E-commerce Website</option>
                      <option className="text-black">Landing Page</option>
                      <option className="text-black">Corporate Website</option>
                      <option className="text-black">Portfolio / Personal Website</option>
                    </select>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full mt-2 bg-[#0098D4] hover:bg-white hover:text-[#142C4C] text-base sm:text-lg font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,152,212,0.5)]"
                    >
                      Submit Now <FiSend className="text-xl" />
                    </motion.button>
                  </div>
                </motion.form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
