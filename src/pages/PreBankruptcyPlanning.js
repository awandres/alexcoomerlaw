import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";



class PreBankruptcy extends Component {

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
                  <img class='services-pg-icon' src='assets/img/icons/umbrella-icon.png' /><h3>Pre-Bankruptcy Planning:</h3>

                  <p>In some cases, you may meet the legal requirements to file for bankruptcy today, but it is either not strategically right to file for bankruptcy just yet or there could be other reasons to delay filing.  Pre-Bankruptcy planning and assistance helps you understand your financial situation in order to have a plan in place to protect as much property as lawfully possible from creditors and maximize your discharge, in the event you have to file for bankruptcy.</p>
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

export default PreBankruptcy
