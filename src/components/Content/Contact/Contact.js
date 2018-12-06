import React, { Component } from 'react';
import './Contact.css';
import ContactForm from './ContactForm/ContactForm';
import * as emailjs from 'emailjs-com';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageSent: false
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(name, email, message, clearForm) {

        const params = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send('mailgun', 'riddlebit_contact', params, process.env.REACT_APP_EMAILJS_USERID)
        .then((res) => {
            console.log(res)
            this.setState({
                messageSent: true
            });
            clearForm();
        }, (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div id='contact' className='content-section contact-content'>
                <h1>Contact</h1>
                <p>
                    Do you have a question? Or maybe you just want to give some feedback?<br/>
                    Feel free to contact us in english or norwegian.
                </p>
                {this.state.messageSent &&
                    <h4 className='sent-alert'>Message was sent</h4>
                }
                <ContactForm callback={this.sendMessage} />
            </div>
        )
    }
}