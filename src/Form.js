import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";






class Form extends Component {

  state = {
    feedback: '',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, senderEmail, receiverEmail, message, user) {
    window.emailjs
      .send('default_service', templateId, {
          senderEmail,
          receiverEmail,
          message
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {


    return (
      <div id="body">
      <div class='form-div'>

        <div class='form'>

          <h2 class='headlines'>Get relief now</h2>
          <hr class='underline' />
          <p>If you are in financial trouble and are seeking more information about bankruptcy and how it might be able to help your situation, please fill out the form below with a little information about yourself and your case and I will reach out to you as soon as possible to discuss your situation further.</p>

          <div class='form-body'>
            <form id='form' class='topBefore' >

              <div class='form-row' >
                <input id='name' type='text' placeholder='NAME' />
                <input id='email' type='text' placeholder='E-MAIL' />
              </div>

              <div class='form-row'>
                <input id='name' type='text' placeholder='PHONE NUMBER' />
                <input id='name' type='text' placeholder='LOCATION' />
              </div>
              <textarea id='message' type='text' placeholder='MESSAGE' />
              <input id='submit' type='submit' value='SUBMIT' />

            </form>


          </div>
        </div>

      </div>

      </div>

    );
  }
}

export default Form;
