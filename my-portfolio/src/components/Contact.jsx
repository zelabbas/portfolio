import React from 'react'
import {CONTACT} from '../../constants/constants'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div id="contact" className='border-t border-blue-200 pb-20'>
        <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}
            className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
        <div className='text-center '>
            <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.6 }} className='my-4'>
                {CONTACT.address}
            </motion.p>

            <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.8 }} className='my-4'>
            <a className='underline hover:text-cyan-200 transition-all duration-300' href={`tel:${CONTACT.phoneNo}`}>
                {CONTACT.phoneNo}
            </a>
            </motion.p>

            <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2 }} className='my-4'>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className='underline hover:text-cyan-200 transition-all duration-300'
                >
                  {CONTACT.email}
                </a>
            </motion.p>
        </div>
    </div>
  )
}

export default Contact;