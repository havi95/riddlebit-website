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

        return (
            <div className={['project-card', large ? 'project-card-lg' : ''].join(' ')} style={style}>
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