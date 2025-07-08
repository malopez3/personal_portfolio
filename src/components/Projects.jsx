import React from 'react';
import {motion} from 'framer-motion';

const Projects = () => {
    return(
        <section id = "projects" className = "py-20 text-black bg-white">
            <motion.div
                className = "max-w-4xl mx-auto px-4 space-y-6"
                initial={{ opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 1.2, ease: 'easeOut'}}
            >
                <h2 className = "text-4xl font-bold text-center">Projects</h2>
            </motion.div>
        </section>

    )
}

export default Projects;