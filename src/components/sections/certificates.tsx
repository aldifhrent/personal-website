"use client";

import React from "react";
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export default function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Quality Assurance Engineer Program",
      issuer: "Purwadhika Digital Technology School",
      date: "Jun – Aug 2025",
      link: "",
    },
    {
      title: "Junior Web Developer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      date: "2024 - 2027",
      link: "https://drive.google.com/file/d/1x7kzrzxjHGyJJsvmDUmNxFTpEGVGElH_/view?usp=sharing",
    },
  ];

  return (
    <section id="certificates" className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="mb-6 font-mono text-lg font-bold text-gray-800 dark:text-gray-200">
          Certificates & Training
        </h2>

        <ul className="space-y-4">
          {certificates.map((cert, idx) => {
            const content = (
              <>
                <h3
                  className="text-base font-semibold text-gray-900 dark:text-gray-100 
                             hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <span className="font-medium">{cert.issuer}</span> • {cert.date}
                </p>
                {cert.link && (
                  <span className="inline-block mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                    View Certificate
                  </span>
                )}
              </>
            );

            return (
              <li
                key={idx}
                className="p-5 rounded-xl border border-gray-200 dark:border-gray-700
                           bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                           hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500
                           transition-all duration-300"
              >
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
