import React from 'react';
import logo from '../../../../logo.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    const scrollDown = () => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <header>
            <div id='header' className="header">
                <div className="header-main-group">
                    <img src={logo} className='header-logo' alt="logo" />
                    <div className="header-line">
                        <svg>
                            <line x1="0" x2="100%" y1="0" y2="0"></line>
                        </svg>
                    </div>
                    <div className='header-title'>RIDDLEBIT SOFTWARE</div>
                    <div className='header-social'>
                        <a href="https://twitter.com/setback" target="_blank"><FontAwesomeIcon className='header-social-button' icon={['fab', 'twitter']} /></a>
                        <a href="https://www.facebook.com/riddlebit" target="_blank"><FontAwesomeIcon className='header-social-button' icon={['fab', 'facebook']} /></a>
                    </div>
                </div>
                <div>
                    <span onClick={scrollDown}><FontAwesomeIcon className='header-go-down' icon={['fas', 'chevron-down']} /></span>
                </div>
            </div>
        </header>
    );
}

export default Header;