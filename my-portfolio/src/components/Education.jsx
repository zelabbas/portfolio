import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id='education' className="py-12 px-6">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
        className="text-4xl text-center mb-10">Education</motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">

        <div
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <motion.h3 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-2xl font-semibold text-blue-800">Bachelor’s Degree in Mathematical Sciences</motion.h3>
          <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
             className="text-stone-300">Ibno Khafaja, Casablanca</motion.p>
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
             className="text-sm text-stone-400">2020</motion.p>
        </div>

        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <motion.h3 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-2xl font-semibold text-blue-800">Diploma in Computer Science and Mathematics</motion.h3>
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-stone-300">Hassan II University, Faculty of Sciences – Aïn Chock, Casablanca</motion.p>
          <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-sm text-stone-400">2020 – 2023</motion.p>
        </div>

        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <motion.h3 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-2xl font-semibold text-blue-800">Full-time Software Engineering</motion.h3>
          <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-stone-300">42 Network – 1337 School Khouribga</motion.p>
          <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}
            className="text-sm text-stone-400">2023 - ...</motion.p>
        </div>

      </div>
    </section>
  );
}

export default Education;
