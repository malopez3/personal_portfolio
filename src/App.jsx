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

    <div className="h-screen flex flex-col px-4 md:px-16 lg:px-32 xl:px-48 bg-[#251b5a] pb-20">
        <main className="flex-grow flex items-center justify-center py-16 text-white">
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
            className="text-2xl font-medium text-white-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            >
            I'm a Data Scientist
          </motion.h2>

          {/* Social Icons (linkedin and github) */}
          <div className = "flex justify-center gap-6 pt-4">
            <a
              href = "https://www.linkedin.com/in/marco-lopez-926a93283/"
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

      <footer className="text-center text-sm text-white bg-[#251b5a] border-t border-white-300 py-4 
      fixed bottom-0 left-0 w-full z-50 md:static">
        <div className="flex justify-center gap-6 mb-2 bg-[#251b5a]">
        <a
          href="https://www.linkedin.com/in/marco-lopez-926a93283/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-white-700"
        >
        <FaLinkedin />
        </a>
        <a
          href="https://github.com/malopez3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-white-600"
        >
        <FaGithub />
        </a>
        </div>

        <p>© {new Date().getFullYear()} Marco Lopez. All rights reserved.</p>

        <p className="mt-1 text-xs text-white-500 max-w-xl mx-auto px-4">
          All trademarks, logos, and images are the property of their respective owners and are used for identification and educational purposes only.
        </p>
      </footer>
    </div>
    </>
  );
}

export default App;