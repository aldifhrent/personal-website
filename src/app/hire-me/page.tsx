"use client";

import {
  Download,
  Linkedin,
  Mail,
  Laptop,
  Briefcase,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const infoItems = [
  {
    icon: Laptop,
    title: "Remote Ready",
    desc: "Open to remote/hybrid work",
  },
  {
    icon: Briefcase,
    title: "QA Bootcamp",
    desc: "Learning by doing real projects",
  },
  {
    icon: FlaskConical,
    title: "Manual + Automation",
    desc: "Hands-on with tools like Playwright & Katalon",
  },
  {
    icon: Mail,
    title: "QA Intern Roles",
    desc: "Eager to gain real-world testing experience",
  },
];

const expertiseData = {
  "Testing Methods": "Manual, Regression, Exploratory (learning phase)",
  Tools: "Katalon, Playwright, Postman, Jira, Git",
  Automation: "Basic UI + functional tests using Playwright & Katalon",
  "Soft Skills": "Detail-oriented, Communicative, Curious",
};

const contactLinks = [
  {
    href: "mailto:aldifahriziilmawan@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/aldifahrizi",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "/CV_ALDI AHMAD FAHRIZI ILMAWAN.pdf",
    icon: Download,
    label: "Resume",
    download: true,
  },
];

export default function HireMePage() {
  return (
    <main className="min-h-screen pt-16 pb-12 px-4 max-w-4xl mx-auto space-y-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Let’s Work Together</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
          Junior QA Engineer passionate about product quality. Let’s build better software together.
        </p>

        {/* Contact Links */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex justify-center flex-wrap gap-4 mt-4"
        >
          {contactLinks.map(({ href, icon: Icon, label, download }) => (
            <motion.div key={label} variants={fadeUp}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                download={download}
                className="inline-flex items-center gap-2 px-4 py-2 border border-black dark:border-white rounded-md font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Info Cards */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-6"
      >
        {infoItems.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="p-5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400">{desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Expertise */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2
          variants={fadeUp}
          className="text-xl font-bold mb-4 text-center md:text-left"
        >
          My Expertise
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-5 text-sm text-gray-700 dark:text-gray-300"
        >
          {Object.entries(expertiseData).map(([title, description]) => (
            <motion.div key={title} variants={fadeUp}>
              <h3 className="font-semibold text-base mb-1">{title}</h3>
              <p>{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Small back link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-gray-500 dark:text-gray-400"
      >
        <Link href="/" className="underline hover:text-black dark:hover:text-white">
          ← Back to home
        </Link>
      </motion.div>
    </main>
  );
}
