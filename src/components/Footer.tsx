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
      icon: FaExternalLinkAlt,
    },
    {
      name: "Read.cv",
      href: "https://read.cv/jaypark",
      icon: FaExternalLinkAlt,
    },
    {
      name: "Mail",
      href: "mailto:jhp0426@berkeley.edu",
      icon: FaExternalLinkAlt,
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground"
            >
              <circle
                cx="12"
                cy="12"
                r="11.5"
                stroke="currentColor"
              />
              <circle
                cx="12"
                cy="12"
                r="5.5"
                stroke="currentColor"
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
                className="flex items-center space-x-2 text-sm text-foreground hover:text-muted-foreground transition-colors group"
              >
                <span>{link.name}</span>
                <link.icon className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center pt-8 mt-8 text-sm border-t border-border md:flex-row md:justify-between">
        <div className="flex items-center text-muted-foreground">
          <button className="w-6 h-6 mr-2 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
          <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white dark:text-black">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>

        <p className="text-muted-foreground text-center mt-4 md:mt-0">© 2024 Jay Park. All Rights Reserved.</p>
        <p className="flex items-center mt-4 text-muted-foreground text-center md:mt-0">
          Made with ❤️ and Strawberry Matcha Lattes (120% sugar, less ice).
        </p>
      </div>
    </motion.footer>
  );
}
