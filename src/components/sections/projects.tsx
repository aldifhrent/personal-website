"use client";

import { motion } from "framer-motion";
import React from "react";
import { projectsData } from "@/lib/consts";
import ProjectCard from "../project.card";

export default function Projects() {
  const hasProjects = projectsData.length > 0;

  return (
    <section className="container mx-auto px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6 font-mono"
      >
        Projects
      </motion.h2>

      {hasProjects ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((proj) => (
            <ProjectCard key={proj.title} {...proj} />
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-500 dark:text-gray-400 text-sm"
        >
          No projects available right now.
        </motion.p>
      )}
    </section>
  );
}
