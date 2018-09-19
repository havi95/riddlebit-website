import React from 'react';
import MemberCard from './MemberCard/MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id='our-team'>
        <h1>Our Team</h1>
        <div className='member-cards'>
            <MemberCard
                name='Jonathan Jørgensen'
                description='Co-Founder & Developer'
            />
            <MemberCard
                name='Vegard Farstad'
                description='Co-Founder & Developer'
            />
            <MemberCard
                name='Oliver Nakken'
                description='Co-Founder & Developer'
            />
            <MemberCard
                name='Håvard Aasmo'
                description='Co-Founder & Developer'
            />
            <MemberCard
                name='Lars Olav Muri'
                description='Chairman & Accountant'
            />
        </div>
    </div>
);

export default OurTeam;