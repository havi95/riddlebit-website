import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider, Cookies, withCookies } from 'react-cookie';
import Navbar from '../Navbar/Navbar';
import Content from '../Content/Content';
import Consent from '../Content/Privacy/Consent/Consent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faAngleDown, faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { instanceOf } from 'prop-types';
library.add(faTwitter, faFacebook, faEnvelope, faAngleDown, faChevronDown, faBars, faTimes);

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
                {!this.state.consented &&
                    <Consent consent={this.consent}/>
                }
            </div>
            </BrowserRouter>
            </CookiesProvider>
        )
    }
}

export default withCookies(App);