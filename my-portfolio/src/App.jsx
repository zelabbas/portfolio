import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ContactForm from "./utils/ContactForm";

function App() {
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
    </div> 
  );
}

export default App;