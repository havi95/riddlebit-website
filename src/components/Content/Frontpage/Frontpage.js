import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import OurTeam from './OurTeam';
import Partners from './Partners';

const Frontpage = () => (
    <div className='content-width-full'>
        <Header />
        <About />
        <OurTeam />
        <Projects />
        <Partners />
    </div>
);

export default Frontpage;