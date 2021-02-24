import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => (
    <div id='projects' className='content-wrapper'>
        <div className='content-section content-width-md projects-content'>
            <h1>Projects</h1>
            <div className='project-cards'>
                <ProjectCard
                    title='Setback'
                    description='A fast-paced online shooter'
                    link='https://setback.riddlebit.net'
                    size='large'
                    status='In Development'
                    imageURL='https://i.imgur.com/FdOod4T.png'
                />
                <ProjectCard
                    title='Project Summon'
                    description='[CLASSIFIED]'
                    size='small'
                    classified={true}
                    status='Planned'
                    imageURL='https://i.imgur.com/fXC2XB0.jpg'
                />
                <ProjectCard
                    title='Project Crumble'
                    description='[CLASSIFIED]'
                    size='small'
                    classified={true}
                    status='Planned'
                    imageURL='https://i.imgur.com/FmUIH9K.jpg'
                />
            </div>
        </div>
    </div>
);

export default Projects;
