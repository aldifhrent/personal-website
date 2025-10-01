"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HyperText } from "./magicui/hyper-text";
import Image from "next/image";
import { QABeam } from "./qa.beam";
import { Download } from "lucide-react";

export default function Profile() {
  const summaries: string[] = useMemo(
    () => [
      "I am a passionate software engineer with a focus on web development, specializing in building scalable and efficient applications. I love exploring new technologies and continuously improving my skills.",
      "Junior QA Engineer with hands-on experience in manual and automated testing. Skilled in Playwright, Katalon Studio, and bug tracking with JIRA, ensuring high-quality software delivery.",
      "Web developer turned QA enthusiast with a strong foundation in JavaScript and React.js. Bringing technical insight and attention to detail to design effective test cases and automation scripts.",
    ],
    []
  );

  const [randomSummary, setRandomSummary] = useState(summaries[0] ?? "");

  useEffect(() => {
    if (summaries.length > 0) {
      const pick = summaries[Math.floor(Math.random() * summaries.length)];
      setRandomSummary(pick);
    }
  }, [summaries]);

  return (
    <section className="py-20 xl:py-8 bg-white dark:bg-black">
      <motion.div
        className="container mx-auto px-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col xl:flex-row items-center gap-10 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Foto Profil */}
          <div className="w-56 aspect-square rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 mt-2 relative">
            <Image
              src="/profile.png"
              alt="Aldi Ahmad Fahrizi Ilmawan"
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Konten Teks */}
          <div className="flex flex-col items-center xl:items-start text-center mt-2 xl:text-left">
            <HyperText
              as="h1"
              className="text-4xl md:text-6xl font-bold"
              duration={1000}
              animateOnHover
            >
              Aldi Ahmad Fahrizi Ilmawan
            </HyperText>

            <QABeam />

            <motion.p
              className="text-md mt-4 text-gray-600 dark:text-gray-300 text-center xl:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {randomSummary}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mt-6 text-sm justify-center md:justify-start"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {/* Hire Me */}
              <Link
                href="/hire-me"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full 
                           bg-green-50 dark:bg-green-900 border border-green-200 
                           dark:border-green-700 shadow-sm hover:shadow-md transition 
                           text-green-800 dark:text-green-100 font-mono tracking-tight"
              >
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
                Hire Me — Open to Work
              </Link>

              {/* Download CV */}
              <a
                href="/CV_ALDI%20AHMAD%20FAHRIZI%20ILMAWAN.pdf"
                download
                className="flex items-center gap-2 px-4 py-1.5 rounded-full 
                           bg-blue-50 dark:bg-blue-900 border border-blue-200 
                           dark:border-blue-700 shadow-sm hover:shadow-md transition 
                           text-blue-800 dark:text-blue-100 font-mono"
              >
                <Download className="w-4 h-4" />
                CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
