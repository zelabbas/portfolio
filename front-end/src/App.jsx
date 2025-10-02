import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ContactForm from "./utils/ContactForm";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function App() {

  const socials = [
    {
      href: 'https://www.linkedin.com/in/zelabbas',
      icon: <FaLinkedin />, label: 'LinkedIn',
    },
    {
      href: 'https://github.com/zelabbas',
      icon: <FaGithub />, label: 'GitHub',
    },
  ];

  return (
    <div className="overflow-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4245c4_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 ">
          <Navbar />
          <SectionHero />
          <Technologies />
          <Projects/>
          <Education />
          <div className="flex gap-10 items-center justify-between flex-col lg:flex-row lg:gap-0.5 mb-20">
            <Contact />
            <ContactForm />
          </div>
      </div>

      {/* footer */}
      <footer className="mt-20 mb-10">
        <div className="container mx-auto px-6 ">
          <div className="flex justify-between items-center py-4">
            <p className="text-sm text-stone-400">
              Made with <span className="text-pink-500">&#10084;&#65039;</span> by <span className="font-bold text-[#4245c4]">zelabbas</span>
            </p>
            <p className="text-sm text-stone-400">
              &copy; {new Date().getFullYear()} zelabbas. All rights reserved.
            </p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4245c4] to-transparent my-4"></div>
          {/* here */}
          <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center gap-6 mt-8"
                  >
                    {socials.map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="text-2xl text-white bg-[#4245c4]/80 hover:bg-[#23234d] hover:text-[#4245c4] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                      >
                        {s.icon}
                      </a>
                    ))}
          </motion.div>
        </div>
      </footer>
    </div> 
    
  );
}

export default App;