import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./pages/ServicesMenu";
import ServicesForm from "./pages/ServicesForm";
import Social from './Social'




class Services extends Component {

  constructor (props) {
    super(props)
    this.state = ({
      fromServices:false
    })

  }

  componentDidMount () {
    window.scrollTo(0, 0)

    console.log(this.state.brightMls)
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
                  <img class='services-pg-icon' src='assets/img/icons/contract-icon.png' /><h3>Chapter 7 Bankruptcy Petition Preparation and Filing:</h3>

                  <p>For more information, please see the following links:

                        <Link exact to="/bankruptcy/chapter-seven-bankruptcy-info" ><p>Chap 7 FAQ</p></Link>
                        <Link exact to="/bankruptcy/chapter-thirteen-bankruptcy-info" ><p>Chap 13 FAQ</p></Link>
                        <Link exact to="/bankruptcy/the-process-of-bankruptcy" ><p>The Process of Chapter 7 Bankruptcy</p></Link>
</p>
                </div>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/umbrella-icon.png' /><h3>Pre-Bankruptcy Planning:</h3>

                  <p>In some cases, you may meet the legal requirements to file for bankruptcy today, but it is either not strategically right to file for bankruptcy just yet or there could be other reasons to delay filing.  Pre-Bankruptcy planning and assistance helps you understand your financial situation in order to have a plan in place to protect as much property as lawfully possible from creditors and maximize your discharge, in the event you have to file for bankruptcy.  Put another way, Pre-Bankruptcy planning is all about timing.  A good bankruptcy attorney will always consider the timing implications on when to file your petition.  The difference between a well-timed filing and an ill-timed filing is money in your pocket.  </p>
                </div>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/hand-scale-icon.png' /><h3>Loan Modification Assistance:</h3>

                  <p>If you are struggling to pay your mortgage and are concerned you may be facing foreclosure, a loan modification program may be right for you.  A mortgage loan modification may help bring you up-to-date on your payments.  The process of modifying secured loans can be difficult and complicated to navigate on your own.  An attorney on your team during your secured loan application or the loan modification process will help you understand complex property law issues and also protect your financial future by advising against certain pitfalls, possible future issues, and predatory loan features. </p>
                </div>


                <div>
                  <img class='services-pg-icon' src='assets/img/icons/scale-icon.png' /><h3>Debt Negotiation and Settlement:</h3>

                  <p>Bankruptcy is not right for all people.  Bankruptcy is usually the last resort.  In some situations, however, it is possible to negotiate various debts down or structure a new payment plan that works for you.  A bankruptcy lawyer, fighting for you and looking out for your best interest, during debt negotiations can be a very valuable tool to help you level the playing field during debt negotiations and plan a pragmatic economic future.  </p>
                </div>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/courthouse.png' /><h3>Creditor Defense:</h3>

                  <p>Sometimes a creditor goes after the wrong person, makes a mistake, or attempts to collect on a debt that is too old.  In those situations, when there is a strong defense against the debt, your best option oftentimes is to answer and defeat the claim of the creditor.  When you believe a creditor claim is fatally flawed, consultation with an attorney is advised to assess the viability of your defense, prepare your defense to challenge the creditor claim in a timely manner, and help resolve the issue for you.  </p>
                </div>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/creditcard.png' /><h3>Student Loan Advisory Services:</h3>

                  <p>The law is an ever-moving target, especially Bankruptcy law and how student loans are viewed.  Depending on your situation, whether you have government or private student loans, and your personal socio-economic situation, there are often viable solutions for individuals drowning under excessive student loans and egregious monthly payments.  There is an old saying -- You don’t know what you don’t know until you know it.  With respect to excessive student loans, student loan advisory support with an attorney may open up various options you never knew existed.  </p>
                </div>

                <div>
                  <img class='services-pg-icon' src='assets/img/icons/money-shield.png' /><h3>Protection from Creditors:</h3>

                  <p>Do you hate receiving calls from creditors and collection companies?  Did you know you can hire an attorney to handle these calls for you as your agent?   This service is not right for everyone, but if you suffer anxiety or distress interacting with collection agencies and desire an attorney to handle and mediate collection activity, a protection from creditors service may be right for you.</p>
                </div>



              </div>

              <div class="services-pg-col-2">

<ServicesMenu />

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

export default Services
