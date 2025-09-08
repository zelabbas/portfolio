import { CONTACT } from '../../constants/constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="px-4 sm:px-6 lg:px-8">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto lg:mx-0 bg-white/10 backdrop-blur-md border border-[#4245c4]/30 shadow-2xl rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Decorative Blur Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4245c4]/30 rounded-full blur-2xl -z-10 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[#23234d]/40 rounded-full blur-2xl -z-10 animate-pulse" />

        {/* Header */}
        <motion.h2 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -50 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-8 bg-gradient-to-r from-white via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent flex justify-center drop-shadow-lg"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Information */}
        <div className="space-y-7 lg:space-y-10">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-xl text-[#4245c4] bg-white/20 rounded-full p-3 shadow-lg">
              <FaMapMarkerAlt />
            </span>
            <div>
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
            className="flex items-center gap-4"
          >
            <span className="text-xl text-[#4245c4] bg-white/20 rounded-full p-3 shadow-lg">
              <FaPhoneAlt />
            </span>
            <div>
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
            className="flex items-center gap-4"
          >
            <span className="text-xl text-[#4245c4] bg-white/20 rounded-full p-3 shadow-lg">
              <FaEnvelope />
            </span>
            <div>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-4">
            Ready to start a conversation? I'm always open to discussing new opportunities, creative projects, and innovative ideas.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4245c4] to-[#23234d] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#23234d] hover:to-[#4245c4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4245c4]/50 text-lg tracking-wide"
          >
            <FaEnvelope className="text-xl" />
            Let's connect
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;