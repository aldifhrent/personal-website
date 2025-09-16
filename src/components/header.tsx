"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null; // hindari flicker saat SSR

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-between items-center">
      {/* Logo/brand */}
      <Link
        href="/"
        className="text-black dark:text-white font-semibold underline underline-offset-4 text-md hover:text-blue-500 dark:hover:text-blue-400"
      >
        fhr.
      </Link>

      {/* Theme toggle button */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative"
      >
        <Sun
          className="h-[1.2rem] w-[1.2rem] 
                     rotate-0 scale-100 
                     transition-transform duration-500 
                     dark:scale-0 dark:-rotate-90"
        />
        <Moon
          className="absolute h-[1.2rem] w-[1.2rem] 
                     rotate-90 scale-0 
                     transition-transform duration-500 
                     dark:scale-100 dark:rotate-0"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
