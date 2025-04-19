import React from 'react'
import { PROJECTS } from '../../constants/constants'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div id='projects' className='pb-4'>
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
            className='text-4xl text-center my-20'>Projects</motion.h2>
        <div>
            { PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x: -100}} transition={{duration: 1}} className='w-full lg:w-1/4'>
                        <img src={project.image} alt={project.title} 
                             width={250}
                             height={250}
                             className='mb-4 rounded'/>
                    </motion.div>

                    <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x: 100}} transition={{duration: 1}} className='w-full max-w-xl lg:w-3/4 relative'>
                        <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>{tech}</span>
                        ))}

                        <div className='mt-4 flex flex-wrap p-4 lg:absolute lg:bottom-10 lg:right-20'>
                            <FaGithub className='text-2xl text-stone-300 mr-2'/>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-stone-300 underline hover:text-blue-200 cursor-pointer transition-all duration-300'>
                                View on GitHub </a>
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects;