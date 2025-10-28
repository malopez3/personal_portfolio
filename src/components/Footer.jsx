import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ThemeContext } from "./ThemeContext";
import React, { useState, useContext } from 'react';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <footer
      className={`text-center text-sm py-4 w-full z-50 border-t transition-colors duration-300 ${
        darkMode ? 'bg-black text-white md:static' : 'bg-white text-black md:static'
      }`}
    >
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.linkedin.com/in/marco-lopez-926a93283/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/malopez3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      <div className="hidden md:block">
        <p>© {new Date().getFullYear()} Marco Lopez. All rights reserved.</p>
        <p className="mt-1 text-xs max-w-xl mx-auto px-4">
          All logos and images are the property of their respective owners and are used for identification and educational purposes only.
        </p>
      </div>
    </footer>
  );
}