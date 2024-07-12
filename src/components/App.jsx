import './app.scss';
import React, { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
import ProgressBar from './Progress-Bar/ProgressBar';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    let textWrapper = document.querySelector(".ml14 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false }) // Setting loop to false to run animation only once
      .add({
        targets: ".ml14 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 700,
      })
      .add({
        targets: ".ml14 .letter",
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=600",
        delay: (el, i) => 150 + 25 * i,
      })
      .add({
        targets: ".ml14",
        opacity: 0,
        duration: 900,
        easing: "easeOutExpo",
        delay: 1000,
        complete: () => setAnimationComplete(true),
      });
  }, []);

  return (
    <>
      {!animationComplete && (
        <div className="intro-animation">
          <h1 className="ml14">
            <span className="text-wrapper">
              <span className="letters">Andreas Giannoudis Portfolio</span>
              <span className="line"></span>
            </span>
          </h1>
        </div>
      )}
      {animationComplete && (
        <>
          <ProgressBar />
          <Header />
          <About id="about"/>
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
        </>
      )}
    </>
  );
}

export default App;
