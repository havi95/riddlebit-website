import React from 'react';
import MemberCard from './MemberCard/MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id='our-team'>
        <h1>Our Team</h1>
        <div className='member-cards'>
            <MemberCard
                name='Håvard Aasmo'
                description='Lead Developer'
                mail='havi@riddlebit.net'
            />
            <MemberCard
                name='Jonathan Jørgensen'
                description='Developer'
                mail='jonathan@riddlebit.net'
            />
            <MemberCard
                name='Vegard Farstad'
                description='Developer'
                mail='vegard@riddlebit.net'
            />
            <MemberCard
                name='Oliver M. B. Nakken'
                description='Game Designer'
                mail='oliver@riddlebit.net'
            />
            <MemberCard
                name='Lars Olav Muri'
                description='Chairman & Accountant'
                mail='lars@riddlebit.net'
            />
            <MemberCard
                name='Thomas Moe'
                description='Setback Artist'
                mail='moe@riddlebit.net'
            />
            <MemberCard
                name='Thomas Dalstein'
                description='Setback Artist'
                mail='dalstein@riddlebit.net'
            />
        </div>
    </div>
);

export default OurTeam;