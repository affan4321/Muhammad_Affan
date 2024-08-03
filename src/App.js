import './App.css';
import Navbar from './myComponents/Navbar';
import Hero from './myComponents/Hero';
import Skills from './myComponents/Skills';
import WorkExperience from './myComponents/WorkExperience';
import Contact from './myComponents/Contact';
import Footer from "./myComponents/Footer";
import { useRef } from 'react';

const App = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar heroRef={heroRef} skillsRef={skillsRef} workExperienceRef={workExperienceRef} contactRef={contactRef} />
      <div className="container">
        <section ref={heroRef} id="home">
          <Hero />
        </section>
        <section ref={skillsRef} id="skillset">
          <Skills />
        </section>
        <section ref={workExperienceRef} id="experience">
          <WorkExperience />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
