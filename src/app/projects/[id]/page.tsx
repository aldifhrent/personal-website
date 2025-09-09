"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import React, { use } from "react";
import { projectsData } from "@/lib/consts";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ unwrap params pakai React.use()
  const { id } = use(params);

  const index = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[index];
  if (!project) return notFound();

  const prevProject = projectsData[index - 1];
  const nextProject = projectsData[index + 1];

  return (
    <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100">
      {/* Back link */}
      <nav className="container mx-auto px-4 pt-6">
        <Link
          href="/#projects"
          replace
          className="inline-flex items-center text-sm font-mono text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          ← Back to Projects
        </Link>
      </nav>

      {/* Content */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-10"
        >
          {/* Title */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold font-mono">
              {project.title}
            </h1>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} repository`}
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-mono rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm"
              >
                <ExternalLink size={16} />
                View Repository
              </a>
            )}
          </header>

          {/* Tech Stack */}
          {project.techStack && (
            <section>
              <h2 className="text-lg font-semibold mb-6 font-mono">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Details */}
          {project.details && (
            <section>
              <h2 className="text-lg font-semibold mb-6 font-mono">
                Project Details
              </h2>
              <div className="prose dark:prose-invert max-w-none leading-relaxed space-y-4 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg">
                <ReactMarkdown>{project.details}</ReactMarkdown>
              </div>
            </section>
          )}

          {/* Prev / Next Navigation */}
          <nav className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700 text-sm font-mono">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ArrowLeft size={14} />
                {prevProject.title}
              </Link>
            ) : (
              <span />
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                {nextProject.title}
                <ArrowRight size={14} />
              </Link>
            )}
          </nav>
        </motion.div>
      </section>
    </main>
  );
}
