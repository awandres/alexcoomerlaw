import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'

class Blog extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div id='body'>

      <div class='blog-pg-banner'>

        <div class='blog-hero'>
          <h1>BLOG</h1>

        </div>
      </div>
<div class="blog-container">
        <div class='about-pg-container'>
          <div class='blog-pg-content blog-pg-content-home'>


          <div class="blog-post-list-item">
          <h2 class="headlines">What Should we do about the student loan crisis?</h2>
          <p class="bold">November 28, 2020</p>

          <p>A student loan debt crisis is looming.  Many variations of debt forgiveness have been proposed as solutions to this problem, but debt forgiveness may not be the best choice.  Instead, this article explores why a combination of reform to student loan interest rates and modification of the bankruptcy code to simplify the discharge of student loans may be a better and more equitable solution.  </p>
          <Link exact to="/blog/posts/what-to-do-about-the-student-loan-crisis"><p>Click Here to Read Full Post</p></Link>

          </div>

          <hr class="blog-hr" />

            <div class="blog-post-list-item">
              <h2 class="headlines">When Should I file for Bankruptcy?</h2>
              <p class="bold">November 24, 2020</p>

              <p>If you are thinking about filing for bankruptcy, one of the very first things to decide is when you actually should file the case. The difference between a properly timed bankruptcy filing and an ill-timed filing is money in your pocket.  This article provides five important timing considerations you should think about carefully before filing a bankruptcy case.  </p>
              <Link exact to="/blog/posts/when-should-I-file-for-bankruptcy"><p>Click Here to Read Full Post</p></Link>
            </div>




          </div>

        </div>
        </div>
      </div>

    )
  }
}

export default Blog
