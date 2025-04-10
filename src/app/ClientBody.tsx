"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body className={`antialiased transition-colors duration-200 ${theme}`} suppressHydrationWarning>
      {children}
    </body>
  );
}
