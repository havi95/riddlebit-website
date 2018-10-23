import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
    render() {
        return (
            <div id='contact' className='content-section contact-content'>
                <h1>Contact</h1>
                <ContactForm />
            </div>
        )
    }
}

export default Contact;