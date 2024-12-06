"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faMagic } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="border-b border-pink-100 dark:border-pink-900 dark:bg-gray-950 transition-colors duration-200"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <FontAwesomeIcon icon={faMagic} className="text-pink-500 text-xl" />
          <span className="text-xl font-bold text-pink-600 dark:text-pink-400">
            TextMagic
          </span>
        </motion.div>

        <div className="flex items-center space-x-8">
          <motion.a
            href="https://github.com/TejasLamba2006/TextMagic?tab=readme-ov-file"
            className="text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Guide
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900"
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className="text-pink-500 text-lg"
            />
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}
