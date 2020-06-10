import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesMenu from "./pages/ServicesMenu";

var currentIndex = null
var currentRealtorIndex = null

const testimonials = [{
  name: 'Pam P',
  review: 'As soon as we met our CapStar Agent, we knew we wanted her to list our home. She attended every showing to make sure potential buyers had the opportunity to see all the features of the house and she always made sure showings were to only qualified buyers. Her knowledge of real estate sales and the market was invaluable when we received an offer and she guided us through the negotiation process. She is a true professional and we feel fortunate to have her as our agent'
},
  {
    name: 'Lena C., Attorney',
    review: "Our CapStar Agent is amazing! I first got to know her as a potential buyer. I then referred my estate clients to her, and she had the house under contract in under 10 days. Despite unexpected last minute issues that were beyond seller's control and with our Agent's expertise, they were still able to close as scheduled. When my husband needed to sell his rental property, we spent no time deciding on whom to call. Again, she went above and beyond and thanks to her connections and expertise, the job was done in the shortest time possible. We had two offers in 11 days."
  },
  {
    name: 'Martin H',
    review: 'Our CapStar Agents is a very knowledgeable realtor. She helped us 15 years ago to purchase the right house for our family. We have also recommended her to friends and neighbors. She also put our home on the market, staged it and offers were given in 2 days. She is great and I would highly recommend Her!'
  },
  {
    name: 'Jerry R',
    review: 'Having used a CapStar Agent services to both buy our house originally, and on referral sales, we knew what to expect from her. Trust, truth, dedication, mastery of the art of Real Estate matters - including staging our home in such a manner that we had multiple offers within the first 24 hours - were what we expected and what we got. She is our Go To Agent for any Real Estate needs in or around Frederick, Montgomery and Washington counties in MD. Her network of high-performing agents stand-by ready to jump in and help. When you meet her, you will know why.'
  },
  {
    name: 'Sara S',
    review: 'Our CapStar Agent is very knowledgeable and made buying our first house a very easy process! She knew the answer to all the questions we asked and was there for us whenever we needed her (including weekends). Would highly recommend her when trying to buy your first home or any home!'
  },
  {
    name: 'Jessica E',
    review: 'Working with Capstar was an absolutely fantastic experience! Our Agent was extremely knowledgeable about the local Market, as well as every real estate question/situation that arose throughout the process. I have both bought and sold a house with her and have worked with her for the last 5 years. My house went under contract for full asking price in 3 days. I would highly recommend her to any of my friends and family, and have done so with great success!'
  }]

const realtors = [{
  name: 'Joe Anselmo',
  image: 'assets/images/joe-cropped.jpg',
  class: 'joe'
},
  {
    name: 'Geni Donnelly',
    image: 'assets/images/geni-rs.jpg',
    class: 'geni-rs'
  },
  {
    name: 'Nina Abell',
    image: 'assets/images/nina.jpg',
    class: 'nina'
  },
  {
    name: 'Michelle Poe',
    image: 'assets/images/michelle-bio-2.jpg',
    class: 'michelle'
  }
]

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

        <div class='form-services-pg-div'>

          <div class='form'>

            <h2 class='headlines'>Get relief now</h2>
            <hr class='underline' />
            <p>If you are in financial trouble and are seeking more information about bankruptcy and how it might be able to help your situation, please fill out the form below with a little information about yourself and your case and I will reach out to you as soon as possible to discuss your situation further.</p>

            <div class='form-body'>
              <form id='form' class='topBefore' action='mailto:alex.r.wandres@gmail.com'>

                <div class='form-row' >
                  <input id='name' type='text' placeholder='NAME' />
                  <input id='email' type='text' placeholder='E-MAIL' />
                </div>

                <div class='form-row'>
                  <input id='name' type='text' placeholder='PHONE NUMBER' />
                  <input id='name' type='text' placeholder='LOCATION' />
                </div>
                <textarea id='message' type='text' placeholder='MESSAGE' />
                <input id='submit' type='submit' value='SUBMIT' />

              </form>

              <script src='js/index.js' />

            </div>
          </div>

        </div>



      </div>

    )
  }
}

export default Services
