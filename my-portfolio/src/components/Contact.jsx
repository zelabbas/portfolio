// import React from 'react'
// import {CONTACT} from '../../constants/constants'
// import { motion } from 'framer-motion'

// function Contact() {
//   return (
//     <div id="contact" className='border-t border-blue-200 pb-20 bg-red-100 flex-1'>
//         <motion.h2 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }}
//             className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
//         <div className='text-center '>
//             <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.6 }} className='my-4'>
//                 {CONTACT.address}
//             </motion.p>

//             <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.8 }} className='my-4'>
//             <a className='underline hover:text-cyan-200 transition-all duration-300' href={`tel:${CONTACT.phoneNo}`}>
//                 {CONTACT.phoneNo}
//             </a>
//             </motion.p>

//             <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2 }} className='my-4'>
//                 <a
//                   href={`mailto:${CONTACT.email}`}
//                   className='underline hover:text-cyan-200 transition-all duration-300'
//                 >
//                   {CONTACT.email}
//                 </a>
//             </motion.p>
//         </div>
//     </div>
//   )
// }

// export default Contact;

import { CONTACT } from '../../constants/constants';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div id="contact" className="px-4 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto lg:mx-0"
      >
        {/* Header */}
        <motion.h2 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -50 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-white via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent flex justify-center"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Information */}
        <div className="space-y-6 lg:space-y-8">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4245c4] to-[#23234d] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-stone-400 mb-1">Location</p>
              <p className="text-base sm:text-lg text-white font-medium">
                {CONTACT.address}
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4245c4] to-[#23234d] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-stone-400 mb-1">Phone</p>
              <a 
                className="text-base sm:text-lg text-white font-medium hover:text-[#4245c4] transition-colors duration-300 hover:underline decoration-[#4245c4] underline-offset-2" 
                href={`tel:${CONTACT.phoneNo}`}
              >
                {CONTACT.phoneNo}
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4245c4] to-[#23234d] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-stone-400 mb-1">Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-base sm:text-lg text-white font-medium hover:text-[#4245c4] transition-colors duration-300 hover:underline decoration-[#4245c4] underline-offset-2 break-all sm:break-normal"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="sm:hidden md:block mt-8 lg:mt-12 p-6 bg-gradient-to-r from-[#4245c4]/10 to-[#23234d]/10 border border-[#4245c4]/20 rounded-xl"
        >
          <p className="text-center text-stone-300 text-sm sm:text-base leading-relaxed">
            Ready to start a conversation? I'm always open to discussing new opportunities, 
            creative projects, and innovative ideas.
          </p>
          <div className="flex justify-center mt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-[#4245c4] font-medium text-sm hover:text-white transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <a  href={`mailto:${CONTACT.email}`}>
                <span className="cursor-pointer">Let's connect</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;