"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState } from "react";
import { projectsData } from "@/lib/consts";
import ProjectCard from "../project.card";
import { Search } from "lucide-react";

type TabKey = "all" | "finished" | "progress" | "planning";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [search, setSearch] = useState("");

  // 🗂 precompute data pakai useMemo
  const { finished, progress, planning } = useMemo(() => {
    return {
      finished: projectsData.filter((p) => p.status === "finished"),
      progress: projectsData.filter((p) => p.status === "progress"),
      planning: projectsData.filter((p) => p.status === "planning"),
    };
  }, []);

  // 🔄 pilih list sesuai tab
  let projectsToShow = projectsData;
  if (activeTab === "finished") projectsToShow = finished;
  if (activeTab === "progress") projectsToShow = progress;
  if (activeTab === "planning") projectsToShow = planning;

  // 🔎 search filter
  const filteredProjects = projectsToShow.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack?.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      )
  );

  // 📌 definisi tab
  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: "all", label: "All", count: projectsData.length },
    { key: "finished", label: "Finished", count: finished.length },
    { key: "progress", label: "On Progress", count: progress.length },
    { key: "planning", label: "Planning", count: planning.length },
  ];

  return (
    <section className="container mx-auto px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 font-mono text-lg font-bold text-gray-800 dark:text-gray-200"
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-4 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-t-md ${
              activeTab === tab.key
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800"
                : "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title or tech..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 pl-9 pr-8 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ✕
          </button>
        )}
      </div>

      {/* Project List with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + search}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-gray-500 dark:text-gray-400">
              <p className="text-sm">
                🔍 No projects found
                {search && (
                  <>
                    {" "}
                    for <span className="font-medium">&quot;{search}&quot;</span>
                  </>
                )}
              </p>
              <p className="text-xs mt-1">
                Try different keywords or reset filters.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
