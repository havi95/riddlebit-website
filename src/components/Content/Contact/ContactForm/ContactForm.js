import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;
        if (name && email && message) {
            this.props.callback(name, email, message, this.clearForm);
        }
    }

    clearForm() {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return(
            <form className='contact-form' onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input  onChange={e => this.setState({name: e.target.value})}
                        value={this.state.name}
                        className='input-field'
                        type='text' name='name' id='name'
                        placeholder='Your Name' required />
                <label htmlFor='email'>Email</label>
                <input  onChange={e => this.setState({email: e.target.value})}
                        value={this.state.email}
                        className='input-field'
                        type='email'
                        name='email' id='email'
                        placeholder='Your Email' required />
                <label htmlFor='message'>Message</label>
                <textarea   onChange={e => this.setState({message: e.target.value})}
                            value={this.state.message}
                            className='message-field' rows='8'
                            name='message' id='message' required />
                <div className="button-group">
                    <input className='button' type='submit' value="Send" />
                </div>
            </form>
        )
    }

}

export default ContactForm;