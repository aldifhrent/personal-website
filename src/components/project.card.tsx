import { Project } from "@/lib/interface";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

// hanya ambil properti yang dipakai, biar lebih ketat typingnya
type ProjectCardProps = Pick<
  Project,
  "id" | "title" | "description" | "link" | "techStack" | "status" | "planning"
>;

export default function ProjectCard({
  id,
  title,
  description,
  link,
  techStack,
  status,
  planning,
}: ProjectCardProps) {
  // warna badge status
  const statusColor =
    status === "finished"
      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      : status === "progress"
      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
      : planning
      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-5 border rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-start mb-2">
        <Link href={`/projects/${id}`} passHref>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project link"
          >
            <ExternalLink
              size={16}
              className="text-blue-600 dark:text-blue-400"
            />
          </a>
        )}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
        {description}
      </p>

      {/* Status badge */}
      <div className="mt-3">
        <span
          className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${statusColor}`}
        >
          {planning ? "Planning" : status === "finished" ? "Finished" : "On Progress"}
        </span>
      </div>

      {/* Tech stack badges */}
      {techStack && (
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
