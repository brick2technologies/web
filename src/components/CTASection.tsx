

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiMail, FiUser, FiPhone, FiCheck, FiChevronDown } from "react-icons/fi";

const projectTypes = [
  "E-Commerce Website",
  "Corporate Website",
  "Portfolio / Creative",
  "Web Application",
  "Landing Page",
  "Custom Solution",
  "Other",
];

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Show success animation AFTER sending
  setSubmitted(true);

  // Create Web3Forms submission
  const formDataToSend = new FormData();
  formDataToSend.append("access_key", "ab0258d8-ff3f-4265-b206-c072ffa9b1b2");
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email || "Not Provided");
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("projectType", formData.projectType);

  // Send to Web3Forms
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formDataToSend,
  });

  const data = await response.json();

  if (data.success) {
    console.log("Form submitted successfully!");
  } else {
    console.error("Form submission error:", data);
    alert("Something went wrong. Please try again.");
  }

  // Reset form after 4 sec
  setTimeout(() => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", projectType: "" });
  }, 4000);
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropdownSelect = (value: string) => {
    setFormData({ ...formData, projectType: value });
    setShowDropdown(false);
  };

  const isFormValid = formData.name  && formData.phone && formData.projectType;

  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#0098D4]/10 px-4 py-2 text-sm font-bold text-[#0098D4] lg:justify-start">
                Let’s Build Together
              </div>

              <h2 className="mb-4 text-3xl font-bold leading-tight text-[#142C4C] sm:text-4xl lg:text-5xl">
                Ready to <span className="text-[#0098D4]">Launch</span> Your Project?
              </h2>

              <p className="mb-6 text-base leading-relaxed text-[#142C4C]/70 sm:text-lg">
                Fill in your details and select your project type — we’ll get back within 24 hours.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                { text: "50+ successful projects delivered" },
                { text: "Fast, scalable, and future-proof solutions" },
                { text: "Dedicated support from day one" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0098D4] text-white">
                    <FiCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-medium text-[#142C4C] sm:text-base">{item.text}</p>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex justify-center gap-6 text-sm lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-[#142C4C]">60+</p>
                <p className="text-xs text-[#142C4C]/60">Projects</p>
              </div>
              <div className="h-10 w-px bg-[#142C4C]/20" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#142C4C]">97%</p>
                <p className="text-xs text-[#142C4C]/60">Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full"
          >
            <div className="rounded-2xl border border-[#0098D4]/20 bg-white p-6 shadow-lg sm:p-8">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="text-center lg:text-left">
                      <h3 className="text-xl font-bold text-[#142C4C] sm:text-2xl">Start Your Project</h3>
                      <p className="mt-1 text-sm text-[#142C4C]/60">
                        We’ll contact you within 24 hours.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#142C4C]/50 text-sm" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#142C4C]/20 bg-white py-3 pl-10 pr-4 text-sm text-[#142C4C] placeholder-[#142C4C]/50 focus:border-[#0098D4] focus:outline-none focus:ring-2 focus:ring-[#0098D4]/20 transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#142C4C]/50 text-sm" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          
                          className="w-full rounded-lg border border-[#142C4C]/20 bg-white py-3 pl-10 pr-4 text-sm text-[#142C4C] placeholder-[#142C4C]/50 focus:border-[#0098D4] focus:outline-none focus:ring-2 focus:ring-[#0098D4]/20 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#142C4C]/50 text-sm" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border border-[#142C4C]/20 bg-white py-3 pl-10 pr-4 text-sm text-[#142C4C] placeholder-[#142C4C]/50 focus:border-[#0098D4] focus:outline-none focus:ring-2 focus:ring-[#0098D4]/20 transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Project Type Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="flex w-full items-center justify-between rounded-lg border border-[#142C4C]/20 bg-white py-3 pl-10 pr-4 text-left text-sm text-[#142C4C] focus:border-[#0098D4] focus:outline-none focus:ring-2 focus:ring-[#0098D4]/20 transition-all"
                      >
                        <span className={formData.projectType ? "text-[#142C4C]" : "text-[#142C4C]/50"}>
                          {formData.projectType || "Select Project Type"}
                        </span>
                        <FiChevronDown className={`h-4 w-4 transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                      </button>
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="h-5 w-5 text-[#142C4C]/50" />
                      </div>

                      {showDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 mt-1 w-full rounded-lg border border-[#142C4C]/20 bg-white shadow-lg"
                        >
                          {projectTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => handleDropdownSelect(type)}
                              className="block w-full px-4 py-2.5 text-left text-sm text-[#142C4C] hover:bg-[#0098D4]/5 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {type}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={!isFormValid}
                      whileHover={isFormValid ? { scale: 1.02 } : {}}
                      whileTap={isFormValid ? { scale: 0.98 } : {}}
                      className={`w-full rounded-lg py-3 text-sm font-semibold transition-all ${
                        isFormValid
                          ? "bg plausible-[#0098D4] text-[#142C4C] hover:bg-[#0098D4]/90 shadow-md"
                          : "cursor-not-allowed bg-gray-100 text-gray-400"
                      }`}
                    >
                      {isFormValid ? (
                        <span className="flex items-center justify-center gap-2">
                          Send Request <FiArrowRight />
                        </span>
                      ) : (
                        "Please Fill All Fields"
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-[#142C4C]/50">
                      Your information is secure and will never be shared.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0098D4] text-white shadow-md"
                    >
                      <FiCheck className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold text-[#142C4C]">Request Sent!</h3>
                    <p className="text-sm text-[#142C4C]/70">
                      Thank you, {formData.name}. We’ll contact you soon at {formData.phone}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}