import React, { Component } from 'react';
import './ProjectCard.css';

class MemberCard extends Component {

    render() {

        let large = false;
        if (this.props.large) {
            large = this.props.large;
        }

        let status = '';
        if (this.props.status) {
            status = 'Status: ' + this.props.status;
        }

        let classified = false;
        if (this.props.classified) {
            classified = this.props.classified;
        }

        let imageURL = this.props.imageURL;
        let useImage = imageURL != undefined;
        let style;
        if (useImage) {
            style = {
                backgroundImage: 'url(' + imageURL + ')'
            };
        }

        let classes = ['project-card'];
        let size = this.props.size;
        if (size == 'small') {
            classes.push('project-card-small')
        } else if (size == 'medium') {
            classes.push('project-card-medium');
        } else if (size == 'large') {
            classes.push('project-card-large');
        }

        console.log(classes);

        return (
            <div className={classes.join(' ')} style={style}>
                <div className='project-card-content'>
                    <h2>{this.props.title}</h2>
                    <span className={classified ? 'project-classified' : ''} >{this.props.description}</span>
                    <span className='project-card-status'>{status}</span>
                </div>
            </div>
        );
    }
}

export default MemberCard;