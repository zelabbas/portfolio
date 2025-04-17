import React from 'react'
import logo from '../assets/logo2.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
function Navbar() {
  return (
    <div className='flex justify-between items-center py-6'>
        <div className='flex flex-shrink-0 items-center m-8'>
            <a href="/" aria-label='Home'>
            <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover mx-2"/>
            </a>
        </div>

        <div className='m-8 flex flex-shrink-0 items-center'> 
            <a href="https://www.linkedin.com/in/zakariaa-elabbassi-564b712b4"
                target='blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                <FaLinkedin className='text-2xl text-white mx-2 hover:text-blue-500'/>
            </a>

            <a className='' href="https://github.com/zelabbas"
                target='blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                <FaGithub className='text-2xl text-white mx-2  hover:text-blue-500'/>
            </a>

            <a href="https://www.instagram.com/zelabbass"
                target='blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                <FaInstagram className='text-2xl text-white mx-2 hover:text-blue-500'/>
            </a>
        </div>
    </div>
  )
}

export default Navbar;
