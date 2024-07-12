import React from 'react';

function ProjectCard({ title, description, image, link }) {
  return (
    <div className='project-card'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={image} alt={title} className='project-image' />
      </a>
      <div className='project-content'>
        <h2 className='project-title'>{title}</h2>
        <p className='project-description'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
