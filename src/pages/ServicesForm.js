import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";






class ServicesForm extends Component {





  componentDidMount() {



  }



  render() {


    return (
      <div id="body">
      <div class='form-services-pg-div'>

        <div class='form'>

          <h2 class='headlines'>Get relief now</h2>
          <hr class='underline' />
          <p>If you are in financial trouble and are seeking more information about bankruptcy and how it might be able to help your situation, please fill out the form below with a little information about yourself and your case and I will reach out to you as soon as possible to discuss your situation further.</p>

          <div class='form-body'>
            <form id='form' class='topBefore' action='mailto:alex.r.wandres@gmail.com'>

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

export default ServicesForm;
