"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div>
        <Link href="/" className="inline-block">
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="17.5" stroke="currentColor" />
            <circle cx="18" cy="18" r="8" stroke="currentColor" />
          </svg>
        </Link>
      </div>

      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={pathname === "/"
            ? "font-semibold dark:text-white"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"}
        >
          Craft
        </Link>
        <Link
          href="/lab"
          className={pathname === "/lab"
            ? "font-semibold dark:text-white"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"}
        >
          Lab
        </Link>
        <Link
          href="/about"
          className={pathname === "/about"
            ? "font-semibold dark:text-white"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"}
        >
          About
        </Link>
        <Link
          href="https://drive.google.com/file/d/1tDqy6FN7sBxtxvrkF8Z_dqyOoUWeoZQH/view?usp=sharing"
          target="_blank"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}
