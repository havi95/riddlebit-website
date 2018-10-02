import React from 'react';
import './About.css';
import OurTeam from './OurTeam/OurTeam';

const About = () => (
    <div id='about' className='about-content'>
        <h1>About</h1>
        <p>
            We are a video game development company based in Trondheim, Norway.
            Our current project is a fast-paced first person shooter called "<a href='#games'>Setback</a>", which currently is in a pre-alpha development state.
            We are aiming for an early access release on Steam sometime in 2019.
            One of our ideals as a company is to make game development about more than just games.
            We approach our games as professional software projects, and we have strong ties to the academic sector.
        </p>
        <OurTeam />
    </div>
);

export default About;