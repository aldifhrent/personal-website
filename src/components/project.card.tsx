import { Project } from "@/lib/interface";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ id, title, description, link, techStack }: Project) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm"
    >
      <div className="flex justify-between items-start mb-2">
        <Link href={`/projects/${id}`} passHref>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} className="text-blue-600 dark:text-blue-400" />
          </a>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
        {description}
      </p>

      {techStack && (
        <div className="flex flex-wrap gap-2 mt-3">
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
