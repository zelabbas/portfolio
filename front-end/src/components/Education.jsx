
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaGraduationCap className="text-2xl text-[#4245c4]" />,
    title: 'Baccalaureate Degree in Mathematical Sciences',
    institution: 'Ibno Khafaja, Casablanca',
    date: '2020',
  },
  {
    icon: <FaUniversity className="text-2xl text-[#4245c4]" />,
    title: 'Diploma in Computer Science and Mathematics',
    institution: 'Hassan II University, Faculty of Sciences – Aïn Chock, Casablanca',
    date: '2020 – 2023',
  },
  {
    icon: <FaLaptopCode className="text-2xl text-[#4245c4]" />,
    title: 'Full-time Software Engineering',
    institution: '42 Network – 1337 School Khouribga',
    date: '2023 - ...',
  },
];

function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-white via-[#b3b3d1] to-[#4245c4] bg-clip-text text-transparent drop-shadow-lg"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4245c4]/60 to-[#23234d]/10 rounded-full z-0 hidden sm:block" />
        <ul className="space-y-12 relative z-10">
          {educationData.map((edu, idx) => (
            <motion.li
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              className="relative flex items-start gap-6 sm:gap-10"
            >
              {/* Timeline dot and icon */}
              <div className="flex flex-col items-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 shadow-lg border-2 border-[#4245c4]/40 mb-2 z-10">
                  {edu.icon}
                </span>
                {idx !== educationData.length - 1 && (
                  <span className="hidden sm:block w-1 flex-1 bg-gradient-to-b from-[#4245c4]/60 to-[#23234d]/10 mx-auto" />
                )}
              </div>
              {/* Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-md border border-[#4245c4]/30 rounded-2xl shadow-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#4245c4] mb-2">{edu.title}</h3>
                <p className="text-stone-300 text-lg mb-1">{edu.institution}</p>
                <p className="text-sm text-stone-400">{edu.date}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
