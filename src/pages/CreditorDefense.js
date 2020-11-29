import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



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

                  <h4>What does it mean for debt to be too old?</h4>

<p>Debt being “too old” is a way to talk about the Statute of Limitations to bring a breach of contract lawsuit against you.  Put another way, debt is “too old” if the time has passed for the creditor to bring a valid legal claim.  </p>

<p>For example, in Arizona, a verbal contract or “open account” has a Statute of Limitation of three years from when the cause of action occurred.  The most common “open account” that people encounter in day-to-day life is emergency room medical debt. </p>

<p>ARS § 12-543 (oral contracts) → <a href="https://www.azleg.gov/ars/12/00543.htm" target="blank">https://www.azleg.gov/ars/12/00543.htm</a></p>

<p>A written contract in Arizona maintains a Statute of Limitation of six years from when the cause of action occurred.  This includes credit card debt.  Credit card debt that has been sold onto many collection firms for a number of years, after the card went into default for several years, is an example of when debt may become too old to bring a valid lawsuit against you.  </p>

<p>ARS § 12-548 (written contracts) → <a href="https://www.azleg.gov/ars/12/00548.htm" target="blank">https://www.azleg.gov/ars/12/00548.htm</a> </p>

<p>Please Note --  It is necessary to consult with a licenced attorney when calculating the Statute of Limitations of any given claim or cause of action.  While the basics on the surface seem simple, there are also complex, nuanced, and detailed aspects of calculating Statutes of Limitations for every specific case that only an attorney can fully assess. </p>

<h4>What other possible defenses to debt lawsuits are there?</h4>

<p>In some rare cases, you can challenge whether you were served with legal documents correctly.</p>

<p>Service of Process Rule 4.1 of the Arizona Rules of Civil Procedure:</p>

<p><a href="https://govt.westlaw.com/azrules/Document/N96ABD6F086DC11E699A4BB097EBD55F8?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)&bhcp=1" target="_blank">https://govt.westlaw.com/azrules/Document/N96ABD6F086DC11E699A4BB097EBD55F8?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)&bhcp=1</a></p>

<p>On occasion, you may also be able to challenge whether a debt-buying firm actually has the proper paperwork and legal “standing” to sue you.  You must answer and respond to the creditors lawsuit if you think this defense applies to you.</p>

<p>Another example of valid debt defense is when you are sued by a credit card company after being the victim of criminal identity theft or fraud.  In such situations, you do NOT want to admit responsibility to these charges and must present a timely defense with evidence in Court that you never authorized the charges.</p>

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

export default CreditorDefense
