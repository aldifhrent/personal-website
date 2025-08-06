"use client";

import { motion } from "framer-motion";
import WorkExperienceCard from "../experiences.card";

const workExperiences = [
  {
    id: 1,
    company: "Puskomedia Indonesia Kreatif",
    location: "Purwokerto",
    website: "https://www.puskomedia.id",
    position: "Web Developer Intern",
    startDate: "August 2022",
    endDate: "September 2022",
    description:
      "Gained hands-on experience in web development, contributing to feature implementation, database optimization, and bug fixes.",
    highlights: [
      "Developed a geolocation feature with regional mapping on the Panda SID (Village Information System) website using the CodeIgniter framework.",
      "Optimized database queries for the PKH (Family Hope Program) feature using SQL and visualized the data with Laravel and Highcharts.",
      "Collaborated with the development team on code reviews and debugging.",
    ],
    technologies: ["PHP", "CodeIgniter", "Laravel", "SQL", "Highcharts", "Git"],
  },
];

export default function WorkExperienceTimeline() {
  return (
    <section className="">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
            Work Experiences
          </h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-700 space-y-12">
          {workExperiences.map((work, index) => (
            <WorkExperienceCard key={work.id} {...work} index={index} />
          ))}
        </ol>
      </motion.div>
    </section>
  );
}