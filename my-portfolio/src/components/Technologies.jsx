import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiDocker } from 'react-icons/si'
import { SiSpringboot } from 'react-icons/si'; 
import {BiLogoPostgresql} from 'react-icons/bi'
import {SiCplusplus} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { SiGnubash } from "react-icons/si";
import { FaGithub } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'

const animateIcons = (duration) => ({
    initial: {y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
        }
    }
})

function Technologies() {
  return (
    <div id='technologies' className='pb-24 mt-10'>
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-white via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent drop-shadow-lg">Technologies</motion.h1>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}
            className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div initial="initial" animate="animate" variants={animateIcons(5)}>
                <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(3)} className='p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(5)} className='p-4'>
                <SiMongodb className='text-7xl text-cyan-500'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(7)} className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(8)} className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(2.5)} className='p-4'>
                <SiExpress className='text-7xl text-green-300'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(3)} className='p-4'>
                <SiCplusplus className='text-7xl  text-blue-500'/>
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(8)} className='p-4'>
                <FaJava className='text-7xl text-orange-600' />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(6)} className='p-4'>
                <SiSpringboot className="text-7xl text-green-600" />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(9)} className='p-4'>
                <SiDocker className="text-7xl text-blue-500" />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(2)} className='p-4'>
                <SiGnubash className="text-7xl text-white" />
            </motion.div>

            <motion.div initial="initial" animate="animate" variants={animateIcons(4.5)} className='p-4'>
                <FaGithub className="text-7xl text-white" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies;
