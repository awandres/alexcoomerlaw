import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import BankruptcyMenu from './BankruptcyMenu'
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'

class ProcessOfBankruptcy extends Component {
  componentDidMount () {
    const { fromServices } = this.props.location.state || {}
    console.log(fromServices)
    if (!fromServices) {
      console.log('scrolling')
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
                  <img class='services-pg-icon' src='assets/img/icons/courthouse.png' /><h3>The Process</h3>

                  <h4>Can you explain how the Chapter 7 Bankruptcy process would work in a little more detail?</h4>

                  <p class='numbered-p'><span class='numbered-list'>1.)</span>
                    {' '} In the event that you are in financial trouble, call 520-372-2475 or email alexcoomer@alexcoomerlaw.com, leave good contact information, and ask Alex to call you back. If you choose to email, please do not put personal identifying information in your email.            </p>
                  <p class='numbered-p'><span class='numbered-list'>2.)</span>
                    {' '} Alex will return your call and will talk with you for a few minutes.</p>
                  <p class='numbered-p'><span class='numbered-list'>3.)</span>
                    {' '} If Alex thinks he can help, he will send you a series of documents to complete and to return to his office or electronically.  Please be aware that this initial consultation packet and first series of documents is quite long and will take time to complete.  The consultation packet is long because there is a lot of information Alex will need to know to assess your situation in a holistic manner.</p>
                  <p class='numbered-p'><span class='numbered-list'>4.)</span>
                    {' '} Upon completion and receipt of the consultation packet by Alex or his team, you will then schedule a time to meet with Alex personally face-to-face or via Zoom, at your preference.</p>
                  <p class='numbered-p'><span class='numbered-list'>5.)</span>
                    {' '} Prior to meeting with Alex, you will need to complete a free credit report draw on annualcreditreport.com.  Either bring the credit report with you to the meeting with Alex or provide a copy to Alex before the meeting.  Please also bring / collect your most recent bills and bank statements for this initial meeting.</p>
                  <p class='numbered-p'><span class='numbered-list'>6.)</span>
                    {' '} If Alex believes he can assist you and wishes to take your case, you will be presented with an Engagement Agreement.  The Engagement Agreement will contain all of the details regarding costs and terms of representation.</p>
                  <p class='numbered-p'><span class='numbered-list'>7.)</span>
                    {' '} If you choose to hire Alex as your lawyer, you will need to make some sort of payment to retain his services.  The amount necessary to initially retain Alex Coomer Law, PLLC will depend on the nature of your case.  Alex Coomer Law, PLLC understands money is tight, especially for bankruptcy filers, and will work with you on establishing an affordable payment plan.</p>
                  <p class='numbered-p'><span class='numbered-list'>8.)</span>
                    {' '} You will need to complete a course on credit counseling.  This course is mandated by law in order to file for bankruptcy.   Upon completion of the course, you will be provided a certificate of completion which you will need to give to Alex.</p>
                  <p class='numbered-p'><span class='numbered-list'>9.)</span>
                    {' '} Alex will provide you specific instructions on the necessary items he needs you to give him to complete your bankruptcy Petition.  You will be expected to work with Alex  to provide all necessary documents, account numbers, and information needed for your Petition in a timely manner.  If you have questions along the way, Alex is here to help.</p>
                  <p class='numbered-p'><span class='numbered-list'>10.)</span>
                    {' '} As the documents are obtained and provided to Alex, the Petition is prepared.</p>
                  <p class='numbered-p'><span class='numbered-list'>11.)</span>
                    {' '} Upon receipt of complete payment for services and fees, Alex will contact you to confirm the final steps prior to filing the Petition.  Upon your review of the final Petition and sign certain documents, the Petition will be electronically filed by Alex on your behalf.</p>
                  <p class='numbered-p'><span class='numbered-list'>12.)</span>
                    {' '} A Trustee will be appointed to your case.  The Trustee will review the Petition.</p>
                  <p class='numbered-p'><span class='numbered-list'>13.)</span>
                    {' '} If the Petition appears in order, a 341 Meeting of Creditors will be scheduled.  You will need to attend this 341 Meeting.  You will need to bring your driver's license and social security card.  If you do not bring both your driver’s license and social security card, the meeting will be rescheduled at your cost.</p>
                  <p class='numbered-p'><span class='numbered-list'>14.)</span>
                    {' '} At some point after the Petition is filed, you will need to complete a second course on financial planning and management.  This course is mandated by law.  Upon completion of the course, you will be provided a certificate of completion which you will need to provide to Alex.</p>
                  <p class='numbered-p'><span class='numbered-list'>15.)</span>
                    {' '} The final few steps depend on if your case is a no-asset case or if there are assets to be sold.  If there are no assets, the next step can be as little as two or three more weeks, depending on the speed of the Trustee.  If there are assets to sell, this may take a significant period of time to resolve.</p>
                  <p class='numbered-p'><span class='numbered-list'>16.)</span>
                    {' '} After the necessary work is completed by the Trustee, the Trustee will compose a final report and make a recommendation to the Bankruptcy Judge.  At this point, the Judge will review the case.  The Judge will need to approve the work of the Trustee in order to finalize your bankruptcy plan and discharge.</p>
                  <p class='numbered-p'><span class='numbered-list'>17.)</span>
                    {' '} After receipt of the final order of discharge from the Bankruptcy Court, there will be a few more final details to manage specific to your situation, but the case is primarily complete now.</p>
                  <p class='numbered-p'><span class='numbered-list'>18.)</span>
                    {' '} Congratulations!  Enjoy your fresh start! Say goodbye to aggressive creditors, the midnight debt sweats, and sleepless nights!</p>

                </div>

              </div>

              <div class='services-pg-col-2'>

                <BankruptcyMenu />

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

export default ProcessOfBankruptcy
