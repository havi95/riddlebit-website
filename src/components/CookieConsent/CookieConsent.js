import React, { Component } from 'react';
import './CookieConsent.css';

export default class Consent extends Component {
    render() {
        return (
            <div className='consent-content'>
            <p>
                This website uses cookies. 
            </p>
            <div>
                <button className='consent-btn'
                        onClick={() => { this.props.history.push('/privacy')}}>Learn More</button>
                <button className='consent-btn consent-ok-btn' onClick={this.props.consent}>OK</button>
            </div>
            </div>
        )
    }
}