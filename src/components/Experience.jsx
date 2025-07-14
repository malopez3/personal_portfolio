import React from 'react';
import { motion } from 'framer-motion';
import FAA from '../assets/FAA.png'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white text-black">
      <motion.div
        className="max-w-4xl mx-auto px-4 space-y-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-center">Experience</h2>

        {/* FAA Internship Experience */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <img src={FAA} alt="FAA logo" className="w-20 h-20" />
            </div>
          <h3 className="text-2xl font-semibold">Data Science Intern – FAA</h3>
          <p className="text-sm text-gray-600">May 2024 – August 2024</p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Conducted exploratory data analysis and created interactive dashboards (using Power BI) to monitor spending and ensure meeting of budget goals.</li>
            <li>Extracted and analyzed large datasets from FAA systems to uncover key performance metrics, identify trends, and improve investigative workflows using Python and Excel.</li>
            <li>Led a data-driven capstone project on employee attrition, delivering actionable recommendations to federal leadership through statistical analysis and compelling visual storytelling.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;