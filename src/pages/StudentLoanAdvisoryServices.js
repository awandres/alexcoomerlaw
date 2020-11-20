import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";



class StudentLoan extends Component {

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
                <img class='services-pg-icon' src='assets/img/icons/creditcard.png' /><h3>Student Loan Advisory Services:</h3>

                <p>The law is an ever-moving target, especially Bankruptcy law and how student loans are viewed.  Depending on your situation, whether you have government or private student loans, and your personal socio-economic situation, there are often viable solutions for individuals drowning under excessive student loans and egregious monthly payments.  There is an old saying -- You don’t know what you don’t know until you know it.  With respect to excessive student loans, student loan advisory support with an attorney may open up various options you never knew existed.   </p>
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

export default StudentLoan
