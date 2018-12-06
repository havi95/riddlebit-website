import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <div className='footer'>
            <div>
                <a className='footer-link' href='https://github.com/Riddlebit'>
                    GitHub &nbsp;
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </div>
            <div>
                <Link className='footer-link' to='/contact'>Contact Us</Link>
            </div>
            <div>
                <Link className='footer-link' to='/privacy'>Privacy Policy</Link>
            </div>
        </div>
        <div className='copyright'>
            &copy; {(new Date()).getFullYear()} Riddlebit AS
        </div>
    </footer>
);

export default Footer;