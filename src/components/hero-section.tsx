"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Subtle blob movement animation
    const blob = blobRef.current;
    if (!blob) return;

    const animateBlob = () => {
      const xOffset = Math.sin(Date.now() / 2000) * 10;
      const yOffset = Math.cos(Date.now() / 2000) * 10;

      if (blob) {
        blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }

      requestAnimationFrame(animateBlob);
    };

    const animationFrame = requestAnimationFrame(animateBlob);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      <motion.div
        className="relative flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Blob background */}
        <div
          ref={blobRef}
          className="absolute w-80 h-80 -z-10 blob-animation"
          style={{
            opacity: 0.6
          }}
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="rgba(240, 240, 240, 0.4)"
              className="dark:fill-slate-800/40"
              d="M47.1,-61.5C60.9,-53.1,71.6,-38.9,76.9,-22.6C82.1,-6.3,81.9,12.1,74.4,26.5C66.9,41,52.2,51.5,36.9,59.1C21.5,66.7,5.6,71.3,-11.9,71.2C-29.4,71.1,-48.3,66.2,-60,53.9C-71.8,41.6,-76.2,21.8,-76.7,1.9C-77.2,-18,-73.8,-36,-62.9,-48C-51.9,-60,-33.5,-66.1,-16.3,-68.7C0.9,-71.3,16.9,-70.4,31.1,-67C45.3,-63.5,57.7,-57.5,47.1,-61.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm font-medium tracking-wider text-muted-foreground px-4 sm:text-base"
        >
          Interface Designer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl font-bold tracking-tight px-2 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Junhyung Park
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-md text-base sm:text-lg text-muted-foreground px-4"
        >
          <p>I simplify, I humanize.</p>
          <Link
            href="/about"
            className="inline-block mt-2 text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            More about me →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
