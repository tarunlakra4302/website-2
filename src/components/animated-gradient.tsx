"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const render = () => {
      time += 0.003;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const colors = [
        { offset: 0, color: "rgba(240, 240, 240, 0.03)" },
        { offset: 0.3, color: "rgba(240, 240, 240, 0.05)" },
        { offset: 0.6, color: "rgba(240, 240, 240, 0.03)" },
        { offset: 1, color: "rgba(240, 240, 240, 0)" }
      ];

      // Update for dark mode
      if (document.documentElement.classList.contains("dark")) {
        colors[0].color = "rgba(30, 30, 30, 0.05)";
        colors[1].color = "rgba(30, 30, 30, 0.08)";
        colors[2].color = "rgba(30, 30, 30, 0.05)";
        colors[3].color = "rgba(30, 30, 30, 0)";
      }

      // Draw multiple radial gradients that move
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.sin(time + i * 2) * canvas.width * 0.15;
        const y = canvas.height / 2 + Math.cos(time + i * 2) * canvas.height * 0.1;
        const radius = Math.min(canvas.width, canvas.height) * (0.3 + Math.sin(time * 0.8 + i) * 0.05);

        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, radius
        );

        colors.forEach(({ offset, color }) => {
          gradient.addColorStop(offset, color);
        });

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    />
  );
}
