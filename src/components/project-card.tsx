"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  company: string;
  description?: string;
  tags?: string[];
  imageSrc: string;
  href: string;
  index: number;
}

export function ProjectCard({
  title,
  company,
  description,
  tags = [],
  imageSrc,
  href,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col project-card-hover"
    >
      <div className="mb-2 text-sm text-foreground sm:mb-4">{company}</div>
      <h3 className="mb-2 text-xl font-semibold sm:text-2xl sm:mb-3">{title}</h3>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3 sm:gap-2 sm:mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="px-1.5 py-0.5 text-xs sm:px-2 sm:py-0.5 border-[0.5px] rounded-full bg-transparent hover:bg-transparent">
              {tag}
            </Badge>
          ))}
        </div>
      )}
      {description && <p className="mb-4 text-sm text-muted-foreground sm:text-base sm:mb-6">{description}</p>}
      <Link href={href} className="relative block mb-6 overflow-hidden rounded-lg group">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-foreground/10 backdrop-blur-sm group-hover:opacity-100">
          <span className="px-3 py-1.5 text-xs font-medium text-white bg-black rounded-full sm:px-4 sm:py-2 sm:text-sm">
            View Work
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
