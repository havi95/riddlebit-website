import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Games from './Games/Games';
import OurTeam from './OurTeam/OurTeam';

const Frontpage = () => (
    <div className='content-width-full'>
        <Header />
        <About />
        <Games />
        <OurTeam />
    </div>
);

export default Frontpage;