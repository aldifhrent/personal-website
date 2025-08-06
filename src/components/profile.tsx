"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HyperText } from "./magicui/hyper-text";
import Image from "next/image";
import { QABeam } from "./qa.beam";
import { Download } from "lucide-react"; // gunakan ikon download dari lucide-react

export default function Profile() {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <motion.div
        className="container mx-auto px-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Foto Profil */}
          <div className="rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 mt-10">
            <Image
              src="/profile.png"
              alt="Aldi Ahmad Fahrizi Ilmawan"
              className="w-full h-full object-cover"
              width={130}
              height={130}
              priority
            />
          </div>

          {/* Konten Teks */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8">
            <HyperText
              className="text-4xl md:text-6xl"
              duration={1000}
              animateOnHover={true}
            >
              Aldi Ahmad Fahrizi Ilmawan
            </HyperText>
            <QABeam />
            <motion.p
              className="text-md md:text-md mt-4 text-gray-600 dark:text-gray-300 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I am a passionate software engineer with a focus on web development,
              specializing in building scalable and efficient applications. I love
              exploring new technologies and continuously improving my skills.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4 mt-6 text-sm justify-center md:justify-start"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {/* Hire Me */}
              <motion.div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
                <Link
                  href="/hire-me"
                  className="text-sm font-semibold text-green-800 dark:text-green-100 font-mono tracking-tight"
                >
                  Hire Me — Open to Work
                </Link>
              </motion.div>

              {/* Download CV */}
              <motion.a
                href="/CV_ALDI AHMAD FAHRIZI ILMAWAN.pdf"
                download
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition text-blue-800 dark:text-blue-100 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Download className="w-4 h-4" />
                 CV
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
