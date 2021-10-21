import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import Form from './Form'
import Social from './Social'






class Contact extends Component {





  componentDidMount() {
    window.scrollTo(0, 0);



  }



  render() {


    return (
      <div id="body">

        <div class="contact-container">
        <h3 class="headlines">Contact Alex to Start the Process:</h3>

        <div class="contact-flex">
<div class="contact-left">

  <img class="contact-img" src="assets/img/ACLAW_LOGO.png" />
  <div class="contact-icons">
    <a href="#" ><img class="email-icon-contact" src="assets/img/email.svg" /></a>
    <a href="#"><img class="phone-icon-contact" src="assets/img/phone-call.svg" /></a>
    </div>

  <a style={{color:'black', textDecoration:'none'}} href="#" ><p style={{textDecoration:'none'}}>Email: alexcoomer@alexcoomerlaw.com</p></a>
  <a  style={{color:'black', textDecoration:'none'}} href="tel:520-372-2475"><p style={{textDecoration:'none'}}>Phone: (520) 372-2475</p></a>
</div>

<div class="contact-right">
        <p>There are a number of ways to begin the process with Alex Coomer Law, PLLC.</p>

        <p>First, you may call 520-372-2475.  If no one is available to take your call at that time, please leave a short voicemail with your name, a brief explanation as to your issue, and your phone number.  You will then receive a call back as soon as Alex is available to call you.  (Please do not leave your social security number or any confidential personal information in the voicemail.)</p>

        <p>Second, you may email Alex directly at alexcoomer@alexcoomerlaw.com.  In your email, please provide a brief explanation as to your issue, your contact information, and the best time to reach you.  You will then receive a call back as soon as Alex is available to call you.  (Please do not write your social security number or any confidential personal information in the email.)</p>

        <p>Third, you may complete the form below or elsewhere on this website (currently under maintenance).  Please complete each box and then submit your information.  This information will be provided to Alex and he will then respond to you as soon as he can.   (Please do not write your social security number or any confidential personal information in the contact form.)</p>
</div>
        </div>

        </div>
        <Social />

<Form />
      </div>

    );
  }
}

export default Contact;
