'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", category: "Programming Languages" },
  { name: "TypeScript", category: "Programming Languages" },
  { name: "Git", category: "Version Control" },
  { name: "Postman", category: "API Testing Tools" },
  { name: "Playwright", category: "Automation Tools" },
  { name: "Katalon Studio", category: "Automation Tools" },
  { name: "Jira", category: "Project Management Tools" },
];

const languages = [
  { name: "Indonesia", category: "Native" },
  { name: "English", category: "Intermediate" },
];

const softSkills = [
  { name: "Detail-Oriented", category: "Soft Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Curiosity", category: "Soft Skills" },
];

const categoryColors: Record<string, { light: string; dark: string }> = {
  "Programming Languages": {
    light: "bg-blue-200 border-blue-200 text-blue-700 hover:bg-blue-100",
    dark: "dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30",
  },
  "Frontend Frameworks": {
    light: "bg-green-200 border-green-200 text-green-700 hover:bg-green-100",
    dark: "dark:bg-green-900/20 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/30",
  },
  "Version Control": {
    light: "bg-orange-200 border-orange-200 text-orange-700 hover:bg-orange-100",
    dark: "dark:bg-orange-900/20 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900/30",
  },
  "API Testing Tools": {
    light: "bg-purple-200 border-purple-200 text-purple-700 hover:bg-purple-100",
    dark: "dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30",
  },
  "Automation Tools": {
    light: "bg-pink-200 border-pink-200 text-pink-700 hover:bg-pink-100",
    dark: "dark:bg-pink-900/20 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-900/30",
  },
  "Project Management Tools": {
    light: "bg-yellow-200 border-yellow-200 text-yellow-700 hover:bg-yellow-100",
    dark: "dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-900/30",
  },
  "Native": {
    light: "bg-indigo-200 border-indigo-200 text-indigo-700 hover:bg-indigo-100",
    dark: "dark:bg-indigo-900/20 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30",
  },
  "Intermediate": {
    light: "bg-teal-200 border-teal-200 text-teal-700 hover:bg-teal-100",
    dark: "dark:bg-teal-900/20 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-900/30",
  },
  "Soft Skills": {
    light: "bg-gray-200 border-gray-200 text-gray-700 hover:bg-gray-100",
    dark: "dark:bg-gray-900/20 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900/30",
  },
};

export default function Skills() {
  return (
    <TooltipProvider>
      <section className="space-y-12 w-full ">
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
            {skills.map((skill) => {
              const color = categoryColors[skill.category];
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div
                      tabIndex={0}
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 hover:scale-105 text-center shadow-sm cursor-default dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]",
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
            {languages.map((lang) => {
              const color = categoryColors[lang.category];
              return (
                <Tooltip key={lang.name}>
                  <TooltipTrigger asChild>
                    <div
                      tabIndex={0}
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 hover:scale-105 text-center shadow-sm cursor-default dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]",
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

        {/* SOFT SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
            Soft Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {softSkills.map((skill) => {
              const color = categoryColors["Soft Skills"];
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div
                      tabIndex={0}
                      className={cn(
                        "px-3 py-2 text-xs sm:text-sm rounded-lg border transition-all duration-200 hover:scale-105 text-center shadow-sm cursor-default dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]",
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
      </section>
    </TooltipProvider>
  );
}
