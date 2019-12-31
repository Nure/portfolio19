import React, { Component } from 'react';
import ContactForm from './contact-form';

import '../css/contact.css';
import '../css/contact-form.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-container">
        <div>
          <h3 className="main-contact-title">
            <span style={{ color: '#64ffda', fontWeight: 'bold' }}>Get</span> In
            Touch
          </h3>
        </div>
        <div className="contact-body-container">
          <p>
            I'm currently open for job opportunities out side
            <br />
            of Bangladesh and my inbox is always open. If there's an opportunity
            just to say hi, I'll get back to you shortly!
          </p>
          <div className="email-form-main">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
