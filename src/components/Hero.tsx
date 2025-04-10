"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center mb-28">
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M174.5 350C270.835 350 349.5 271.885 349.5 175.5C349.5 79.1152 270.835 1 174.5 1C78.1655 1 -0.5 79.1152 -0.5 175.5C-0.5 271.885 78.1655 350 174.5 350Z"
            stroke={theme === "dark" ? "#333" : "#E8E8E8"}
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="text-gray-400 text-sm mb-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Interface Designer
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Junhyung Park
        </motion.h1>
        <motion.div
          className="text-right max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <p className="text-sm mb-1 dark:text-gray-300">I simplify, I humanize.</p>
          <Link href="/about" className="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            More about me →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
