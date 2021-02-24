import React from 'react';
import './MemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MemberCard = ({name, description, twitter, mail, imageURL, more}) => {

    const renderPicture = () => {
        if (imageURL) {
            return (
                <img src={imageURL} alt={[name, description].join(' ')} />
            );
        } else {
            return (
                <img src='https://i.imgur.com/V9QJQSj.png' alt={[name, description].join(' ')} />
            );
        }
    }

    return (
        <div className='member-card'>
            {renderPicture()}
            <div className="member-card-content">
                <div className="member-card-info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <div className="member-card-social">
                    {twitter && (
                        <a href={twitter}><FontAwesomeIcon className='member-card-icon' icon={['fab', 'twitter']} /></a>
                    )}
                    {mail && (
                        <a href={'mailto:'+mail}><FontAwesomeIcon className='member-card-icon' icon={['fa', 'envelope']} /></a>
                    )}
                    {more && (
                        <a href={more}><FontAwesomeIcon className='member-card-icon' icon={['fa', 'search']} /></a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MemberCard;