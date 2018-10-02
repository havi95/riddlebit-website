import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faAngleDown, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faGithub, faEnvelope, faAngleDown, faChevronDown, faBars, faTimes);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App">
                <Navbar />
                <Content />
                <Footer />
            </div>
            </BrowserRouter>
        )
    }
}

export default App;