import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";



class ProtectionFrom extends Component {

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
                <img class='services-pg-icon' src='assets/img/icons/money-shield.png' /><h3>Protection from Creditors:</h3>

                <p>Do you hate receiving calls from creditors and collection companies?  Did you know you can hire an attorney to handle these calls for you as your agent?   This service is not right for everyone, but if you suffer anxiety or distress interacting with collection agencies and desire an attorney to handle and mediate collection activity, a protection from creditors service may be right for you.   </p>
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

export default ProtectionFrom
