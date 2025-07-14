import React from 'react';
import { motion } from 'framer-motion';

// PROJECTS

const projects = [
  {
    title: 'TBA',
    description: 'TBA.',
    image: '/assets/project1.png',
    github: 'https://github.com/yourusername/project1-live',
    code: 'https://github.com/yourusername/project1-code'
  },
  {
    title: 'TBA',
    description: 'TBA.',
    image: '/assets/project2.png',
    github: 'https://github.com/yourusername/project2-live',
    code: 'https://github.com/yourusername/project2-code'
  },
  {
    title: 'TBA',
    description: 'TBA.',
    image: '/assets/project2.png',
    github: 'https://github.com/yourusername/project2-live',
    code: 'https://github.com/yourusername/project2-code'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-black bg-white">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 flex-grow">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Project
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;