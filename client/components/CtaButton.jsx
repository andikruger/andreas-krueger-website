import React from "react";
import { motion } from "framer-motion";

const CtaButton = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#FF008C" }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="bg-gray-900 text-white rounded-lg py-3 px-8 font-bold text-lg transition-all hover:shadow-lg"
    >
      {text}
    </motion.button>
  );
};

export default CtaButton;
