import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-black h-[17vh] flex justify-between items-center px-4 md:px-8 lg:px-16">
      <div className="text-2xl font-bold">Marco Lopez</div>
      <ul className="flex gap-6 text-lg">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#experience" className="hover:underline">Experience</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;