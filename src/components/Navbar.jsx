import React from 'react';
import { FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-black h-[17vh] flex justify-between items-center px-4 md:px-8 lg:px-16">
      <div className="text-2xl font-bold">Marco Lopez</div>

      {/* Navigation Links with Icons */}
      <ul className="flex gap-6 text-lg">
        <li>
          <a href="#about" className="flex items-center gap-2 hover:underline focus:outline-none">
            <FaUser /> About
          </a>
        </li>
        <li>
          <a href="#experience" className="flex items-center gap-2 hover:underline focus:outline-none">
            <FaBriefcase /> Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center gap-2 hover:underline focus:outline-none">
            <FaFolderOpen /> Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;