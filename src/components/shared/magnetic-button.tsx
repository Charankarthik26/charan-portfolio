"use client";

import { motion } from "framer-motion";

export function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
      className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black"
    >
      {children}
    </motion.button>
  );
}
