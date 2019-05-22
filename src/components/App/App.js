import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider, Cookies, withCookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Navbar from '../Navbar';
import Content from '../Content';
import Footer from '../Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faAngleDown, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faGithub, faEnvelope, faAngleDown, faChevronDown, faBars, faTimes);

class App extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            consented: cookies.get('consented') || false
        };
        this.consent = this.consent.bind(this);
    }

    consent() {
        const { cookies } = this.props;
        let expires = new Date();
        expires.setMonth(expires.getMonth() + 6);
        cookies.set('consented', true, {expires: expires});
        this.setState({
            consented: true
        });
        window.location.reload();
    }

    render() {
        return (
            <CookiesProvider>
            <BrowserRouter>
            <div className="App">
                <Navbar />
                <Content />
                <Footer />
            </div>
            </BrowserRouter>
            </CookiesProvider>
        )
    }
}

export default withCookies(App);