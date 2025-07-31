import React, {useState} from 'react';
import { FaUser, FaBriefcase, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#251b5a] text-white h-[17vh] flex justify-between items-center px-4 md:px-8 lg:px-16">
      {/* WEBSITE TITLE AND LINK*/}
      <button
        onClick={() => window.location.reload()}
        className="text-[2.25rem] font-bold !bg-[#251b5a] !text-white border-none cursor-pointer p-0 m-0 hover:underline hidden sm:hidden md:block"
      >
      Marco Lopez
      </button>

      {/* Desktop Navigation Links with Icons */}
      <ul className="hidden md:flex gap-6 text-lg">
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

       {/* Mobile Hamburger Menu Button Starts here*/}

       <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[17vh] left-0 w-full bg-black shadow-md flex flex-col items-center py-4 md:hidden z-40">
          <a
            href="#about"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex justify-center items-center gap-2">
              <FaUser /> About
            </div>
          </a>
          <a
            href="#experience"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex justify-center items-center gap-2">
              <FaBriefcase /> Experience
            </div>
          </a>
          <a
            href="#projects"
            className="py-2 text-lg w-full text-center hover:underline"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex justify-center items-center gap-2">
              <FaFolderOpen /> Projects
            </div>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;