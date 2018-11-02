import React, { Component } from 'react';
import './MemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MemberCard extends Component {

    renderPicture() {
        if (this.props.imageURL) {
            return (
                <img src={this.props.imageURL} alt={[this.props.name, this.props.description].join(' ')} />
            );
        } else {
            return (
                <img src='https://i.imgur.com/V9QJQSj.png' alt={[this.props.name, this.props.description].join(' ')} />
            );
        }
    }

    render() {
        return (
            <div className='member-card'>
                {this.renderPicture()}
                <div className="member-card-content">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                    <div className="member-card-social">
                        {this.props.twitter && (
                            <a href={this.props.twitter}><FontAwesomeIcon className='member-card-icon' icon={['fab', 'twitter']} /></a>
                        )}
                        {this.props.mail && (
                            <a href={'mailto:'+this.props.mail}><FontAwesomeIcon className='member-card-icon' icon={['fa', 'envelope']} /></a>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberCard;