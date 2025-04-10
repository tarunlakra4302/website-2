"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export function Footer() {
  const links = [
    { name: "Hanwha", href: "/hanwha" },
    { name: "Marketwake", href: "/marketwake" },
    { name: "Dopago", href: "/dopago" },
    { name: "Torqata", href: "/torqata" },
  ];

  const contactLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jaypark99/",
      icon: FaLinkedin,
    },
    {
      name: "Read.cv",
      href: "https://read.cv/jaypark",
      icon: FaExternalLinkAlt,
    },
    {
      name: "Mail",
      href: "mailto:jhp0426@berkeley.edu",
      icon: FaEnvelope,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 mt-20 border-t border-border"
    >
      <div className="container grid grid-cols-2 gap-8 px-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col">
          <Link href="/" className="mb-4">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <circle
                cx="16"
                cy="16"
                r="15"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M11 16H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 11V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-sm font-medium uppercase text-muted-foreground">
            CRAFT
          </h3>
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-sm font-medium uppercase text-muted-foreground">
            ARCHIVED
          </h3>
          <div className="flex flex-col space-y-3">
            <Link
              href="/minds"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              Minds
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-sm font-medium uppercase text-muted-foreground">
            CONTACT
          </h3>
          <div className="flex flex-col space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>{link.name}</span>
                <link.icon className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center pt-8 mt-8 text-sm border-t border-border md:flex-row md:justify-between">
        <p className="text-muted-foreground text-center md:text-left">© 2024 Jay Park. All Rights Reserved.</p>
        <p className="flex items-center mt-4 text-muted-foreground text-center md:mt-0 md:text-left">
          Made with ❤️ and Strawberry Matcha Lattes (120% sugar, less ice).
        </p>
      </div>
    </motion.footer>
  );
}
