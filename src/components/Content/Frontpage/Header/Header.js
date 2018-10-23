import React, { Component } from 'react';
import logo from '../../../../logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    scrollDown() {
        document.getElementById('about').scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    componentDidMount() {
    }

    render() {
        return (
            <header>
                <div id='header' className="header">
                    <div className="header-main-group">
                        <img src={logo} className='header-logo' alt="logo" />
                        <div className='header-title'>RIDDLEBIT SOFTWARE</div>
                        <div className='header-social'>
                            <a href='https://twitter.com/RiddlebitSW'><FontAwesomeIcon className='header-social-button' icon={['fab', 'twitter']} /></a>
                            <a href='https://www.facebook.com/riddlebit/'><FontAwesomeIcon className='header-social-button' icon={['fab', 'facebook']} /></a>
                        </div>
                    </div>
                    <div>
                        <span onClick={this.scrollDown}><FontAwesomeIcon className='header-go-down' icon={['fas', 'chevron-down']} /></span>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;