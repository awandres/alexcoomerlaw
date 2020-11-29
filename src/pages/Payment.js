import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



class Payment extends Component {
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
                  <img class='services-pg-icon' src='assets/img/icons/courthouse.png' /><h3>Payment</h3>

                  <h4>Payment Plans:</h4>

                  <p>Alex Coomer Law, PLLC does accept payment plans.  Each payment plan will be unique and specific to your case and financial situation.  </p>

                  <p>If you are interested in retaining the services of Alex Coomer Law, PLLC and need to establish a payment plan in order to do so, please do not hesitate to ask. </p>

                  <h4>Credit Card Policy: </h4>

                  <p>Alex Coomer Law, PLLC is not allowed to accept a credit card payment for attorney’s fees from a bankruptcy client who intends to list such payment of fees on a credit card as a debt in a bankruptcy proceeding.  </p>

                  <p>Credit card payments, in some circumstances, may be accepted from third parties who pay the fee on a bankruptcy client’s behalf.  Please contact Alex Coomer Law, PLLC in order to discuss the specifics regarding third party payment.  </p>

                </div>

              </div>

              <div class="services-pg-col-2">

              <ServicesMenu>
              </ServicesMenu>

              </div>
            </div>

          </div>
        </div>
        <Social />
        <ServicesForm />




      </div>

    )
  }
}

export default Payment
