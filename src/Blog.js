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
<div class="blog-container">
        <div class='about-pg-container'>
          <div class='blog-pg-content'>


          <div class="blog-post-list-item">
          <h2 class="headlines">What Should we do about the student loan crisis?</h2>
          <p class="bold">November 28, 2020</p>

          <p> The current dollar figures of consumer debt held by Americans are staggering.   Approximately 42 million people hold $1.6 Trillion in student loan debt.  To compare, the country as a whole, 320 million + people, holds approximately $1 Trillion in credit card debt. </p>
          <Link exact to="/blog/posts/what-to-do-about-the-student-loan-crisis"><p>Click Here to Read Full Post</p></Link>

          </div>

          <hr class="blog-hr" />

            <div class="blog-post-list-item">
              <h2 class="headlines">When Should I file for Bankruptcy?</h2>
              <p class="bold">November 24, 2020</p>

              <p>If you are thinking about filing for bankruptcy, a critical factor is to decide when you actually file the case.  In other words, if you choose to file for bankruptcy, you must establish the optimal date to file the case to obtain the greatest relief in terms of the largest discharge with incurring the least risk of anything going wrong.  The fact of the matter is that bankruptcy law is nuanced and timing considerations are baked into and throughout the code.  Timing issues create pitfalls if you don’t know what to look out for.  It takes awareness of these timing issues and careful planning to increase the value and chance of success of any bankruptcy petition.</p>
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
