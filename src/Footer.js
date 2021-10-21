import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'



class ServicesMenu extends Component {

  componentDidMount () {
console.log(window.location.href)



  }

constructor(props) {
  super(props)
  this.checkActiveClass = this.checkActiveClass.bind(this)
}

checkActiveClass(url) {
  const cutUrl = window.location.href.substr(window.location.href.lastIndexOf("/"), window.location.href.length )

  console.log(cutUrl)
    if (cutUrl == url) {
      return true
    }
  }

  render () {


    return (


      <div class="disclaimer-div">

      <img src="assets/img/ACLAW_LOGO.png" />

      <div>

      <p>If requested to begin case preparation, attorney fees and filing fees must be paid before filing.</p>

      <p>Disclaimer: The information in this web site is not intended to provide legal advice or to create an attorney-client relationship; but is intended for general education and information purposes only. Laws change periodically, therefore the information in this site may not always be accurate. It is imperative that you seek legal counsel in order to determine your rights and obligations under the law and based upon your specific circumstances.</p>

      <p>Alex Coomer Law, PLLC is a debt relief agency and helps people file for bankruptcy under the Bankruptcy Code. The material and information contained on these pages and any pages linked to from these pages is intended to provide general information only and not legal advice. You should consult with an attorney licensed to practice in your jurisdiction before relying on any of the information presented here. You are advised that the acts of sending e-mail to or viewing or downloading information from this website does not constitute an attorney-client relationship.</p>

      <p>© Copyright 2020 - Alex Coomer Law, PLLC - Tucson Bankruptcy Attorney.</p>

       <Link exact to="/disclaimer-and-privacy-policy">Click here to read the full Disclaimer and Privacy Policy</Link>

      </div>
      </div>



    )
  }
}

export default ServicesMenu
