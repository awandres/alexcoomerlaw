import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import Social from './Social'


class About extends Component {

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div id='body'>
        <div class='about-pg-banner'>

          <div class='services-hero'>
            <h1>ABOUT</h1>

          </div>
        </div>

        <div class='about-pg-container'>
          <div class='about-pg-content'>
            <h3 class=''>A Little Background Information on Alex Coomer:</h3>

            <img class='about-img' src='assets/img/alex-vacation.jpeg' /><p>Richard Alexander Coomer (Alex) was raised in Tucson, Arizona.  He is a member of the 2003 class of Salpointe Catholic High School.  He is a 2008 graduate of the University of Arizona.</p>

            <p>In 2008, at the start of the great recession, he struggled to find any sort of a job right out of school.  Instead, Alex ambitiously opened his own small business -- a restaurant in Picture Rocks, Arizona.  The build out process was extensive and expensive, yet, resulted in a functioning and operating restaurant.  Nevertheless, the economic reality of the time was not conducive to opening a restaurant and the business barely kept afloat.</p>

            <p>After nearly two years of restaurant operations, surviving on a month-to-month basis, Alex was able to sell the business and start to rebuild his own personal economic situation.  Small business ownership during a recession took a large financial toll on Alex, but through the grace of others and some hard work, he was able to barely avoid filing for bankruptcy.</p>

            <p>As a bankruptcy attorney today, this experience of running a nearly failed business during a recession is always on Alex’s mind.  He is sympathetic and empathetic to what it feels like as a small business owner waking up in the middle of night worrying about bills and the money you do not have, because he was there himself.</p>

            <p>After business ownership, Alex worked as a process server and legal courier before enrolling at the University of Arizona James E. Rogers College of Law.  In May of 2014, Alex graduated from Law School, passed the bar exam, and was admitted as a practicing attorney shortly thereafter.</p>

            <p>Alex’s clerked for Judge Carmine Cornelio (ret.) at the Pima County Superior Court. Afterwards, from 2015-2018, he practiced as a felony trial attorney at the Pima County Public Defender's Office.  As a public defender, Alex vigorously represented indigent individuals accused of crimes ranging from simple drug possession, through armed robbery, and murder.</p>

            <p>After leaving the Public Defender’s Office, he moved to Phnom Penh, Cambodia.  Along with his girlfriend at the time, and now wife, Alex taught geography and law to Cambodian students at American University of Phnom Penh.  Alex returned to the United States in the winter of 2019 and clerked for Judge Howard Fell at the Pima County Superior Court.</p>
            <div class='about-img-block'>
              <img class='dog-1-img' src='assets/img/alex-dog-1.jpeg' />
              <img class='bird-img' src='assets/img/alex-bird.jpeg' />
              <img class='dog-2-img' src='assets/img/alex-dog-2.jpeg' />

            </div>
            <p>In June of 2020, Alex opened his own solo practice law firm specializing in personal bankruptcies because the COVID pandemic changed our community and the world.  The sad unfolding reality of the COVID situation, and the uncertainty of the future, will drive many hard-working, well-intentioned, and honest people and business owners into financial problems.</p>

            <p>Alex’s solo practice is focused squarely on helping Arizonans understand how the Bankruptcy code may be helpful to reset their situation, find solutions, and create a path forward unburdened by creditors and collection agencies.  Alex is passionate about finding answers and being an ally to honest debtors to help find the path towards financial independence and freedom.</p>

            <p>When he is not working, Alex spends much of his free time gardening, watching sports (especially anything U of A related), listening to classical music, playing soccer, and spending as much time as possible with his two dogs, Frederick Chopin (Fred) and Charles IV (Charlie).  Alex enjoys playing chess in his spare time, is an avid hummingbird watcher and, as soon as it is safe to do so, intends to travel to new and exotic places.</p>

            <div class='lawyer-pic-block'>
              <img class='lawyer-about-pic' src='assets/img/alex4.jpg' />
              <div class="flex-col">
              <div class='quote-section-about'>
                <p class='quote-p'>“The federal system of bankruptcy is designed not only to distribute the property of the debtor, not by law exempted, fairly and equally among his creditors, but as a main purpose of the act, <strong>intends to aid the unfortunate debtor by giving him a fresh start in life, free from debts, except of a certain character,</strong> after the property which he owned at the time of bankruptcy has been administered for the benefit of creditors. Our decisions lay great stress upon this feature of the law—as one not only of private but of great public interest in that it secures to the unfortunate debtor, who surrenders his property for distribution, <strong>a new opportunity in life.</strong>”            <i>Stellwagen v. Clum, 245 U.S. 605 (1918).</i> </p>
              </div>
              <div class="awards">
              <h3>Admitted Jurisdictions and Memberships:</h3>

              <p>Admitted to Practice in the State of Arizona.</p>
              <p>Admitted to Practice in the United States District Court.</p>
              <p>Arizona Consumer Bankruptcy Counsel (ACBC), Member.</p>
              <p>Federal Bar Association (FBA), Member. </p>
              <p>Tucson Metro Soccer League (TMSL), Board Member (inactive). </p>

              <img src="assets/img/ACBC-logo.png" />
              </div>
              </div>

            </div>

          </div>

        </div>
        <Social />

      </div>


    )
  }
}

export default About
