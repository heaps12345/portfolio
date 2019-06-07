import React from 'react';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
      email: '',
      messageStatus: false,
      buttonDisabled: false
    };
    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }

  

  updateName = e => {
    this.setState({ name: e.target.value });
  };

  updateEmail = e => {
    this.setState({ email: e.target.value });
  };

  updateMessage = e => {
    this.setState({ message: e.target.value });
  };

  validate() {
    this.form.current.reportValidity();
  }

  render() {
    let messageState = this.state.messageStatus ? 'active' : 'inactive';
    return (
      <form
        ref={this.form}
        action="https://formspree.io/dustinheaps89@gmail.com"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          value={this.state.name}
          onChange={this.updateName}
          placeholder="Your name"
          className="name"
          name="name"
          required={true}
        />
        <input
          type="email"
          value={this.state.email}
          onChange={this.updateEmail}
          className="email"
          placeholder="Your email"
          name="email"
          required={true}
        />
        <textarea
          value={this.state.message}
          onChange={this.updateMessage}
          className="message"
          placeholder="Message"
          name="message"
          required={true}
        />
        <div className="buttonInline">
          <p className={`${messageState}`}>Message Sent!</p>
          <input
            value="Send"
            className="standard-button"
            disabled={this.state.buttonDisabled}
            onClick={this.validate}
            type="submit"
          />
        </div>
      </form>
    );
  }
}

export default ContactForm;
