
import { FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfilePic from '../assets/profile.jpg';
import { HERO_CONTENT } from '../../constants/constants';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const itemChildVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function SectionHero() {
  const titles = ["Software Engineer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < currentTitle.length) {
          setSubIndex(subIndex + 1);
          setText(currentTitle.substring(0, subIndex + 1));
        } else if (deleting && subIndex > 0) {
          setSubIndex(subIndex - 1);
          setText(currentTitle.substring(0, subIndex - 1));
        } else if (!deleting && subIndex === currentTitle.length) {
          setDeleting(true);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % titles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div>
      <div className="pb-10  lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8">
              <motion.img
                src={ProfilePic}
                alt="ZE profile"
                className="border border-stone-900 rounded-3xl h-80 sm:h-150"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start mt-10 p-5"
            >
              <motion.h1
                variants={itemChildVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl"
              >
                Zakariaa Elabbassi
              </motion.h1>
              <motion.span
                variants={itemChildVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                I'm {text}
              </motion.span>
              <motion.p
                variants={itemChildVariants}
                className="my-2 max-w-lg py-6 text-xl tracking-tighter leading-relaxed"
              >
                {HERO_CONTENT}
              </motion.p>
              <motion.a
                variants={itemChildVariants}
                href="/Zakariaa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4245c4] to-[#23234d] text-white font-semibold py-3 px-7 rounded-full shadow-lg hover:from-[#23234d] hover:to-[#4245c4] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4245c4]/50 text-lg tracking-wide hover:scale-105"
              >
                <FaFileDownload className="text-xl" />
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHero;
