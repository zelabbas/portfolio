import React, { useState } from 'react'
import { PROJECTS } from '../../constants/constants'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: -50 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-center mb-16'
        >
          <motion.div 
            className='inline-block'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className='text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4'>
              Featured Projects
            </h2>
            <div className='h-1 w-32 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full'></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='text-slate-400 text-lg mt-6 max-w-2xl mx-auto'
          >
            A collection of my most impactful work, showcasing innovation and technical excellence
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className='space-y-12 lg:space-y-20'
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className={`group relative ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-8 lg:gap-12 items-center`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <motion.div 
                variants={imageVariants}
                className='w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl'
              >
                <div className='relative group-hover:scale-105 transition-transform duration-500'>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className='w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl'
                  />
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='absolute bottom-6 left-6 right-6 flex gap-3'>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 text-white hover:bg-white/30 transition-all duration-200'
                        >
                          <FaCode className='text-lg' />
                          <span className='hidden sm:inline'>Code</span>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className='flex items-center gap-2 bg-blue-500/80 backdrop-blur-md rounded-lg px-4 py-2 text-white hover:bg-blue-600/80 transition-all duration-200'
                        >
                          <FaEye className='text-lg' />
                          <span className='hidden sm:inline'>Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div 
                className='w-full lg:w-1/2 space-y-6'
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Project Number */}
                <motion.div 
                  className='text-6xl font-bold text-slate-700/30 leading-none'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.div>

                {/* Project Title */}
                <motion.h3 
                  className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight'
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                {/* Project Description */}
                <motion.div 
                  className='bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50'
                  whileHover={{ 
                    backgroundColor: 'rgba(30, 41, 59, 0.7)',
                    borderColor: 'rgba(100, 116, 139, 0.7)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='text-slate-300 text-lg leading-relaxed'>
                    {project.description}
                  </p>
                </motion.div>

                {/* Technologies */}
                <div className='space-y-3'>
                  <h4 className='text-sm font-semibold text-slate-400 uppercase tracking-widest'>
                    Technologies Used
                  </h4>
                  <motion.div 
                    className='flex flex-wrap gap-2'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, staggerChildren: 0.1 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        className='px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium text-slate-300 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-200 cursor-default'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div 
                  className='flex flex-wrap gap-4 pt-4'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl'
                    >
                      <FaGithub className='text-xl' />
                      <span>View Code</span>
                      <FaExternalLinkAlt className='text-sm opacity-70' />
                    </motion.a>
                  )}
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl'
                    >
                      <FaEye className='text-xl' />
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className='text-sm opacity-70' />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects