import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => (
    <div id='projects' className='content-wrapper'>
        <div className='content-section content-width-md projects-content'>
            <h1>Projects</h1>
            <p>
                These are our current and planned projects. More info will be available here at a later time.<br/>
                Until then, please visit our <a href='https://www.facebook.com/riddlebit'>facebook page</a>.
            </p>
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
