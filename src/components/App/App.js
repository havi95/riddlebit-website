import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Content from '../Content';
import Footer from '../Footer';
import AnalyticsRouter from '../AnalyticsRouter/AnalyticsRouter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faAngleDown, faChevronDown, faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faGithub, faEnvelope, faAngleDown, faChevronDown, faBars, faTimes, faSearch);

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Content />
                <Footer />
            </div>
            <AnalyticsRouter />
        </BrowserRouter>
    )
}

export default App;