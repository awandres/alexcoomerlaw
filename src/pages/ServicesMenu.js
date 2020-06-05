import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import ServicesForm from "../pages/ServicesForm";



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


              <div>
              <Link class={ this.checkActiveClass('/chapter-7-bankruptcy') ? 'active-service' : ''} exact to={{
                pathname:"/services/chapter-7-bankruptcy",
                state: {
                  fromServices: true
                }
              }}><h2>Chapter 7 Bankruptcy</h2></Link>

              <Link class={ this.checkActiveClass('/chapter-13-bankruptcy') ? 'active-service' : ''} exact to={{
                pathname:"/services/chapter-13-bankruptcy",
                state: {
                  fromServices: true
                }
              }}><h2>Chapter 13 Bankruptcy</h2></Link>

              <Link class={ this.checkActiveClass('/pre-bankruptcy-planning') ? 'active-service' : ''} exact to={{
                pathname:"/services/pre-bankruptcy-planning",
                state: {
                  fromServices: true
                }
              }}><h2>Pre-Bankruptcy Planning</h2></Link>

              <Link class={ this.checkActiveClass('/loan-modification-assistance') ? 'active-service' : '' } exact to={{
                pathname:"/services/loan-modification-assistance",
                state: {
                  fromServices: true
                }
              }}><h2>Loan Modification Assistance</h2></Link>

              <Link class={ this.checkActiveClass('/debt-negotiation-and-settlement') ? 'active-service' : '' } exact to={{
                pathname:"/services/debt-negotiation-and-settlement",
                state: {
                  fromServices: true
                }
              }}><h2>Debt Negotiation and Settlement</h2></Link>

              <Link class={ this.checkActiveClass('/protection-from-creditors') ? 'active-service' : '' } exact to={{
                pathname:"/services/protection-from-creditors",
                state: {
                  fromServices: true
                }
              }}><h2>Protection from Creditors</h2></Link>

              <Link class={ this.checkActiveClass('/creditor-defense') ? 'active-service' : '' } exact to={{
                pathname:"/services/creditor-defense",
                state: {
                  fromServices: true
                }
              }}><h2>Creditor Defense</h2></Link>

              <Link class={ this.checkActiveClass('/FAQs') ? 'active-service' : '' } exact to={{
                pathname:"/services/FAQs",
                state: {
                  fromServices: true
                }
              }}><h2>FAQs</h2></Link>

              <Link class={ this.checkActiveClass('/payment') ? 'active-service' : '' } exact to={{
                pathname:"/services/payment",
                state: {
                  fromServices: true
                }
              }}><h2>Payment</h2></Link>

              <Link class={ this.checkActiveClass('/process-of-bankruptcy') ? 'active-service' : '' } exact to={{
                pathname:"/services/process-of-bankruptcy",
                state: {
                  fromServices: true
                }
              }}><h2>Process of Bankruptcy</h2></Link>
              </div>



    )
  }
}

export default ServicesMenu
