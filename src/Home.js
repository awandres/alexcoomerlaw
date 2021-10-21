import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import Form from './Form'
import Social from './Social'

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

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = ({
      activeIndex: 0,
      activeRealtorIndex: 0,
      currentIndex: null,
      currentRealtorIndex: null,
      brightMls: 'https://www.brightmlshomes.com/capstar-properties/listing/listingsearch.aspx'
    })

    this.nextTestimonial = this.nextTestimonial.bind(this)
    this.nextRealtor = this.nextRealtor.bind(this)

    this.prevTestimonial = this.prevTestimonial.bind(this)
    this.prevRealtor = this.prevRealtor.bind(this)

    this.changeIframeStyling = this.changeIframeStyling.bind(this)
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    console.log(this.state.brightMls)
  }

  nextTestimonial () {
    console.log('initial index = ' + this.state.activeIndex)
    currentIndex = this.state.activeIndex
    if (currentIndex == 5) {
      this.setState({activeIndex: 0})
    } else {
      this.setState({activeIndex: currentIndex + 1})
      console.log('new index = ' + this.state.activeIndex)
    }
  }

  nextRealtor () {
    console.log('initial realtor index = ' + this.state.activeRealtorIndex)
    currentRealtorIndex = this.state.activeRealtorIndex
    if (currentRealtorIndex == 3) {
      this.setState({activeRealtorIndex: 0})
    } else {
      this.setState({activeRealtorIndex: currentRealtorIndex + 1})
      console.log('new realtor index = ' + this.state.activeRealtorIndex)
    }
  }

  prevTestimonial () {
    console.log('initial index = ' + this.state.activeIndex)
    currentIndex = this.state.activeIndex
    if (currentIndex == 0) {
      this.setState({activeIndex: 3})
    } else {
      this.setState({activeIndex: currentIndex - 1})
      console.log('new index = ' + this.state.activeIndex)
    }
  }

  prevRealtor () {
    console.log('initial realtor index = ' + this.state.activeRealtorIndex)
    currentRealtorIndex = this.state.activeRealtorIndex
    if (currentRealtorIndex == 0) {
      this.setState({activeRealtorIndex: 5})
    } else {
      this.setState({activeRealtorIndex: currentRealtorIndex - 1})
      console.log('new realtor index = ' + this.state.activeRealtorIndex)
    }
  }

  changeIframeStyling () {
    var iframe = document.getElementsByTagName('iframe')[0]
    console.log(iframe)
    iframe.addEventListener('load', function () {
      console.log('iframe is loaded')
      document.getElementById('customerlogin-area').style.display = 'none'
      window.frames[0].document.body.style.backgroundColor = 'black'
    })
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

        <div id='hero-banner'>


          <div id='hero-header'>
            <h1>SOLUTIONS START HERE</h1>
            <Link exact to="/contact"><div class='btn'>
              <h2>GET A CONSULTATION</h2>
            </div></Link>
          </div>
        </div>

        <div class='content-container '>
          <div class='content-div flex-row '>

            <div class='text-div'>
              <h2 class='headlines'>Take control of your debt.</h2>
              <hr class='underline' />
              <p>Alex Coomer Law is here to serve the Southern Arizona and Tucson community.  Alex Coomer Law proudly helps individuals obtain debt relief and seek protection under the bankruptcy code.<br /><br />

It is intimidating and difficult to begin the legal process with many large firms.  With Alex Coomer Law, you will find the process understandable and achievable.
</p>
            </div>

            <img src='assets/img/handshake.jpg' />

          </div>
        </div>

<Form />

<Social />

        <div class='services-div flex-col'>

          <div class='services-intro'>
            <h1 class='headlines'>HOW WE HELP</h1>

            <p><img class="acbc-logo" src="assets/img/ACBC-logo.png" />Alex Coomer Law, PLLC offers a wide range of services for average people burdened by debt</p>

            <p>These services include:</p>

          </div>
          <div class='flex-row services-col-container'>
            <div class='services-col-1 flex-col'>
              <div>
                <img class="services-icon" src="assets/img/icons/contract-icon.png" /><h3>Chapter 7 Bankruptcy Petition Preparation and Filing:</h3>

                <p>For more information on Chapter 7 Bankruptcy services, please visit our <Link exact to="/bankruptcy/chapter-seven-bankruptcy-info">bankruptcy page</Link></p>

                <Link class="generic-button" exact to={{
                  pathname:"/bankruptcy/chapter-seven-bankruptcy-info",
                  state: {
                    fromServices: false
                  }
                }}>
                  <div class="generic-button">More Info</div></Link>
              </div>



              <div>
                <img class="services-icon" src="assets/img/icons/umbrella-icon.png" /><h3>Pre-Bankruptcy Planning:</h3>

                <p>In some cases, you may meet the legal requirements to file for bankruptcy today, but it is either not strategically right to file for bankruptcy just yet or there could be other reasons to delay filing.  Pre-Bankruptcy planning and assistance helps you understand your financial situation in order to have a plan in place to protect as much property as lawfully possible from creditors and maximize your discharge, in the event you have to file for bankruptcy.</p>

                <Link class="generic-button" exact to={{
                  pathname:"/bankruptcy/pre-bankruptcy-planning-info",
                  state: {
                    fromServices: false
                  }
                }}>                  <div class="generic-button">More Info</div></Link>
              </div>

              <div>
              <img class="services-icon" src="assets/img/icons/hand-scale-icon.png" /><h3>Loan Modification Assistance:</h3>

              <p>Establishing secured loans and loan modifications can be difficult and complicated to navigate on your own.  An attorney on your team during your secured loan application or loan modification process will help you understand complex property law issues and also protect your financial future by advising against certain pitfalls and predatory loan features.</p>
              <Link class="generic-button" exact to={{
                pathname:"/services/loan-modification-assistance",
                state: {
                  fromServices: false
                }
              }}>
                <div class="generic-button">More Info</div></Link>
                    </div>


                    <div>
                    <img class='services-icon' src='assets/img/icons/creditcard.png' /><h3>Student Loan Advisory Services:</h3>

                    <p>The law is an ever-moving target, especially Bankruptcy law and how student loans are viewed.  Depending on your situation, whether you have government or private student loans, and your personal socio-economic situation, there are often viable solutions for individuals drowning under excessive student loans and egregious monthly payments.  There is an old saying -- You don’t know what you don’t know until you know it.  With respect to excessive student loans, student loan advisory support with an attorney may open up various options you never knew existed.  </p>
                      <Link class="generic-button" exact to={{
                        pathname:"/services/student-loan-advisory-services",
                        state: {
                          fromServices: false
                        }
                      }}>                  <div class="generic-button">More Info</div></Link>
                    </div>
            </div>

            <div class='services-col-2 flex-col'>

              <div>
                <img class="services-icon" src="assets/img/icons/scale-icon.png" /><h3>Debt Negotiation and Settlement:</h3>

                <p>Bankruptcy is not right for all people.  In some situations, it is possible to negotiate various debts down or structure a new payment plan that works for you.  A bankruptcy lawyer, fighting for you and looking out for your best interest, can be a very valuable tool to level the playing field during debt negotiations.</p>

                <Link class="generic-button" exact to={{
                  pathname:"/services/debt-negotiation-and-settlement",
                  state: {
                    fromServices: false
                  }
                }}>                   <div class="generic-button">More Info</div></Link>
              </div>

              <div>
                <img class="services-icon" src="assets/img/icons/money-shield.png" /><h3>Protection from Creditors:</h3>

                <p>Do you hate receiving calls from creditors and collection companies?  Did you know you can hire an attorney to handle these calls for you as your agent?   If you suffer extreme anxiety or distress interacting with collection agencies and desire an attorney to handle and mediate collection activity, a protection from creditors service may be right for you.</p>
                <Link class="generic-button" exact to={{
                  pathname:"/services/protection-from-creditors",
                  state: {
                    fromServices: false
                  }
                }}>                  <div class="generic-button">More Info</div></Link>
              </div>

              <div>
                <img class="services-icon" src="assets/img/icons/courthouse.png" /><h3>Creditor Defense:</h3>

                <p>Sometimes a creditor goes after the wrong person, makes a mistake, or attempts to collect on a debt that is too old.  In those situations, when there is a strong defense against the debt, your best option oftentimes is to answer and defeat the claim of the creditor.</p>
                <Link class="generic-button" exact to={{
                  pathname:"/services/creditor-defense",
                  state: {
                    fromServices: false
                  }
                }}>                  <div class="generic-button">More Info</div></Link>
                </div>

            </div>
          </div>
        </div>


<div class="quote-section">
<p class="quote-p">“The federal system of bankruptcy is designed not only to distribute the property of the debtor, not by law exempted, fairly and equally among his creditors, but as a main purpose of the act, <strong>intends to aid the unfortunate debtor by giving him a fresh start in life, free from debts, except of a certain character,</strong> after the property which he owned at the time of bankruptcy has been administered for the benefit of creditors. Our decisions lay great stress upon this feature of the law—as one not only of private but of great public interest in that it secures to the unfortunate debtor, who surrenders his property for distribution, <strong>a new opportunity in life.</strong>”  <i>Stellwagen v. Clum, 245 U.S. 605 (1918).</i> </p>
</div>

<div class="about-container">
  <div class="about-section flex-row">

  <div class="flex-col">
    <img id="profile" src="assets/img/alex1.jpg" />
    <h2 class="bio-info">R. Alexander Coomer, Attorney at Law</h2>
    <img class="acbc-logo" src="assets/img/ACBC-logo.png" />
</div>
    <div class="flex-col">
      <h2 class="headlines">A Lawyer Who Listens</h2>
      <hr class='underline' />

      <p>Alex is in this for the right reasons. He knows the community and he is here to help.</p>

      <p>After graduating from the University of Arizona in 2008 at the start of the great recession, Alex struggled to find any sort of a job right out of school.  Instead, Alex ambitiously opened his own small business -- a restaurant in Picture Rocks, Arizona.  The build out process was extensive and expensive, yet, resulted in a functioning and operating restaurant.  Nevertheless, the economic reality of the time was not conducive to opening a restaurant and the business barely kept afloat.  </p>

      <p>After nearly two years of restaurant operations, surviving on a month-to-month basis, Alex was able to sell the business and start to rebuild his own personal economic situation.  Small business ownership during a recession took a large financial toll on Alex, but through the grace of others and some hard work, he was able to barely avoid filing for bankruptcy.  </p>

            <p>As a bankruptcy attorney today, this experience of running a nearly failed business during a recession is always on Alex’s mind.  He is sympathetic and empathetic to what it feels like as a small business owner waking up in the middle of night worrying about bills and the money you do not have, because he was there himself. </p>

      <p>In June of 2020, Alex opened his own solo practice law firm specializing in personal bankruptcies because the COVID pandemic changed our community and the world.  The sad unfolding reality of the COVID situation, and the uncertainty of the future, will drive many hard-working, well-intentioned, and honest people and business owners into financial problems.  </p>

<p>Alex’s solo practice is focused squarely on helping Arizonans understand how the Bankruptcy code may be helpful to reset their situation, find solutions, and create a path forward unburdened by creditors and collection agencies.  Alex is passionate about finding answers and being an ally to honest debtors to help find the path towards financial independence and freedom. </p>



      </div>
    </div>

</div>




      </div>

    )
  }
}

export default Home
