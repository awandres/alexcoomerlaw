import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



class LoanModification extends Component {

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
                  <img class='services-pg-icon' src='assets/img/icons/hand-scale-icon.png' /><h3>Loan Modification Assistance:</h3>

                  <p>If you are struggling to pay your mortgage and are concerned you may be facing foreclosure, a loan modification program may be right for you.  A mortgage loan modification may help bring you up-to-date on your payments.  The process of modifying secured loans can be difficult and complicated to navigate on your own.  An attorney on your team during your secured loan application or the loan modification process will help you understand complex property law issues and also protect your financial future by advising against certain pitfalls, possible future issues, and predatory loan features. </p>
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

export default LoanModification
