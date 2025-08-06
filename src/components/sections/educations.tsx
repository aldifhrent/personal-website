'use client'

import React from "react";
import { motion } from "framer-motion";
import EducationsCard from "../educations.card";

const study = [
  {
    location: "Telkom Institute of Technology Purwokerto",
    major: "Computer Engineering",
    date: "2019 - 2024",
    gpa: "3.44 / 4.00",
    finalProject:
      "Blockchain-based ticketing system for music events using NFTs, developed with Next.js, Tailwind CSS, and Thirdweb.",
  },
];

export default function Educations() {
  return (
    <section>
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex flex-col">
  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 font-mono">
          Educations
          </h2>
          <div className="flex flex-col mt-4 gap-5 hover:cursor-pointer">
            {study.map((s) => (
              <EducationsCard
                key={s.location}
                location={s.location}
                major={s.major}
                date={s.date}
                gpa={s.gpa}
                finalProject={s.finalProject}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
