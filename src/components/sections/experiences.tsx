"use client";

import { motion } from "framer-motion";
import WorkExperienceCard from "../experiences.card";

const workExperiences = [
  {
    id: 1,
    company: "Puskomedia Indonesia Kreatif",
    position: "Web Developer Intern",
    startDate: "August 2022",
    endDate: "September 2022",
    description:
      "Contributed to web development projects by implementing new features, optimizing databases, and reducing bugs before deployment.",
    highlights: [
      "Developed geolocation feature on Panda SID using CodeIgniter.",
      "Optimized SQL queries and visualized PKH data with Laravel + Highcharts.",
      "Collaborated with team on code reviews and debugging.",
    ],
    technologies: ["PHP", "CodeIgniter", "Laravel", "SQL", "Highcharts", "Git"],
  },
];

export default function WorkExperienceTimeline() {
  // urutkan descending → terbaru paling atas
  const sortedExperiences = [...workExperiences].sort((a, b) => b.id - a.id);

  return (
    <section className="container mx-auto px-4" id="work-experiences">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-6 font-mono text-lg font-bold text-gray-800 dark:text-gray-200">
          Work Experiences
        </h2>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {sortedExperiences.map((work, index) => {
            const isCurrent = ["Now", "Present"].includes(work.endDate);

            return (
              <WorkExperienceCard
                key={work.id}
                {...work}
                index={index}
                isCurrent={isCurrent}
              />
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}
