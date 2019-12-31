import React from 'react';

import axios from 'axios';
const API_PATH = '/api/form';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
        console.log(this.state);
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
      <div className="contact-form" id="contact-form">
        <div>
          <form action="#">
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="Name*"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message......"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            ></textarea>

            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Say Hi"
            />
            <div>
              {this.state.mailSent && (
                <div className="sucsess">Thank you for contcting me.</div>
                
              )}
              {this.state.error && (
                <div className="error">
                  Apologize, something went wrong. <br />
                  Please email me at: me@nuresiddiq.com
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactForm;