import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import BankruptcyMenu from "./BankruptcyMenu";
import ServicesForm from "../pages/ServicesForm";



class ChapterThirteenInfo extends Component {


  constructor (props) {
    super(props)
    this.state = ({
      fromServices:false
    })

  }
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

        <div class='bankruptcy-banner'>


          <div class='bankruptcy-hero'>
            <h1>BANKRUPTCY</h1>

          </div>
        </div>

        <div class='services-pg-content-container '>
          <div class='services-pg-div flex-col'>


            <div class='flex-row services-pg-col-container'>
              <div class='services-pg-col-1 flex-col'>


                <div>
                  <img class='services-pg-icon' src='assets/img/icons/moneyscale.png' /><h3>Chapter 13 Bankruptcy Petition Preparation and Filing:</h3>

                  <h4>What is Chapter 13 Bankruptcy?</h4>

<p>By far, most people who run into financial hot-water ultimately file for bankruptcy under Chapter 7.  In some cases, however, an individual cannot file for Chapter 7 bankruptcy for legal reasons or it may be more advantageous to file under Chapter 13. </p>

<p>The most common situations where someone may file for Chapter 13 is when you make too much money, you have too much equity in your property, you have filed for Chapter 7 too recently, most of your debt is not dischargeable under the bankruptcy code, or you have specific secured debts you would like to address.  </p>

<p>In very limited detail, a Chapter 13 takes the following steps.  First, an individual with a regular source of income first proposes a plan of repayment.  Second, you obtain court approval of the plan.  Third, you make the plan payments over a number of years.  Generally speaking, the Chapter 13 plan is prepared by your attorney before the Petition is filed.  The length of a Chapter 13 plan is between three and five years.  </p>

<p>A Trustee in a Chapter 13 has the responsibility of reviewing the plan before the Court approves the plan.  The Trustee makes the determination of whether the plan is feasible, whether you will be able to make the payments you propose under the plan, and whether the plan meets the legal requirements for Court approval.  After obtaining Court approval, you must execute and follow through with the plan.  </p>

<h4>Who might a Chapter 13 Bankruptcy apply to? </h4>

<p>If your income is substantial.  In Arizona, there is an economic test called the “means test” that determines if your income is more than the basic living expense.  Chapter 13 may apply to you if your household income exceeds the basic living expense and there is no other way to qualify you for a Chapter 7 Bankruptcy.  </p>

<p>If your property is worth more than the exemptions or is not exempt.  In other words, you have nice things.   You can keep your property in this case, but you will need to plan to pay your creditors the non-exempt portion to keep your property.</p>

<p>If you have significant equity in your house and vehicle, want to keep your house and vehicle, but are not current on your debts payments.  It is possible to pay the arrears, keep payments current, and pay your house and vehicle debts during Chapter 13.  </p>

<p>If you owe significant back taxes or child support.  Some debt, like most tax debt and child support, is not dischargeable.  If you are behind, It is possible to pay arrears on child support or tax creditors in Chapter 13 and establish a new payment plan that accurately suits your financial situation.  </p>


<h4>How is a Chapter 13 different from a Chapter 7? </h4>

<p>In a Chapter 7, you will surrender non-exempt assets that are sold for the benefit of creditors. In a Chapter 13, you will commit part of your future income, along with other assets you have committed to the plan, to be distributed to creditors. </p>

<p>In a Chapter 7, you have very limited ability to change the nature of a debt by a secured creditor when the debt is in default and the creditor does not want to make a deal.  In a Chapter 13, you have the right to cure defaults over a period of time, even over the secured creditor’s objection.</p>

<p>In a Chapter 7, obtaining a discharge usually takes about four to six months.  In a Chapter 13, obtaining a discharge (if there is a discharge available), will take between three and five years.  </p>

<p>In a Chapter 7, the Bankruptcy Code determines what is distributed and to whom.  In a Chapter 13, the plan itself establishes how much and when creditors are to be paid.  </p>

<h4>I’ve heard Chapter 13 Bankruptcies are hard to complete, is this true? </h4>

<p>Yes, the fact of the matter is that most individuals who enter into a Chapter 13 plan are not successful. </p>

<p>To succeed under a Chapter 13 plan, you have to have discipline and be willing to endure significant life-style changes.  Completion of a Chapter 13 plan is not impossible though and many individuals have achieved financial goals through execution of a Chapter 13.  With extra attention to details, finding extra cost savings in your day-to-day life, and enduring a little financial pain, Chapter 13 can be an excellent solution for certain individuals. </p>


</div>
              </div>

              <div class="services-pg-col-2">

              <BankruptcyMenu />


              </div>
            </div>

          </div>
        </div>

        <ServicesForm />




      </div>

    )
  }
}

export default ChapterThirteenInfo
