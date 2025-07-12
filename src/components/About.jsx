import React from 'react';
import { motion } from 'framer-motion';
import umassLogo from '../assets/UMASS.png';
import northeasternLogo from '../assets/NORTHEASTERN.png';

const About = () => {
    return(
        <section id="about" className = "py-20 text-black bg-white">
            <motion.div
                className = "max-w-4xl mx-auto px-4 space-y-6"
                initial = {{ opacity: 0, y: 50 }}
                whileInView = {{ opacity: 1, y: 0 }}
                viewport = {{ once: true }}
                transition = {{ duration: 1.2, ease: 'easeOut' }}
                >
                {/* ABOUT ME SECTION */}
                <h2 className = "text-4xl font-bold text-center">About Me</h2>
                <p className = "text-lg leading-relaxed text-gray-800">
                    Hello! My name is Marco and I'm currently a graduate student at Northeastern pursuing my master's degree in Data Science.
                    I graduated from UMass Amherst in 2025 with a bachelor's degree in Mathematics, 
                    with a concentration in Statistics and Data Science and a minor in Computer Science.
                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                    My goal after completing my graduate studies is to work as a Data Scientist.
                    My expertise lies in data analysis, building insightful data visualizations, and using machine learning to create predictive models.

                </p>
                <p className="text-lg leading-relaxed text-gray-800">
                    Through this website and data science portfolio, I hope to showcase my programming and data science skills, specifically in Python, R, SQL. 
                    Additionally, I'd like to showcase my skills in data visualization software like Tableau and Power BI.

                </p>
            {/* Logos + Captions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-6">
          {/* UMass Logo */}
          <div className="flex flex-col items-center">
            <img src={umassLogo} alt="UMass Amherst" className="h-40 object-contain" />
            <p className="mt-2 text-sm text-gray-700">B.S. in Mathematics (2025)</p>
          </div>

          {/* NEU logo */}
          <div className="flex flex-col items-center">
            <img src={northeasternLogo} alt="Grad School" className="h-40 object-contain" />
            <p className="mt-2 text-sm text-gray-700">M.S. in Data Science (exp. 2027)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;