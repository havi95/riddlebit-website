import React from 'react';
import MemberCard from './MemberCard';
import './OurTeam.css';

const OurTeam = () => (
    <div id="our-team" className="content-wrapper">
        <div>
            <h1>Our Team</h1>
            <div className="member-cards">
                <MemberCard
                    name="Lars Olav Muri"
                    description="CEO"
                    mail="lars@riddlebit.net"
                    imageURL="https://i.imgur.com/xh71xg3.png"
                />
                <MemberCard
                    name="Jonathan Jørgensen"
                    description="Developer"
                    mail="jonathan@riddlebit.net"
                    imageURL="https://i.imgur.com/rvvHpBK.png"
                />
                <MemberCard
                    name="Oliver M. B. Nakken"
                    description="Game Designer"
                    mail="oliver@riddlebit.net"
                    imageURL="https://imgur.com/hPri7hn.png"
                />
                <MemberCard
                    name="Håvard Aasmo"
                    description="Developer"
                    mail="havi@riddlebit.net"
                    imageURL="https://imgur.com/LTJEcuH.png"
                />
                <MemberCard
                    name="Mildrid Johnsen"
                    description="Artist"
                    mail="mille@riddlebit.net"
                    imageURL="https://imgur.com/cZNk7Z8.png"
                />
                <MemberCard
                    name="Kristian Lid"
                    description="Artist"
                    mail="kristian@riddlebit.net"
                    imageURL="https://imgur.com/rQDYBKa.png"
                />
                <MemberCard
                    name="Robin Arntsen"
                    description="Artist"
                    mail="robin@riddlebit.net"
                />
                <MemberCard
                    name="Nikolai Holt"
                    description="Developer"
                    mail="nikolai@riddlebit.net"
                />
            </div>
        </div>
    </div>
);

export default OurTeam;
