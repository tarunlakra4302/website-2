"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 bg-background/60 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <NavLink href="/" label="Craft" isActive={pathname === "/"} />
        <NavLink href="/about" label="About" isActive={pathname === "/about"} />
        <NavLink
          href="https://drive.google.com/file/d/1tDqy6FN7sBxtxvrkF8Z_dqyOoUWeoZQH/view?usp=sharing"
          label="CV"
          isActive={false}
          isExternal
        />
        <ThemeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <ThemeToggle />
        <button
          onClick={toggleMobileMenu}
          className="ml-4 p-2 text-foreground"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[72px] left-0 right-0 bg-background border-b border-border z-40 md:hidden"
        >
          <div className="flex flex-col items-center py-6 space-y-6">
            <MobileNavLink
              href="/"
              label="Craft"
              isActive={pathname === "/"}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="/about"
              label="About"
              isActive={pathname === "/about"}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="https://drive.google.com/file/d/1tDqy6FN7sBxtxvrkF8Z_dqyOoUWeoZQH/view?usp=sharing"
              label="CV"
              isActive={false}
              isExternal
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isExternal?: boolean;
}

function NavLink({ href, label, isActive, isExternal }: NavLinkProps) {
  const navLinkVariants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -2 },
  };

  const LinkComponent = (
    <motion.span
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={navLinkVariants}
      transition={{ duration: 0.3 }}
      className={`text-sm font-medium relative text-foreground ${
        isActive ? "font-bold" : ""
      }`}
    >
      {label}
      {isActive && (
        <motion.span
          layout
          layoutId="activeIndicator"
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.span>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {LinkComponent}
      </a>
    );
  }

  return <Link href={href}>{LinkComponent}</Link>;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

function MobileNavLink({ href, label, isActive, isExternal, onClick }: MobileNavLinkProps) {
  const LinkComponent = (
    <span
      className={`text-lg font-medium relative text-foreground ${
        isActive ? "font-bold" : ""
      }`}
    >
      {label}
      {isActive && (
        <span
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground"
        />
      )}
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="py-2"
      >
        {LinkComponent}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className="py-2">
      {LinkComponent}
    </Link>
  );
}
