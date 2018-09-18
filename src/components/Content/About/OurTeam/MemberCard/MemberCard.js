import React from 'react';
import './MemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MemberCard = ({name, description, imageURL, twitter, mail}) => (
    <div className='member-card'>
        <img src={imageURL} alt={[name, description].join(' ')} />
        <div className="card-content">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="card-social">
                {twitter && (
                    <a href={twitter}><FontAwesomeIcon className='card-icon' icon={['fab', 'twitter']} /></a>
                )}
                {mail && (
                    <a href={'mailto:'+mail}><FontAwesomeIcon className='card-icon' icon={['fa', 'envelope']} /></a>
                )}
            </div>
        </div>
    </div>
);

export default MemberCard;