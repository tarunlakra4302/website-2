"use client";

import { motion } from "framer-motion";
import { SmoothSection } from "./smooth-scroll";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const projects = [
    {
      title: "No More Lonely Battles",
      company: "Hanwha",
      imageSrc: "https://ext.same-assets.com/3534979029/3985503883.svg",
      href: "/hanwha",
      tags: ["U.S Veterans", "AI Healthcare", "Benefits Claim", "Veterans Affairs", "Disability Compensation"],
      index: 0,
    },
    {
      title: "The Client Command Center",
      company: "Marketwake",
      imageSrc: "https://ext.same-assets.com/3534979029/3729652716.png",
      href: "/marketwake",
      tags: ["2023 Fall", "Dashboard", "B2B", "Client-facing", "Rapid Prototyping"],
      index: 1,
    },
    {
      title: "We are all addicts now",
      company: "Dopago",
      imageSrc: "https://ext.same-assets.com/3534979029/42007322.png",
      href: "/dopago",
      tags: ["Case Study", "Digital Health", "AI Therapy", "Gamification", "Product Design / Research"],
      index: 2,
    },
    {
      title: "Dashboard for retailers",
      company: "Torqata",
      imageSrc: "https://ext.same-assets.com/3534979029/42007322.png",
      href: "/torqata",
      tags: ["NDA", "UX Architect", "B2B SaaS", "Dashboard", "Interaction Design"],
      index: 3,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 mx-auto">
        <SmoothSection>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pb-8 text-2xl font-semibold text-center uppercase sm:pb-12 md:pb-16 sm:text-3xl"
          >
            CRAFT
          </motion.h2>
        </SmoothSection>

        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
