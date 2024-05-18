import React from 'react'
import './/Hero.css'
import boyimg from '..//assets/coolBoy.jpg';
import reactimg from '..//assets/React.png';
import css from '..//assets//css.png';
import figma from '..//assets/Figma.png';
import html from '..//assets//HTML.png';
import js from '..//assets/Javascript.png';

function Hero() {
  return (
    <div>
      <section className="hero-container text-center">
        <div className="hero-content">
          <h1>Hi, I'm Muhammmad Affan.</h1>
          <p>
            Passionate Frontend Developer &nbsp; | &nbsp; I love bringing ideas to life
          </p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img src={reactimg} alt="react" />
            </div>
            <div className="boy">
              <img src={boyimg} alt="boy" />
            </div>
          </div>

          <div>
            <div className="tech-icon">
              <img src={css} alt="css" />
            </div>
            <div className="tech-icon">
              <img src={html} alt="html" />
            </div>
            <div className="tech-icon">
              <img src={js} alt="javascript" />
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default Hero
