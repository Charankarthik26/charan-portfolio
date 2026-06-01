"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-6 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-black/30">
          <div>
            <span className="font-mono text-sm font-semibold text-emerald-500">
              CK
            </span>
          </div>

          <nav className="hidden gap-8 md:flex">
            <button className="text-sm text-neutral-500 transition hover:text-emerald-500">
              Projects
            </button>

            <button className="text-sm text-neutral-500 transition hover:text-emerald-500">
              Process
            </button>

            <button className="text-sm text-neutral-500 transition hover:text-emerald-500">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
