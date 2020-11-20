import React, { Component } from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import MediaQuery from 'react-responsive'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

import ChapterSeven from './pages/ChapterSevenBankruptcy'
import ChapterThirteen from './pages/ChapterThirteenBankruptcy'
import CreditorDefense from './pages/CreditorDefense'
import DebtNegotiation from './pages/DebtNegotiationAndSettlement'
import PreBankruptcy from './pages/PreBankruptcyPlanning'
import ProtectionFrom from './pages/ProtectionFromCreditors'
import StudentLoan from './pages/StudentLoanAdvisoryServices'

import ChapterSevenInfo from './bk-pages/ChapSevenInfo'
import ChapterThirteenInfo from './bk-pages/ChapThirteenInfo'
import PreBankruptcyInfo from './bk-pages/PreBankruptcyInfo'
import ProcessOfBankruptcy from './bk-pages/ProcessOfBankruptcy'

import Faqs from './pages/Faqs'
import LoanModification from './pages/LoanModificationAssistance'
import Payment from './pages/Payment'
import TheProcess from './pages/TheProcess'
import Bankruptcy from './Bankruptcy'

import Disclaimer from './Disclaimer'

import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleMenuClick () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  handleLinkClick () {
    this.setState({menuOpen: false})
  }

  render () {
    const styles =
      {
        container: {
          position: 'absolute',
          top: 0,
          height: '130px',
          right: 0,
          zIndex: '99',
          opacity: 0.9,
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'flex-end',
          background: 'rgba(247,202,153, .4)',
          width: '100%',
          color: 'white',
          fontFamily: 'Lobster',
          textAlign: 'right'
        },
        menuItem: {
          fontFamily: `'Open Sans', sans-serif`,
          fontSize: '1.4rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          textDecoration: 'none',
          textDecorationColor: 'white',
          color: this.state.hover ? 'gray' : '#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay: this.props.delay

        },
        menuContainer: {
          opacity: 0,
          animation: '1s appear forwards',
          paddingTop: '80px',
          animationDelay: this.props.delay
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay: this.props.delay

        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '80vh',
          filter: this.state.menuOpen ? 'blur(2px)' : null,
          transition: 'filter 0.5s ease'
        },
        logo: {
          margin: '0 auto',
          width: '70px',
          padding: '20px',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100
        }
      }
    const menu = ['Home', 'About', 'Services', 'FAQs', 'Bankruptcy']
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick() }}>{val}</MenuItem>)
    })

    return (
      <div className='main-div'>
        <MediaQuery maxDeviceWidth={768}>
          <HashRouter><NavLink to='/'><img style={styles.logo} src='assets/img/ACLAW_LOGO.png' /></NavLink></HashRouter>
          <div style={styles.container}>

            <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />

          </div>
          <Menu open={this.state.menuOpen}>
            <HashRouter>

              <div style={styles.menuContainer}>

                <NavLink style={{textDecoration:'none'}}to='/'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
          >
          Home
          </div></NavLink>

                <div style={styles.line} />

                <NavLink style={{textDecoration:'none'}}to='/about'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
    >
    About
    </div></NavLink>

                <div style={styles.line} />

                <NavLink style={{textDecoration:'none'}}to='/services'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
Services
</div></NavLink>

                <div style={styles.line} />

                <NavLink style={{textDecoration:'none'}}to='/services/FAQs'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
FAQs
</div></NavLink>

                <div style={styles.line} />

                <NavLink style={{textDecoration:'none'}}to='/bankruptcy/chapter-seven-bankruptcy-info'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
Bankruptcy
</div></NavLink>
                <div style={styles.line} />

                <NavLink style={{textDecoration:'none'}} to='/contact'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
Contact
</div></NavLink>
                <div style={styles.line} />

              </div>
            </HashRouter>
          </Menu>

          <HashRouter>
            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/services/chapter-7-bankruptcy' component={ChapterSeven} />
              <Route exact path='/services/chapter-13-bankruptcy' component={ChapterThirteen} />
              <Route exact path='/services/creditor-defense' component={CreditorDefense} />
              <Route exact path='/services/debt-negotiation-and-settlement' component={DebtNegotiation} />
              <Route exact path='/services/FAQs' component={Faqs} />
              <Route exact path='/services/loan-modification-assistance' component={LoanModification} />
              <Route exact path='/services/student-loan-advisory-services' component={StudentLoan} />

              <Route exact path='/services/payment' component={Payment} />
              <Route exact path='/services/pre-bankruptcy-planning' component={PreBankruptcy} />
              <Route exact path='/services/process-of-bankruptcy' component={TheProcess} />
              <Route exact path='/services/protection-from-creditors' component={ProtectionFrom} />
              <Route exact path='/disclaimer-and-privacy-policy' component={Disclaimer} />
              <Route exact path='/bankruptcy/chapter-seven-bankruptcy-info' component={ChapterSevenInfo} />
              <Route exact path='/bankruptcy/chapter-thirteen-bankruptcy-info' component={ChapterThirteenInfo} />
              <Route exact path='/bankruptcy/pre-bankruptcy-planning-info' component={PreBankruptcyInfo} />
              <Route exact path='/bankruptcy/the-process-of-bankruptcy' component={ProcessOfBankruptcy} />
              <Route exact path='/contact' component={Contact} />

            </div>
          </HashRouter>
        </MediaQuery>

        <MediaQuery minDeviceWidth={769}>
          <HashRouter>

            <div id='menu-container'>
              <MediaQuery minDeviceWidth={769}><NavLink exact to='/'><img id='logo' src='assets/img/ACLAW_LOGO.png' /></NavLink></MediaQuery>

              <div id='menu'>

                <div class='menu-contact flex-row'>

                  <a href='mailto:alexcoomer@alexcoomerlaw.com' ><img class='email-icon' src='assets/img/email.svg' /></a>
                  <a href='tel:520-372-2475'><img class='phone-icon' src='assets/img/phone-call.svg' /></a>
                  <a href='https://secure.lawpay.com/pages/alexcoomerlaw/operating' target='_blank'><h3 class='payment-header'>Make a Payment</h3></a>
                </div>
                <hr class='underline-header' />
                <div class='flex-row'>
                  <h1><NavLink exact to='/'>Home</NavLink></h1>
                  <h1 className='our-team'><NavLink to='/about'>About</NavLink></h1>
                  <h1 className='services'><NavLink to='/services'>Services</NavLink></h1>
                  <h1 className='services'><NavLink to='/bankruptcy/chapter-seven-bankruptcy-info'>Bankruptcy</NavLink></h1>

                  <h1 className='services'><NavLink to='/services/faqs'>FAQs</NavLink></h1>
                  <h1 className='services'><NavLink to='/contact'>Contact</NavLink></h1>

                </div>
              </div>
            </div>

            <div className='content'>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/services' component={Services} />
              <Route exact path='/services/chapter-7-bankruptcy' component={ChapterSeven} />
              <Route exact path='/services/chapter-13-bankruptcy' component={ChapterThirteen} />
              <Route exact path='/services/creditor-defense' component={CreditorDefense} />
              <Route exact path='/services/debt-negotiation-and-settlement' component={DebtNegotiation} />
              <Route exact path='/services/FAQs' component={Faqs} />
              <Route exact path='/services/loan-modification-assistance' component={LoanModification} />
              <Route exact path='/services/payment' component={Payment} />
              <Route exact path='/services/pre-bankruptcy-planning' component={PreBankruptcy} />
              <Route exact path='/services/process-of-bankruptcy' component={TheProcess} />
              <Route exact path='/services/protection-from-creditors' component={ProtectionFrom} />
              <Route exact path='/services/student-loan-advisory-services' component={StudentLoan} />

              <Route exact path='/disclaimer-and-privacy-policy' component={Disclaimer} />
              <Route exact path='/bankruptcy/chapter-seven-bankruptcy-info' component={ChapterSevenInfo} />
              <Route exact path='/bankruptcy/chapter-thirteen-bankruptcy-info' component={ChapterThirteenInfo} />
              <Route exact path='/bankruptcy/pre-bankruptcy-planning-info' component={PreBankruptcyInfo} />
              <Route exact path='/bankruptcy/the-process-of-bankruptcy' component={ProcessOfBankruptcy} />
              <Route exact path='/contact' component={Contact} />

            </div>
          </HashRouter>
        </MediaQuery>

      </div>

    )
  }

}

export default Main
