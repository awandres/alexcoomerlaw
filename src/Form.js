import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import axios from 'axios';





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


  handleSubmit(e){
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const phoneNumber = document.getElementById('phoneNumber').value;
          const location = document.getElementById('location').value;
          const message = document.getElementById('message').value;

          axios({
              method: "POST",
              url:"https://alexcoomerlaw.com:3002/send",
              data: {
                  name: name,
                  email: email,
                  phoneNumber: phoneNumber,
                  location: location,
                  messsage: message
              }
          }).then((response)=>{
              if (response.data.msg === 'success'){
                document.getElementById('error-message').style.display ="none"

                  document.getElementById('message-confirm').style.display ="block"
                  this.resetForm()

              }else if(response.data.msg === 'fail'){
                console.log(response.data.msg)
                document.getElementById('message-confirm').style.display ="none"

                document.getElementById('error-message').style.display ="block"
              }

              else {
                console.log(response.data.msg)
                document.getElementById('message-confirm').style.display ="none"

                document.getElementById('error-message').style.display ="block"
              }


          })
      }


      resetForm(){
              document.getElementById('form').reset();
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
            <form id='form' class='topBefore' onSubmit={this.handleSubmit.bind(this)} method="POST" >

              <div class='form-row' >
                <input id='name' type='text' placeholder='NAME' />
                <input id='email' type='text' placeholder='E-MAIL' />
              </div>

              <div class='form-row'>
                <input id='phoneNumber' type='text' placeholder='PHONE NUMBER' />
                <input id='location' type='text' placeholder='LOCATION' />
              </div>
              <textarea id='message' type='text' placeholder='MESSAGE' />
              <input id='submit' type='submit' value='SUBMIT' />
              <h3 id="message-confirm">Message Sent Successfully. We will be in touch!</h3>
              <h3 id="error-message">There was an error processing the form. Please send an email to alexcoomer@alexcoomerlaw.com</h3>
            </form>


          </div>
        </div>

      </div>

      </div>

    );
  }
}

export default Form;
