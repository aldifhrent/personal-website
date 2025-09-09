import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-300 dark:border-gray-700 text-sm">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-between items-center gap-4 text-center">
        {/* Copyright */}
        <p
          className="font-bold text-gray-700 dark:text-gray-300"
          style={{ fontFamily: "'Courier New', Courier, monospace" }}
        >
          © {new Date().getFullYear()} - Aldi Ahmad Fahrizi Ilmawan
        </p>

        {/* Privacy & Terms */}
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
          <span
            className="hover:underline cursor-pointer font-bold text-gray-700 dark:text-gray-300"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            Privacy Policy
          </span>
          <span
            className="hover:underline cursor-pointer font-bold text-gray-700 dark:text-gray-300"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            Terms of Service
          </span>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 md:gap-6 text-gray-600 dark:text-gray-300 justify-center">
          <a
            href="mailto:aldifahriziilmawan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
            className="hover:text-blue-500 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aldifahrizi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/aldifhrent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
