import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({title, description, size, classified, status, imageURL}) => {

    if (status) {
        status = 'Status: ' + status;
    }

    let useImage = imageURL !== undefined;
    let style;
    if (useImage) {
        style = {
            backgroundImage: 'url(' + imageURL + ')'
        };
    }

    let classes = ['project-card'];
    if (size === 'small') {
        classes.push('project-card-small')
    } else if (size === 'medium') {
        classes.push('project-card-medium');
    } else if (size === 'large') {
        classes.push('project-card-large');
    }

    return (
        <div className={classes.join(' ')} style={style}>
            <div className='project-card-content'>
                <h2>{title}</h2>
                <span className={classified ? 'project-classified' : ''} >{description}</span>
                <span className='project-card-status'>{status}</span>
            </div>
        </div>
    );
}

export default ProjectCard;