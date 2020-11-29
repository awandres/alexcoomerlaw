import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



class DebtNegotiation extends Component {

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
                  <img class='services-pg-icon' src='assets/img/icons/scale-icon.png' /><h3>Debt Negotiation and Settlement:</h3>

                  <p>Bankruptcy is not right for all people.  Bankruptcy is usually the last resort.  In some situations, however, it is possible to negotiate various debts down or structure a new payment plan that works for you.  A bankruptcy lawyer, fighting for you and looking out for your best interest, during debt negotiations can be a very valuable tool to help you level the playing field during debt negotiations and plan a pragmatic economic future.  </p>
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

export default DebtNegotiation
