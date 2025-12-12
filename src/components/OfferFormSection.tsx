
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiClock, FiGift } from "react-icons/fi";
import confetti from "canvas-confetti"; // Confetti library

export default function OfferPopupModal() {
  const [showModal, setShowModal] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
  });
  const [timeLeft, setTimeLeft] = useState(600);
  const reopenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** 🎵 SUCCESS SOUND */
  const successSound =
    typeof Audio !== "undefined" ? new Audio("/Claps.mp3") : null;

  /** ⏳ Show modal after 3 sec */
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  /** ⏳ Countdown Timer */
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

  /** 📝 Form input change handler */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /** ❌ Close handler */
  const handleClose = () => {
    setShowModal(false);

    if (!formSubmitted) {
      setTimeout(() => setShowFloatingIcon(true), 400);

      if (reopenTimer.current) clearTimeout(reopenTimer.current);
      reopenTimer.current = setTimeout(() => {
        setShowFloatingIcon(false);
        setShowModal(true);
      }, 180000);
    }
  };

  /** 🎊 CONFETTI VISIBLE IN FRONT */
  const fireConfetti = () => {
  const canvas = document.getElementById("confetti-canvas") as HTMLCanvasElement;

  if (!canvas) return;

  // ⭐ Make the canvas FULL SCREEN
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    myConfetti({
      particleCount: 10,
      startVelocity: 50,
      spread: 75,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  })();
};

  /** ✔ FORM SUBMIT (Sound + Confetti + Success Screen) */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormSubmitted(true);
    setShowFloatingIcon(false);
    setShowModal(true);

    successSound?.play().catch(() => {});
    fireConfetti();

    if (reopenTimer.current) clearTimeout(reopenTimer.current);
  };

  /** Cleanup timers */
  useEffect(() => {
    return () => {
      if (reopenTimer.current) clearTimeout(reopenTimer.current);
    };
  }, []);

  return (
    <>
      {/* 🎊 CONFETTI CANVAS (TOP LAYER) */}
      <canvas
  id="confetti-canvas"
  className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[99999]"
></canvas>


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
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
            className="fixed bottom-16 right-6 z-[9999]"
          >
            <motion.button
              onClick={() => {
                setShowFloatingIcon(false);
                setShowModal(true);
              }}
              aria-label="Reopen Offer Modal"
              className="relative bg-[#142C4C] text-white p-5 rounded-full shadow-lg"
            >
              <FiGift size={26} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌟 Offer Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9990]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* MODAL */}
            <motion.div
              key="modal"
              className="fixed inset-0 z-[9991] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                layout
                className="relative w-full max-w-sm bg-gradient-to-b from-[#17375E] to-[#0E1D36] rounded-2xl shadow-2xl border border-[#00AEEF]/30 text-white overflow-hidden"
              >
                {/* ❌ Close */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-3 right-3 text-white/80 hover:text-white z-50"
                >
                  <FiX size={22} />
                </button>

                {/* 🎉 SUCCESS MESSAGE */}
                {formSubmitted ? (
                  <motion.div
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="p-6 text-center"
                  >
                    <h2 className="text-2xl font-bold text-[#00D47F] mb-2">
                      🎉 Offer Claimed!
                    </h2>

                    <p className="text-white/90 text-sm mb-4">
                      Thank you! Our team will contact you within 10 minutes.
                    </p>

                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-[#00AEEF]/20 border border-[#00AEEF]/40 rounded-xl p-4"
                    >
                      You unlocked your <b>40% OFF Website Offer</b> 🚀  
                      <br />
                      We're excited to work with you!
                    </motion.div>

                    <button
                      onClick={handleClose}
                      className="mt-5 bg-white text-[#142C4C] px-5 py-2 rounded-full font-bold shadow-lg"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* HEADER */}
                    <div className="text-center py-6 px-5">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#72DFFF] px-4 py-1.5 rounded-full text-xs font-medium mb-4"
                      >
                        <FiClock size={14} />
                        Ends in{" "}
                        <span className="font-bold text-white ml-1">
                          {formatTime(timeLeft)}
                        </span>
                      </motion.div>

                      <h2 className="text-xl sm:text-2xl font-extrabold mb-2">
                        🚀 Grab Your Website at{" "}
                        <span className="text-[#00D47F]">40% OFF</span>!
                      </h2>

                      <p className="text-gray-300 text-sm">
                        Make your business shine online with a modern website today!
                      </p>
                    </div>

                    {/* DISCOUNT TAG */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mx-auto text-center text-[#00D47F] bg-[#00D47F]/15 border border-[#00D47F]/30 w-[85%] text-sm rounded-lg py-1.5 mb-3"
                    >
                      🎁 Special Year End Deal: Save 40% !
                    </motion.div>

                    {/* FORM */}
                    <motion.form
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white/10 backdrop-blur-md border-t border-white/20 p-5 rounded-t-2xl flex flex-col gap-3"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name / Business"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm placeholder-white/60 border border-white/25"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                        className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm placeholder-white/60 border border-white/25"
                      />

                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-white/15 text-white text-sm border border-white/25"
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

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full mt-1 bg-[#00AEEF] hover:bg-white hover:text-[#142C4C] text-sm font-bold py-2.5 rounded-full flex items-center justify-center gap-2 shadow-lg"
                      >
                        Claim Offer <FiSend />
                      </motion.button>
                    </motion.form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
