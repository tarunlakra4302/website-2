"use client";

import { motion } from "framer-motion";
import { SmoothSection } from "./smooth-scroll";
import Link from "next/link";
import Image from "next/image";

interface ProjectPageProps {
  title: string;
  subtitle: string;
  company: string;
  description: string;
  imageSrc: string;
  content: React.ReactNode;
}

export function ProjectPage({
  title,
  subtitle,
  company,
  description,
  imageSrc,
  content,
}: ProjectPageProps) {
  return (
    <div className="container px-4 mx-auto">
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
        <SmoothSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 sm:space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm text-muted-foreground"
            >
              Letting you in.
            </motion.div>

            <div className="text-xs sm:text-sm text-muted-foreground">{company}</div>
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
            <h2 className="text-base sm:text-lg text-muted-foreground">{subtitle}</h2>
            <p className="max-w-lg mt-4 sm:mt-6 text-sm sm:text-base">{description}</p>
            <div className="pt-4 sm:pt-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-medium transition-colors underline underline-offset-4 hover:text-muted-foreground"
              >
                <span>Back to projects</span>
              </Link>
            </div>
          </motion.div>
        </SmoothSection>

        <SmoothSection delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg aspect-video"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </SmoothSection>
      </div>

      <div className="max-w-4xl mx-auto mt-10 sm:mt-12 md:mt-16">
        <SmoothSection delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 sm:space-y-12"
          >
            {content}
          </motion.div>
        </SmoothSection>
      </div>

      <div className="py-16 text-center">
        <SmoothSection delay={0.4}>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 font-medium text-white transition-colors bg-black rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <span>View all projects</span>
          </Link>
        </SmoothSection>
      </div>
    </div>
  );
}
