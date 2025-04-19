import React from 'react'
import logo from '../assets/logo2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Navbar() {
  return (
    <div className='flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center m-8'>
            <a className='transition-all duration-300 ease scale-100 sm:scale-150' href="/" aria-label='Home'>
            <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover mx-2 shadow-[0_0_20px_3px_#4245c4]"/>
            </a>
        </div>

        <div className="hidden md:flex md:justify-between md:items-center space-x-6 text-white font-medium ">
            <a href="#technologies" className="text-center w-30 hover:text-white hover:shadow-[0_0_15px_3px_#4245c4] transition-all duration-300  p-2 rounded-xl hover:scale-90">Technologies</a>
            <a href="#projects" className="text-center w-30 hover:text-white hover:shadow-[0_0_15px_3px_#4245c4] transition-all duration-300  p-2 rounded-xl hover:scale-90">Projects</a>
            <a href="#education" className="text-center w-30 hover:text-white hover:shadow-[0_0_15px_3px_#4245c4] transition-all duration-300  p-2 rounded-xl hover:scale-90">Education</a>
            <a href="#contact"  className="text-center w-30 px-4 py-2 rounded-xl text-white font-medium shadow-sm hover:shadow-[0_0_12px_2px_#4245c4] hover:scale-90 transition-all duration-300 ease-in-out">Contact</a>
        </div>

        <div className='m-8 flex flex-shrink-0 items-center'> 

            <a
              className="transition-all duration-300 ease hover:scale-125"
              href="https://www.linkedin.com/in/zelabbas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
                <FaLinkedin className="w-9 h-9 text-white mx-2 p-1 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_9px_2px_#4245c4]" />
            </a>


            <a className='transition-all duration-300 ease hover:scale-125' href="https://github.com/zelabbas"
                target='blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                <FaGithub className='w-9 h-9 text-white mx-2 p-1 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_9px_2px_#4245c4]'/>
            </a>

            <a  className='transition-all duration-300 ease hover:scale-125'
                href="https://www.instagram.com/zelabbass"
                target='blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                <FaInstagram className='w-9 h-9 text-white mx-2 p-1 rounded-full transition-all duration-300 ease-in-out hover:shadow-[0_0_9px_2px_#4245c4]'/>
            </a>
        </div>
    </div>
  )
}

export default Navbar;
