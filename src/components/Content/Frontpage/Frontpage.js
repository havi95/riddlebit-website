import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import OurTeam from './OurTeam';

const Frontpage = () => (
    <div className='content-width-full'>
        <Header />
        <About />
        <Projects />
        <OurTeam />
    </div>
);

export default Frontpage;