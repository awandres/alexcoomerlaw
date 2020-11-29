import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./ServicesMenu";
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'



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

                <p>The law is an ever-moving target, especially Bankruptcy law and how student loans are viewed. Depending on your situation, whether you have government or private student loans, and your personal socio-economic situation, there are often viable solutions for individuals drowning under excessive student loans and egregious monthly payments. There is an old saying -- You don’t know what you don’t know until you know it. With respect to excessive student loans, student loan advisory support with an attorney may open up various options you never knew existed.</p>

                <h4>I’m drowning in Student Loan debt.  Can you explain in a little more detail about the student loan discharge process in bankruptcy?</h4>

<p>Unless and until the Federal Government acts on comprehensive Student Loan Reform and related Bankruptcy reform, the current state of the law presents a number of barriers to obtaining an easy, quick, or clean discharge of student loan debt in bankruptcy.</p>

<p>This does NOT mean it is impossible to obtain a discharge, however, it is a trying and slow process that entails a number of procedural tasks and legal elements that must be satisfied.</p>

<p>The general state of the law is codified under 11 U.S.C. § 523(a)(8).  This section of the bankruptcy code provides that student loans are excepted from the discharge a debtor receives in bankruptcy unless repaying those loans would impose an undue hardship on the debtor and the debtor’s dependents.</p>

<p>In United Student Aid Funds v. Pena (In re Pena), 155 F.3d 1108, 1112 (9th Cir. 1998), the Ninth Circuit adopted the three-pronged test set out in Brunner, 831 F.2d 395 at 396 (2nd. Cir. 1987), to determine whether the undue hardship standard has been met for a particular debtor in a particular situation.</p>

<p>The three prongs require a showing: (1) that the debtor cannot maintain, based on current income and expenses, a minimal standard of living for herself and her dependents if forced to repay the loans; (2) that additional circumstances exist indicating that this state of affairs is likely to persist for a significant portion of the repayment period of the student loans; and (3) the debtor made good faith efforts to repay the loans.</p>

<p>If your factual situation meets the basic elements of the Brunner Test and you desire to begin the long and arduous process to have your student loans discharged, you must file an Adversary Proceeding and related Complaint to Determine Dischargeability.  This Adversary Proceeding and Complaint to Determine Dischargeability is separate from your Chapter 7 or Chapter 13 Bankruptcy Petition.</p>

<p>After the Bankruptcy Petition and related Adversary Proceeding is filed and pre-trial proceedings (including discovery) are conducted, a trial will eventually be held in front of a Bankruptcy Judge.  The Bankruptcy Judge will hear testimony and weigh evidence on whether your particular situation meets the Brunner factors.  Just like any trial, the opposing party(ies), the Student loan Issuer and Servicer, will be represented by an attorney and will be presented an opportunity to offer evidence in support of their case that the loans should not be discharged.</p>

<p>After hearing the facts of the case and applying the facts to the state of the law, the Bankruptcy Judge then possesses the power to order your student loans discharged or not.  The whole process takes several years to complete, but may be worth it if your loans are large enough, your personal situation satisfies the Brunner factors, and significant financial relief can be obtained for you.</p>

<h4>How much will it cost to hire a lawyer to help me with this process?</h4>

<p>There is no one fixed rate or fee for services with Alex Coomer Law.  Every case is different and every fee is specially tailored to each case.</p>

<p>Please call <a href="tel:520-372-2475">520-372-2475</a> to schedule a free appointment to discuss the particular facts and situation of your life, student loans, and case.</p>

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

export default StudentLoan
