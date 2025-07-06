import React from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Experience from './components/Experience';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // ← New icons here

function App() {
    return (
      <>
      {/* FULL-WIDTH NAVBAR GOES HERE */}
      <Navbar />

      {/* PADDED MAIN CONTENT BELOW */}

    <div className="h-screen flex flex-col px-4 md:px-16 lg:px-32 xl:px-48 bg-white">
        <main className="flex-grow flex items-center justify-center py-16 text-black">
        <div className="text-center space-y-6">
          {/* Greeting and Name */}
          <h1 className="text-5xl font-extrabold">Hello, I'm Marco Lopez</h1>
          <h2 className="text-2xl font-medium text-gray-800">I'm a Data Scientist</h2>

          {/* Contact info button */}
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-gray-100 transition"
            >
              Contact
            </a>
          </div>
          {/* Social Icons (linkedin and github) */}
          <div className = "flex justify-center gap-6 pt-4">
            <a
              href = "https://linkedin.com" //Update link
              target = "_blank"
              rel = "noopener noreferrer"
              className = "text-black hover:text-gray-600 transition"
              >
              <FaLinkedin size = {28} />
            </a>
              <a
                href = "https://github.com"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "test-black hover:text-gray-600 transition"
                >
                <FaGithub size = {28} />
            </a>
          </div>
        </div>
      </main>
      <About/>
      <Experience/>
    </div>
    </>
  );
}

export default App;