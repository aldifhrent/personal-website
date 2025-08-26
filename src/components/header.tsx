"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {/* ☀️ Sun icon */}
      <Sun
        className="h-[1.2rem] w-[1.2rem] 
                   rotate-0 scale-100 
                   transition-transform duration-500 
                   dark:scale-0 dark:-rotate-90"
      />
      {/* 🌙 Moon icon */}
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] 
                   rotate-90 scale-0 
                   transition-transform duration-500 
                   dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
