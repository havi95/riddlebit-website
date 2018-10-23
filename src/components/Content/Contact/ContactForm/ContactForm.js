import React from 'react';
import './ContactForm.css';

const ContactForm = () => (
    <form className='contact-form'>
        <label htmlFor='name'>Name</label>
        <input className='input-field' type='text' name='name' id='name' placeholder='Your Name' />
        <label htmlFor='email'>Email</label>
        <input className='input-field' type='email' name='email' id='email' placeholder='Your Email' />
        <label htmlFor='message'>Message</label>
        <textarea className='message-field' rows='8' name='message' id='message' />
        <div className="button-group">
            <input className='button' type='submit' value="Send" />
        </div>
    </form>
);

export default ContactForm;