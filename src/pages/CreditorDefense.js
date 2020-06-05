import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";



class CreditorDefense extends Component {

  componentDidMount () {
    const { fromServices } = this.props.location.state || {}
    console.log(fromServices)
    if (!fromServices) {
      window.scrollTo(0, 0)
    }

  }


  render () {
    var settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div id='body'>

        <div class='services-banner'>


          <div class='services-hero'>
            <h1>SERVICES</h1>

          </div>
        </div>

        <div class='services-pg-content-container '>
          <div class='services-pg-div flex-col'>


            <div class='flex-row services-pg-col-container'>
              <div class='services-pg-col-1 flex-col'>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/courthouse.png' /><h3>Creditor Defense:</h3>

                  <p>Sometimes a creditor goes after the wrong person, makes a mistake, or attempts to collect on a debt that is too old.  In those situations, when there is a strong defense against the debt, your best option oftentimes is to answer and defeat the claim of the creditor.  When you believe a creditor claim is fatally flawed, consultation with an attorney is advised to assess the viability of your defense, prepare your defense to challenge the creditor claim in a timely manner, and help resolve the issue for you.</p>
                </div>

              </div>

              <div class="services-pg-col-2">

              <ServicesMenu>
              </ServicesMenu>

              </div>
            </div>

          </div>
        </div>

        <ServicesForm />



      </div>

    )
  }
}

export default CreditorDefense
