import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import cv from '../../assets/cv/cv_en.pdf';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="footer">
      <div className="overlay">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/andreas-giannoudis/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/andreasgiannoudis"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub size={30} />
          </a>
          <a href={cv} target="_blank" rel="noopener noreferrer" className="cv">
            <FaFileAlt size={30} />
          </a>
        </div>

        <p>
          <small className="copyright">
            Copyright © {year} Andreas Giannoudis
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
