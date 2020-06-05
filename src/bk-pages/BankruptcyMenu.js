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
              <Link class={ this.checkActiveClass('/chapter-seven-bankruptcy-info') ? 'active-service' : ''} exact to={{
                pathname:"/bankruptcy/chapter-seven-bankruptcy-info",
                state: {
                  fromServices: true
                }
              }}><h2>Chapter 7 Bankruptcy</h2></Link>

              <Link class={ this.checkActiveClass('/chapter-thirteen-bankruptcy-info') ? 'active-service' : ''} exact to={{
                pathname:"/bankruptcy/chapter-thirteen-bankruptcy-info",
                state: {
                  fromServices: true
                }
              }}><h2>Chapter 13 Bankruptcy</h2></Link>

              <Link class={ this.checkActiveClass('/pre-bankruptcy-planning-info') ? 'active-service' : ''} exact to={{
                pathname:"/bankruptcy/pre-bankruptcy-planning-info",
                state: {
                  fromServices: true
                }
              }}><h2>Pre-Bankruptcy Planning</h2></Link>


              <Link class={ this.checkActiveClass('/the-process-of-bankruptcy') ? 'active-service' : '' } exact to={{
                pathname:"/bankruptcy/the-process-of-bankruptcy",
                state: {
                  fromServices: true
                }
              }}><h2>Process of Bankruptcy</h2></Link>
              </div>



    )
  }
}

export default ServicesMenu
