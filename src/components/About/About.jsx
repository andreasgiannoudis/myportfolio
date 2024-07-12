import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';


function About({id}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <section id={id} ref={ref} className={`about-section ${inView ? 'visible' : ''}`}>
      <div className="column-50">
        <div className="about-content">
          <div className="about-text">
            <p className="about ">About</p>
            <p className="info-me">My name is Andreas Giannoudis, a web developer based in Sweden. I am passionate about creating modern and user-friendly websites and applications using HTML/CSS/JavaScript, React, WordPress. So far I have developed some projects that show my skills and my creativity.</p>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/andreas-giannoudis/" target="_blank" rel="noopener noreferrer" className="linkedin">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/andreasgiannoudis" target="_blank" rel="noopener noreferrer" className="github">
                <FaGithub size={30} />
              </a>
              <a href="./src/assets/cv/cv_en.pdf" target="_blank" rel="noopener noreferrer" className="cv">
                <FaFileAlt size={30} />
              </a>
            </div>
          </div>
          <div className="about-photo">
            <div className="img-container">
              <img src="./src/assets/img/Andreas_Giannoudis.jpg" alt="Andreas Giannoudis" />
              <div className="overlay">
                <div className="overlay-text">Fun fact: I love nature and exploring new places!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discover-more">
        <a href="#skills" className="btn-discover" onClick={() => {
          const skillsSection = document.getElementById('skills-section');
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }}>Discover more!</a>
      </div>
    </section>
  );
}

export default About;
