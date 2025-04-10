"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Tag {
  id: string;
  label: string;
}

interface ProjectCardProps {
  company: string;
  title: string;
  href: string;
  tags: Tag[];
  image?: string;
}

export default function ProjectCard({
  company,
  title,
  href,
  tags,
  image,
}: ProjectCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mb-20">
      <div className="mb-2">
        <span className="text-sm text-gray-600 dark:text-gray-400">{company}</span>
      </div>
      <h2 className="text-3xl font-medium mb-4 dark:text-white">{title}</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="tag"
          >
            {tag.label}
          </span>
        ))}
      </div>

      {image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-md mb-6">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <Link
        href={href}
        className="btn"
      >
        View Work
      </Link>
    </div>
  );
}
