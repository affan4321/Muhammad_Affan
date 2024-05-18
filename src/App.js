import './App.css';
import Navbar from './myComponents/Navbar';
import Hero from './myComponents/Hero';
import Skills from './myComponents/Skills';
import WorkExperience from './myComponents/WorkExperience';
import Contact from './myComponents/Contact';
import Footer from "./myComponents/Footer";
import { useRef } from 'react';

const App = () => {
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);

  
  return (
    <>
      <Navbar scroll={{home: sec1, skills: sec2, exp: sec3, contact: sec4}} />
      <div className="container">
        <div ref={sec1}>
          <Hero />
        </div>
        <div ref={sec2}>
          <Skills />
        </div>
        <div ref={sec3}>
          <WorkExperience />
        </div>
        <div ref={sec4}>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
