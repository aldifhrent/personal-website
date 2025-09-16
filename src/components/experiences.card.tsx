import { cn } from "@/lib/utils";

interface WorkExperienceCardProps {
  id: string | number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  index?: number;     // 👈 tambahkan
  isCurrent?: boolean; // 👈 tambahkan
}

export default function WorkExperienceCard({
  id,
  company,
  position,
  startDate,
  endDate,
  description,
  highlights,
  technologies,
  isCurrent = false,
}: WorkExperienceCardProps) {
  return (
    <li key={id} className="mb-10 ml-6 relative">
      {/* Dot timeline ala Flowbite */}
      <span
        className={cn(
          "absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900",
          isCurrent ? "bg-blue-600" : "bg-gray-400 dark:bg-gray-600"
        )}
      ></span>

      {/* Card content */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm transition hover:shadow-md">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {position}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {company} • {startDate} – {endDate}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {description}
        </p>

        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
