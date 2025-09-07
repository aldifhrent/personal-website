"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { projectsData } from "@/lib/consts";
import ProjectCard from "../project.card";

type TabKey = "all" | "finished" | "progress" | "planning";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [search, setSearch] = useState("");

  // 🗂 kategori dasar
  const finishedProjects = projectsData.filter((p) => p.status === "finished");
  const progressProjects = projectsData.filter((p) => p.status === "progress");
  const planningProjects = projectsData.filter((p) => p.planning);

  let projectsToShow = projectsData;
  if (activeTab === "finished") projectsToShow = finishedProjects;
  if (activeTab === "progress") projectsToShow = progressProjects;
  if (activeTab === "planning") projectsToShow = planningProjects;

  // 🔎 search filter
  const filteredProjects = projectsToShow.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack?.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      )
  );

  // 📌 definisi tab
  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: `All (${projectsData.length})` },
    { key: "finished", label: `Finished (${finishedProjects.length})` },
    { key: "progress", label: `On Progress (${progressProjects.length})` },
    { key: "planning", label: `Planning (${planningProjects.length})` },
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
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or tech..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        />
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
            <p className="col-span-full text-sm text-gray-500 dark:text-gray-400">
              No projects found.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
