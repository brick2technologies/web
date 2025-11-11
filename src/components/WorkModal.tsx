import React, { useState } from "react";
import { motion } from "framer-motion";

interface WorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    workType: "",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] md:w-[400px]"
      >
        <h2 className="text-2xl font-bold text-[#142C4C] mb-6 text-center">
          Start Your Project
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0098D4]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0098D4]"
          />
          <select
            value={form.workType}
            onChange={(e) => setForm({ ...form, workType: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0098D4]"
          >
            <option value="">Select Type of Work</option>
            <option value="Website Development">Website Development</option>
            <option value="Branding">Branding</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="App Development">App Development</option>
            <option value="Graphic Design">Graphic Design</option>
          </select>
          <button
            type="submit"
            className="w-full bg-[#0098D4] text-white font-bold rounded-lg py-2 hover:bg-[#007bb1] transition-all"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full text-gray-500 hover:text-[#0098D4] transition-all"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
};

export default WorkModal;
