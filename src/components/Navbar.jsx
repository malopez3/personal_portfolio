import React, { useState, useContext } from "react";
import {
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav
  className={`sticky top-0 z-50 w-full h-[12vh] flex justify-between items-center px-4 md:px-8 lg:px-16 transition-colors duration-300 relative
    ${darkMode ? 'bg-black text-white backdrop-blur-none' : 'bg-[#FFFFFF]/50 text-black backdrop-blur-md'}`}
>
      {/* Website Title */}
      <button
        onClick={() => window.location.reload()}
        className="text-[2.25rem] font-bold border-none cursor-pointer p-0 m-0 hover:underline text-black dark:text-white"
      >
        ML
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li>
          <a href="#about" className="flex items-center gap-2 hover:underline">
            <FaUser /> About
          </a>
        </li>
        <li>
          <a href="#experience" className="flex items-center gap-2 hover:underline">
            <FaBriefcase /> Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center gap-2 hover:underline">
            <FaFolderOpen /> Projects
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded border border-gray-300 dark:border-gray-600 transition-colors duration-300"
        aria-label="Toggle Theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f7f9fb]/80 dark:bg-black shadow-md flex flex-col items-center py-4 md:hidden transition-colors duration-300 backdrop-blur-md dark:backdrop-blur-none z-40">
          <a href="#about" className="py-2 text-lg w-full text-center hover:underline" onClick={() => setIsOpen(false)}>
            <div className="flex justify-center items-center gap-2">
              <FaUser /> About
            </div>
          </a>
          <a href="#experience" className="py-2 text-lg w-full text-center hover:underline" onClick={() => setIsOpen(false)}>
            <div className="flex justify-center items-center gap-2">
              <FaBriefcase /> Experience
            </div>
          </a>
          <a href="#projects" className="py-2 text-lg w-full text-center hover:underline" onClick={() => setIsOpen(false)}>
            <div className="flex justify-center items-center gap-2">
              <FaFolderOpen /> Projects
            </div>
          </a>
        </div>
      )}

      {/* Subtle Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-black/10 dark:bg-white/10"></div>
    </nav>
  );
};

export default Navbar;