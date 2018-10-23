import React from 'react';
import OurTeam from './OurTeam/OurTeam';

const About = () => (
    <div id='about' className='content-section'>
        <h1>About</h1>
        <p>
            We are a video game development company based in Trondheim, Norway.
            Our current project is a fast-paced first person shooter called "<a href='#games'>Setback</a>", which is currently in a very early stage of development.
            We are aiming for a steam release sometime in 2019.
            Riddlebit Software consists of a crew passionate not only for games, but the engineering they are built on too.
            We are developers, we are engineers, we are designers, and we have a ton of games we want to make.
        </p>
        <OurTeam />
    </div>
);

export default About;
