import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



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

                  <h4>Can you please explain pre-bankruptcy planning in more detail and why this service is valuable to me?</h4>

<p>In a Chapter 7 case, a thoughtful bankruptcy lawyer must analyze the timing of filing your case to maximize your exemptions and minimize the assets that will be liquidated or taken from you to pay your creditors.   In other words, good pre-bankruptcy planning protects your stuff, gets you the largest legal discharge available, and provides the best foundation possible for your life coming out of bankruptcy.</p>

<p>For example, without proper pre-bankruptcy planning and assistance from an attorney, it is possible you may surrender most (if not all) of your tax refund.  An ill-timed filing at the end of the calendar year when you are anticipating a big refund will likely result in the Trustee keeping your case open until your refund arrives and taking your refund to pay creditors a portion of the debt owed.  If you regularly receive a large tax refund, discussion with an attorney as to the optimal time to file and how to spend your tax refund properly prior to filing is highly advised.</p>

<p>Another classic example where proper pre-bankruptcy planning with an attorney is helpful is when you have way too much equity in automobiles, own lots of vehicles, and you must transition non-exempt assets into exempt assets prior to filing.   With the guidance of an attorney, you can sell the vehicles you do not want to keep and with the sale proceeds of the vehicles know exactly what you can buy, how much you can spend, and the timing of this process to accumulate helpful exempt assets to your family (i.e. stuff you get to keep even though you are filing for bankruptcy). </p>

<h4>Won’t Pre-Bankruptcy Planning slow down my filing? </h4>

<p>Yes, in theory, your filing date can be pushed back in order to Pre-Bankruptcy plan properly. BUT, this sort of pre-bankruptcy strategy will only be done to maximize value in your case for you as applied to your given situation. </p> 

<p>In some cases, such as a pending home foreclosure or where there are heavy wage garnishments already in place, there may not be any incentive or financial reasons to pre-bankruptcy plan to the same degree and filing your case quickly will be the priority. </p>

<h4>Is Pre-Bankruptcy Planning expensive?  </h4>

<p>No, in fact, there is usually no separate charge for pre-bankruptcy planning.  At Alex Coomer Law, Pre-Bankruptcy planning is typically built into the flat fee price designed for your case and your situation.  Pre-Bankruptcy planning is simply good legal work. </p>

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

export default PreBankruptcy
