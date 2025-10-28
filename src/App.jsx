import React from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // ← New icons here
import { motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider> {/* Wrap entire site */}
      <>
        {/* FULL-WIDTH NAVBAR */}
        <Navbar />

        {/* PADDED MAIN CONTENT BELOW */}
        <div className="h-screen flex flex-col px-4 md:px-16 lg:px-32 xl:px-48">
          <main className="flex-grow flex items-center justify-center py-16">
            <div className="text-center space-y-6">
              {/* Greeting and Name */}
              <motion.h1
                className="text-5xl font-extrabold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Hello, I'm Marco Lopez
              </motion.h1>
              <motion.h2
                className="text-2xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                Data Scientist
              </motion.h2>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/marco-lopez-926a93283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/malopez3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </main>

          <About />
          <Experience />
          <Projects />
          <Footer />

        </div>
      </>
    </ThemeProvider> // closes the wrapper
  );
}

export default App;