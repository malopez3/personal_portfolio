import React from 'react';
import { motion } from 'framer-motion';
import airplane from '../assets/AIRPLANE.jpg';
import airplane_new_zealand from '../assets/airplane_new_zealand.jpg';

// PROJECTS

const projects = [
  {
    title: 'Optimizing Airline Profitability through Data-Driven Insights',
    description: 'Used Python (pandas, seaborn) and SQL (JOINs, GROUP BY) to analyze airline operations data, examining profit-boosting strategies through aircraft occupancy analysis and aircraft pricing insights.',
    image: airplane_new_zealand,
    github: 'https://github.com/malopez3/airline_data_analysis/blob/main/Airline%20Data%20Analysis.ipynb',
    code: 'https://github.com/malopez3/airline_data_analysis/blob/main/Airline%20Data%20Analysis.ipynb',
    caption: 'A large jetliner flying through a cloudy sky. Aeroplane airplane boeing 737. Image published under Creative Commons CC0 1.0 Universal Public Domain Dedication license.'
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
              {/* Caption below the image */}
              {project.caption && (
                <p className="text-xs text-gray-500 italic mb-4">{project.caption}</p>
              )}
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