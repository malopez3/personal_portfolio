import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-100 text-blue-900 h-[17vh] flex justify-between items-center px-4 md:px-8 lg:px-16">
      {/* Name */}
      <div className="text-2xl font-bold">Marco Lopez</div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-lg">
        <li><a href="#about" className="hover:underline focus:outline-none">About</a></li>
        <li><a href="#experience" className="hover:underline focus:outline-none">Experience</a></li>
        <li><a href="#projects" className="hover:underline focus:outline-none">Projects</a></li>
        <li><a href="#contact" className="hover:underline focus:outline-none">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;