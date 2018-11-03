import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import OurTeam from './OurTeam/OurTeam';

const Frontpage = () => (
    <div className='content-width-full'>
        <Header />
        <About />
        <Projects />
        <OurTeam />
    </div>
);

export default Frontpage;