import { FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfilePic from '../assets/profile.jpg';
import { HERO_CONTENT } from '../../constants/constants';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.18 }
  }
};

const itemChildVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

function SectionHero() {
  const titles = ["Software Engineer", "Full Stack Developer", "Problem Solver"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const speed = deleting ? 35 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentTitle.length) {
        setSubIndex(prev => prev + 1);
        setText(currentTitle.substring(0, subIndex + 1));
      } else if (deleting && subIndex > 0) {
        setSubIndex(prev => prev - 1);
        setText(currentTitle.substring(0, subIndex - 1));
      } else if (!deleting && subIndex === currentTitle.length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex(prev => (prev + 1) % titles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative w-full md:ml-20">
      <div className="pt-10 lg:pt-20 pb-10 lg:pb-32">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4"
          >
            <motion.h1
              variants={itemChildVariants}
              className="font-[600] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-stone-200 via-stone-400 to-stone-600 text-4xl md:text-6xl lg:text-7xl leading-tight text-center lg:text-left"
            >
              Zakariaa Elabbassi
            </motion.h1>
            <motion.div
              variants={itemChildVariants}
              className="mt-4 h-10 md:h-12 flex items-center text-2xl md:text-3xl font-medium text-stone-300"
              aria-label="Dynamic titles"
            >
              <span className="mr-2 text-stone-400">I'm</span>
              <span className="font-semibold text-indigo-400 drop-shadow-sm">
                {text}
                <span className="inline-block w-[2px] h-6 md:h-7 ml-1 bg-indigo-300 animate-pulse" />
              </span>
            </motion.div>
            <motion.p
              variants={itemChildVariants}
              className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-stone-400 text-center lg:text-left font-[400] backdrop-blur-sm"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div variants={itemChildVariants} className="mt-10 flex flex-wrap gap-5">
              <a
                href="/Zakariaa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white font-semibold py-3 px-7 rounded-full shadow-lg shadow-indigo-900/40 ring-1 ring-indigo-400/30 hover:from-indigo-400 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 text-lg tracking-wide hover:scale-[1.04] active:scale-[0.98]"
              >
                <FaFileDownload className="text-xl" />
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
              <img
                src={ProfilePic}
                alt="Profile of Zakariaa Elabbassi"
                className="h-96 md:h-[480px] lg:h-[500px] w-auto object-cover rounded-2xl border border-stone-700/70 shadow-2xl shadow-black/50"/>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-stone-500/30 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
