"use client";

import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-16 text-sm">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">CRAFT</h3>
          <ul className="space-y-2">
            <li><a href="/hanwha" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Hanwha</a></li>
            <li><a href="/marketwake" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Marketwake</a></li>
            <li><a href="/dopago" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Dopago</a></li>
            <li><a href="/torqata" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Torqata</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">ARCHIVED</h3>
          <ul className="space-y-2">
            <li><a href="/minds" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">Minds</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">CONTACT</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/jaypark99/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                LinkedIn
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://read.cv/jaypark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Read.cv
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:jhp0426@berkeley.edu"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Mail
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center">
        <ThemeToggle />

        <div className="text-xs text-gray-400 mt-2 md:mt-0">
          © 2024 Jay Park. All Rights Reserved.
          <span className="ml-1">Made with ♥ and Strawberry Matcha Lattes (120% sugar, less ice).</span>
        </div>
      </div>
    </footer>
  );
}
