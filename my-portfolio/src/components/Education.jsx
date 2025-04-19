import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id='education' className="py-12 px-6">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
        className="text-4xl text-center mb-10">Education</motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">

        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-800">bac</h3>
          <p className="text-stone-300">University of XYZ, Casablanca</p>
          <p className="text-sm text-stone-400">2020 – 2023</p>
        </div>

        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-800">B.Sc. in Computer Science</h3>
          <p className="text-stone-300">University of XYZ, Casablanca</p>
          <p className="text-sm text-stone-400">2020 – 2023</p>
        </div>

        <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-blue-800">Full-Stack Web Development Bootcamp</h3>
          <p className="text-stone-300">Online — Udemy / Codecademy</p>
          <p className="text-sm text-stone-400">Completed in 2024</p>
        </div>

      </div>
    </section>
  );
}

export default Education;
