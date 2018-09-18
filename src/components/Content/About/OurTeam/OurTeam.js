import React from 'react';
import MemberCard from './MemberCard/MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id='our-team'>
        <h1>Our Team</h1>
        <div className='member-cards'>
            <MemberCard
                imageURL='http://www.tuktukdesign.com/wp-content/plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
                name='Jonathan Jørgensen'
                description='Co-Founder & Developer'
            />
            <MemberCard
                imageURL='http://www.tuktukdesign.com/wp-content/plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
                name='Vegard Farstad'
                description='Co-Founder & Developer'
            />
            <MemberCard
                imageURL='http://www.tuktukdesign.com/wp-content/plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
                name='Oliver Nakken'
                description='Co-Founder & Developer'
            />
            <MemberCard
                imageURL='http://www.tuktukdesign.com/wp-content/plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
                name='Håvard Aasmo'
                description='Co-Founder & Developer'
            />
            <MemberCard
                imageURL='http://www.tuktukdesign.com/wp-content/plugins/all-in-one-seo-pack-pro/images/default-user-image.png'
                name='Lars Olav Muri'
                description='Chairman & Accountant'
            />
        </div>
    </div>
);

export default OurTeam;