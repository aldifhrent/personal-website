'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const languages = [
  { name: "Indonesia", category: "Native" },
  { name: "English", category: "Intermediate" },
];

const skills = [
  { name: "JavaScript", category: "Programming Language" },
  { name: "TypeScript", category: "Programming Language" },
  { name: "Next.js", category: "Frontend Framework" },
  { name: "React.js", category: "Frontend Framework" },
  { name: "Git", category: "Version Control" },
  { name: "Postman", category: "API Testing" },
  { name: "Playwright", category: "Automation Testing" },
  { name: "Katalon Studio", category: "Automation Testing" },
  { name: "Jira", category: "Project Management" },
];

const colors = [
  {
    light: "bg-blue-200 border-blue-200 text-blue-700 hover:bg-blue-100",
    dark: "dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30",
  },
  {
    light: "bg-green-200 border-green-200 text-green-700 hover:bg-green-100",
    dark: "dark:bg-green-900/20 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30",
  },
  {
    light: "bg-purple-200 border-purple-200 text-purple-700 hover:bg-purple-100",
    dark: "dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30",
  },
  {
    light: "bg-pink-200 border-pink-200 text-pink-700 hover:bg-pink-100",
    dark: "dark:bg-pink-900/20 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-900/30",
  },
  {
    light: "bg-orange-200 border-orange-200 text-orange-700 hover:bg-orange-100",
    dark: "dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/30",
  },
];

export default function Skills() {
  return (
    <TooltipProvider>
      <section className="space-y-8 w-full">
        {/* TECHNICAL SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => {
              const color = colors[index % colors.length];
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 hover:scale-105 text-center shadow-sm dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]",
                        color.light,
                        color.dark
                      )}
                    >
                      {skill.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="text-xs">{skill.category}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>

        {/* LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
            Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => {
              const color = colors[(skills.length + index) % colors.length];
              return (
                <Tooltip key={lang.name}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 hover:scale-105 text-center shadow-sm dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]",
                        color.light,
                        color.dark
                      )}
                    >
                      {lang.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="text-xs">{lang.category}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>
      </section>
    </TooltipProvider>
  );
}
