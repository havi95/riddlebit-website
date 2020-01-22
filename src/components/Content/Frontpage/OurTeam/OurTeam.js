import React from 'react';
import MemberCard from './MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id="our-team" className="content-wrapper">
        <div>
            <h1>Our Team</h1>
            <div className="member-cards">
                <MemberCard
                    name="Håvard Aasmo"
                    description="Developer"
                    mail="havi@riddlebit.net"
                    imageURL="https://i.imgur.com/8hIhzsC.png"
                />
                <MemberCard
                    name="Jonathan Jørgensen"
                    description="Head of Research"
                    mail="jonathan@riddlebit.net"
                    imageURL="https://i.imgur.com/rvvHpBK.png"
                />
                <MemberCard
                    name="Vegard Farstad"
                    description="Community Manager"
                    mail="vegard@riddlebit.net"
                    imageURL="https://i.imgur.com/PQ5CVcZ.png"
                />
                <MemberCard
                    name="Oliver M. B. Nakken"
                    description="Game Designer"
                    mail="oliver@riddlebit.net"
                    imageURL="https://i.imgur.com/3RQTZ9Y.png"
                />
                <MemberCard
                    name="Lars Olav Muri"
                    description="CEO"
                    mail="lars@riddlebit.net"
                    imageURL="https://i.imgur.com/xh71xg3.png"
                />
                <MemberCard
                    name="Mildrid Johnsen"
                    description="Artist"
                    imageURL="https://i.imgur.com/68Koea5.png"
                />
            </div>
        </div>
    </div>
);

export default OurTeam;
