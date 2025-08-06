"use client";

import React from "react";

const projectsData = [
  {
    title: "Music NFT Ticketing",
    description:
      "A blockchain-based ticketing platform for music events using NFTs, built with Next.js and Thirdweb.",
    link: "https://github.com/yourrepo/music-nft-ticketing",
    techStack: ["Next.js", "Tailwind CSS", "Thirdweb", "Solidity"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills using React and Tailwind CSS.",
    link: "https://aldifhrent.tech",
    techStack: ["React", "Tailwind CSS"],
  },
  // Tambah projek lain sesuai kebutuhan
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
    <div className="max-w-xs p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
        {description}
      </p>
      {techStack && (
        <div className="flex flex-wrap gap-1 mb-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300 rounded-full px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="container mx-auto px-4">
  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
            Projects
          </h2>
      <div className="flex flex-wrap gap-6">
        {projectsData.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
