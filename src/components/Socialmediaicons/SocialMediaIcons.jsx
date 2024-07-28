import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import cv from '../../assets/cv/cv_en.pdf';


const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.linkedin.com/in/andreas-giannoudis/" target="_blank" rel="noopener noreferrer" className="linkedin">
        <FaLinkedin  />
      </a>
      <a href="https://github.com/andreasgiannoudis" target="_blank" rel="noopener noreferrer" className="github">
        <FaGithub  />
      </a>
      <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
        <FiFileText  />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
