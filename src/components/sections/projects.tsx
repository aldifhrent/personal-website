"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

type Project = {
  title: string;
  description: string;
  link?: string;
  techStack?: string[];
}
// Ganti ini ke array kosong [] untuk tes fallback
const projectsData: Project[] = [

];

function ProjectCard({
  title,
  description,
  link,
  techStack,
}: {
  title: string;
  description: string;
  link?: string;
  techStack?: string[];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:ring-2 hover:ring-blue-300 dark:hover:ring-blue-700 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-3">
        {description}
      </p>
      {techStack && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const hasProjects = projectsData.length > 0;

  return (
    <section className="container mx-auto px-4">
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
