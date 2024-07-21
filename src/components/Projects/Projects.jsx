import React from 'react';
import projectData from './projectdata';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';


function Projects( {id} ) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <section id={id} ref={ref} className={`projects-section ${inView ? 'visible' : ''}`}>
        <h1 className='h1projects'>Projects</h1>
        <div className="info-projects">
          <p className='p-projects'>Here are some of the projects i have through through my studies.</p>
        </div>
        <div className='project-list'>
          {projectData.map(project=>(
            <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            />
          ))}
        </div>
    </section>
  )
}

export default Projects