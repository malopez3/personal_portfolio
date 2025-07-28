import React from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // ← New icons here
import { motion } from "framer-motion";

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
          {/* Transition with fade-in */}
          <motion.h1
            className = "text-5xl font-extrabold"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{duration: 2}}
            >
            Hello, I'm Marco Lopez
          </motion.h1>
          <motion.h2
            className="text-2xl font-medium text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            >
            I'm a Data Scientist
          </motion.h2>

          {/* Social Icons (linkedin and github) */}
          <div className = "flex justify-center gap-6 pt-4">
            <a
              href = "https://www.linkedin.com/in/marco-lopez-926a93283/" //Update link
              target = "_blank"
              rel = "noopener noreferrer"
              className = "text-black hover:text-gray-600 transition"
              >
              <FaLinkedin size = {28} />
            </a>
              <a
                href = "https://github.com/malopez3"
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
      <Projects/>

      {/* FOOTER */}

      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Marco Lopez. All rights reserved.

      <p className="mt-2 text-xs text-gray-400 max-w-xl mx-auto px-4">
        Logos are used for identification and educational purposes only. All trademarks and brands are the property of their respective owners.
      </p>
      </footer>
    </div>
    </>
  );
}

export default App;