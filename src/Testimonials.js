import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import Social from './Social'

class Testimonials extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div id='body'>
        <div class='about-pg-banner'>

          <div class='testimonials-hero'>
            <h1>TESTIMONIALS</h1>

          </div>
        </div>

        <div class='about-pg-container'>
          <div class='about-pg-content'>
            <h3 class=''>Client Feedback</h3>

            <div class="testimonial-section">
            <p class="quote-p">"I utilized Alex to look into bankruptcy and other financial options to assist in resolving debt issues. Through the entire process I always felt Alex wanted to generate value for me. He was fair with pricing and did not generate work that did not net me value. This has not always been the case in my experience with other lawyers. He did small things that he didn't charge for, like reminding me of payments, giving me budget advice, and providing me recommendations to consult with my accountant. Alex would be my first choice for lawyer if I needed anything in his specialties.”  <br /><p class="align-right"><i class="align-right">- J.S.</i></p> </p>
            </div>

            <div class="testimonial-section">
            <p class="quote-p">"Alex is a fantastic person and extremely knowledgeable in helping me through my debt. He goes above and beyond what your typical lawyer does. I would recommend him to anyone who needs help and friendly advice through difficult times. Alex is getting me back on track to a much brighter financial future!”  <br /><p class="align-right"><i class="align-right">- J.L.</i></p> </p>
            </div>

            <div class="testimonial-section">
            <p class="quote-p">"I have to say! Even though I never got the chance to file bankruptcy (thank goodness) Alex has been the best attorney yet! He got rid of a debt I had that was almost 14,000$. I had a garnishment on my pay check for almost a year and we went a different route so that we wouldn’t have to file for bankruptcy and I got the letter in the mail that the debt is forgiven and it’s all thanks to Alex Coomer. I highly recommend him, great with people, super smart and seem to really know what he’s doing! I hope he does well in life! Keep up the good work Alex!”  <br /><p class="align-right"><i class="align-right">- J.C.</i></p> </p>
            </div>

            <div class="testimonial-section">
            <p class="quote-p">"Alex has been amazing with helping me and my mother through this difficult process. He’s always willing to take the time to address any questions or issues we might have. I would recommend his services to anyone whose small business is struggling financially, especially in these difficult times.”  <br /><p class="align-right"><i class="align-right">- R.G.</i></p> </p>
            </div>


          </div>
        </div>
        <Social />
      </div>

    )
  }
}

export default Testimonials
