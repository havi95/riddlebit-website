import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom'

const Footer = ({history}) => (
    <footer>
        <div>
            <a className='footer-link' href='https://github.com/Riddlebit/riddlebit-website'>
                View on GitHub &nbsp;
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
        </div>
        <div className='copyright'>
            &copy; {(new Date()).getFullYear()} Riddlebit AS
        </div>
        <div>
            <a className='footer-link' onClick={() => history.push('/privacy')}>Privacy Policy</a>
        </div>
    </footer>
);

export default withRouter(Footer);