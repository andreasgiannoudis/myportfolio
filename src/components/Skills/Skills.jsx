import React from 'react';
import SliderBackend from '../Slider-backend/SliderBackend';
import SliderFrontend from "../SliderFrontend/SliderFrontend";
import { useInView } from 'react-intersection-observer';


function Skills({ id }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <section id={id} ref={ref} className={`skills-section ${inView ? 'visible' : ''}`}>
      <h1 className='h1skills'>Skills</h1>
      <p className='mySkills'>
      I am a versatile web developer with a strong foundation in both frontend and backend technologies. My expertise in HTML, CSS, JavaScript, and React allows me to create dynamic and responsive user interfaces. On the backend, I am proficient in Node.js, PHP, Express.js, and MySQL, enabling me to build robust and scalable applications. I am also experienced in working with MongoDB for managing non-relational databases and can efficiently build websites using WordPress. My diverse skill set ensures that I can handle all aspects of web development! </p>
      <div className="skills-container">
        <div className="frontend">
          <h2>Frontend</h2>
          <SliderFrontend />
        </div>
        <div className="backend">
          <h2>Backend</h2>
          <SliderBackend />
        </div>
      </div>
    </section>
  );
}

export default Skills;
