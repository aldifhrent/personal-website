"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Educations from "./sections/educations";
import Skills from "./sections/skills";
import WorkExperienceTimeline from "./sections/experiences";
import Contacts from "./sections/contacts";
import DockerMobile from "./docker.mobile";
import SidebarAside from "./sidebar.aside";
import Projects from "./sections/projects";
import {
  BadgeCheck,
  GraduationCap,
  Hammer,
  Mail,
  FolderKanban,
  Badge,
} from "lucide-react";
import Certificates from "./sections/certificates";

export const menu = [
  { name: "Skills", id: "skills", icon: <Hammer size={24} /> },
  { name: "Projects", id: "projects", icon: <FolderKanban size={24} /> },
  { name: "Experience", id: "experience", icon: <BadgeCheck size={24} /> },
  { name: "Education", id: "education", icon: <GraduationCap size={24} /> },
  {
    name: "Certificates",
    id: "certificates",
    icon: <Badge size={24} />,
  },
  { name: "Contacts", id: "contacts", icon: <Mail size={24} /> },
];

export interface SideProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

// Section content mapping
const sectionMap: Record<string, React.ReactNode> = {
  skills: <Skills />,
  projects: <Projects />,
  experience: <WorkExperienceTimeline />,
  education: <Educations />,
  certificates: <Certificates />,
  contacts: <Contacts />,
};

export default function SidebarMenu() {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="container mx-auto px-4 pb-24 flex flex-col md:flex-row gap-6">
      {/* Sidebar for desktop */}
      <SidebarAside
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main content area */}
      <main className="flex-1 bg-white dark:bg-black shadow p-8 w-full outline rounded-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {sectionMap[activeSection] || <div>Not Found</div>}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dock mobile menu (bottom) */}
      <DockerMobile
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
