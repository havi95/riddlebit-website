import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageSent: false
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(name, email, message, clearForm) {
        // Removed :O
    }

    render() {
        return (
            <div id='contact' className='content-section contact-content'>
                <h1>Contact</h1>
                {/* <p>
                    Do you have a question? Or maybe you just want to give some feedback?<br/>
                    Feel free to contact us in english or norwegian.
                </p> */}
                <p>
                    Contact form is temporarily disabled.<br/>
                    Contact us by sending an email to <a href='mailto:contact@riddlebit.net'>contact@riddlebit.net</a>.
                </p>
                {this.state.messageSent &&
                    <h4 className='sent-alert'>Message was sent</h4>
                }
                <ContactForm callback={this.sendMessage} />
            </div>
        )
    }
}