import React from 'react';
import ContactForm from './ContactForm';
import contactImage from '/src/assets/img/questions.jpg';
import { useInView } from 'react-intersection-observer';

const Contact = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <section id={id} ref={ref} className={`contact-section ${inView ? 'visible' : ''}`}>
      <div className="contact-content">
        <h1 className='h1contact'>Contact</h1>
        <p className='questions-info'>Do you have any questions or if you have to contact me do not hesitate to write me a message here!</p>
        <ContactForm />
      </div>
      <div className='contact-image'>
        <img src={contactImage} alt="Contact" />
      </div>
      <div className='animated-element'></div>
    </section>
  );
};

export default Contact;
