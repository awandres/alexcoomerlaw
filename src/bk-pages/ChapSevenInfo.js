import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import BankruptcyMenu from "./BankruptcyMenu";
import ServicesForm from "../pages/ServicesForm";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();




class ChapterSevenInfo extends Component {

  constructor (props) {
    super(props)


  }

  componentDidMount () {
    const { fromServices } = this.props.location.state || {}
    console.log(fromServices)
    if (!fromServices) {
      window.scrollTo(0, 0)
    }

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

        <div class='bankruptcy-banner'>


          <div class='bankruptcy-hero'>
            <h1>BANKRUPTCY</h1>

          </div>
        </div>

        <div class='services-pg-content-container '>
          <div class='services-pg-div flex-col'>


            <div class='flex-row services-pg-col-container'>
              <div class='services-pg-col-1 flex-col'>
                <div>
                  <img class='services-pg-icon' src='assets/img/icons/contract-icon.png' /><h3>Chapter 7 Bankruptcy Petition Preparation and Filing</h3>
                  <h4>What is personal Chapter 7 Bankruptcy?</h4>
                                    <p>

                  In one relatively long sentence -  when an ordinary person’s debts become so unmanageable, their income cannot reasonably support their household expenses, and also pay back the debts, they can file for bankruptcy and the bankruptcy process helps manage the problem, ideally with the vast majority of unsecured debts being discharged.</p>

                  <p>The most common form of bankruptcy is what is known as a Chapter 7 “no-asset” bankruptcy.  In a no-asset bankruptcy, the person filing for bankruptcy does not own valuable enough property in order for the bankruptcy Trustee to seize the property, sell the property, and pay creditors.</p>

                  <p>In other words, in a no-asset case, a potential outcome is retention of property and a discharge of the vast majority of your unsecured debt.  Such an outcome of minimal property loss and maximum discharge of debt is the goal of a good bankruptcy attorney.  If such a goal cannot be achieved by filing for bankruptcy, there are other solutions available, such as debt negotiation, consolidation, or settlement.</p>

                  <p>In some situations, an individual, by law, will not qualify as a no-asset bankruptcy either because they make too much money, own too many valuable things, or for other reasons.  In those cases, the job of the bankruptcy attorney is slightly different, but the end outcome should be the same -- to preserve as much property as possible lawfully and discharge as much debt as possible lawfully under the bankruptcy laws.</p>

                  <p>For some people, it is legally impossible to file a Chapter 7 bankruptcy.  For example, the bankruptcy code only allows a person to file for bankruptcy once every eight years.  If someone filed for bankruptcy five years ago and is in need of bankruptcy protection again, Chapter 13 may be the solution.  There are many other reasons why someone may need to file under Chapter 13, in addition to timing considerations.</p>

                  <p>In conclusion, while the basic idea of bankruptcy is relatively straight forward, understanding and navigating the nuanced bankruptcy code is complex.  To fully understand the best strategies to protect you and your family from creditors, it is always wise to consider a consultation with a skilled bankruptcy attorney to discuss your personal situation.</p>


                  <h4>If I file for Bankruptcy, can I keep my home?</h4>

                  <p>Most of the time, yes.  All situations are unique and deserve independent analysis, however, whether you keep your home or not will depend mostly around how much you owe on the house and how much your house is worth.  The difference between what you owe on your house and what your house is worth is considered “equity” in the home.  </p>

                  <p>Under Arizona law, if the equity in your home is $150,000 or less, proper usage and application of the “homestead exemption” in a Chapter 7 bankruptcy case would provide an excellent avenue to protect your home.   Please note that you would still remain obligated to pay the mortgage on your house if you filed for Bankruptcy, but you certainly would not be forced to sell your house to pay unsecured creditors. </p>

                  <p>If the equity in your home exceeds $150,000, this situation is more difficult to explain, and the outcomes can be varied, depending on your personal financial situation, your desire, and nature of the debts.  Do not worry if the equity in your home does exceed $150,000.  With the help of a skilled bankruptcy attorney, there are still ways to structure a personal bankruptcy in order to preserve your primary family home.  </p>

                  <h4>What if my house is in the foreclosure process right now?</h4>

                  <p>If your home is presently in foreclosure, it is critical that you contact an attorney right away. </p>

                  <p>Let me repeat, if your house is presently in the foreclosure process, this is a big deal!  It is highly advised that you call an attorney who can take your call right away and assist.  </p>

                  <p>With respect to stopping a foreclosure through bankruptcy and saving your house, this is possible, but timing and immediate action is of the utmost importance.   </p>

                  <h4>Will I lose my retirement savings if I file for bankruptcy?</h4>

                  <p>Almost all retirement accounts (401ks, IRAs, etc.) are considered “exempt” property.  Exempt property cannot be seized to pay creditors.  So, short answer -- no.  </p>

                  <p>If you need to file for bankruptcy, it is your attorney’s job to help identify all exempt assets, similar to retirement accounts, and disclose these assets appropriately to the Bankruptcy Court and Trustee in your Petition filings to properly protect your exempt property from creditors.  </p>

                  <h4>Will I lose my car if I file for Bankruptcy?</h4>

                  <p>Maybe -- it depends on many factors.   For instance, how much is your car worth?  How much do you owe?  Are you married? Do you have any other vehicles that are fully paid off or nearly paid off? If so, how much are those vehicles worth?  Do you want to keep this particular car or would you be happy to get rid of the car to the lender for whatever reason?  Do you have multiple loans on the vehicle?  </p>

                  <p>In the event of financial problems, it is the job of your bankruptcy attorney to help you establish the best strategy for you, your family, and your given situation with respect to car ownership, the law, and life.</p>

                  <h4>What is secured and unsecured debt?</h4>

                  <p>The distinction between secured and unsecured debt is critical. The bankruptcy code treats secured debt differently than unsecured debt.  </p>

                  <p>Put simply, secured debt are types of loans that are actually backed or secured by something, usually the item you bought with the loan.  The most common examples of secured debt are home mortgages and car loans.  In most cases, secured debt cannot be discharged in bankruptcy.  There are, however, exceptions to secondary mortgages and secondary car loans, that can be discharged in bankruptcy under certain circumstances.  </p>

                  <p>Unsecured debt are loans or credit lines that are based on your personal guarantee.  These are debts not secured by real estate or the purchased item.  These consumer debts commonly include credit card debt, medical debt, past-due rent, and all other debts driven by your guarantee to pay.  Unsecured debts, depending on your income and assets, are the most likely form of debt to be discharged in bankruptcy.  </p>

                  <p>A bankruptcy lawyer helps properly identify all of your debts, establish what is legally dischargeable, what is not dischargeable, and come up with the best plan for you.  In some cases, in consultation with an attorney, pre-bankruptcy planning is extremely helpful in order to maximize the amount of discharge.  </p>

                  <h4>What about student loans?   </h4>

                  <p>Even though a student loan may seem like an unsecured loan because it is not secured by anything other than your promise to pay, the bankruptcy code treats student loans differently than other unsecured debt. Unfortunately, the current state of bankruptcy law as applied to student loans is not favorable to borrowers.  Most student loans are not dischargeable in bankruptcy.  There are limited exceptions, but, in general, it is very difficult to get student loans discharged through bankruptcy.  </p>

                  <p>If you are behind on student loans, there are other options besides bankruptcy, such as loan consolidation, forbearance on payments due to economic hardship, or applying to be placed into affordable income based repayment plans for Federal student loans.   </p>

                  <h4>Will a Chapter 7 Bankruptcy stop wage garnishments? </h4>

                  <p>Yes, in most situations.  Once you file for bankruptcy, an “automatic stay” will be put in place on all collection efforts by your creditors.  This includes wage garnishments.   In certain circumstances, it is possible to recover past wage garnishments that have already been seized by creditors through the bankruptcy process.</p>

                  <p>If your wages are being garnished presently, or your creditors are threatening to garnish your wages, and you are worried, please consider contacting a bankruptcy attorney who can help you right away.</p>

                  <h4>How long will the whole Bankruptcy process take?</h4>

                  <p>This depends on the type of bankruptcy you file, how quickly you acquire all the necessary documentation, how backed up the bankruptcy courts are due to COVID precautions, and a number of other factors.</p>

                  <p>Expect at least four to six months from start to finish for most Chapter 7 bankruptcies. </p>

                  <p>Under a very fast scenario, without any delays whatsoever, from start to finish on a Chapter 7 no-asset case, could be completed in as little as four to six weeks. </p>

                  <p>Chapter 13 bankruptcy proceedings are long and slow.  Chapter 13 bankruptcy proceedings can last between three and five years, sometimes longer.  </p>

                  <h4>What exactly is a Trustee?  </h4>

                  <p>When a Chapter 7 or Chapter 13 bankruptcy Petition is filed, a Trustee will be appointed to the case by the Bankruptcy Court.  </p>

                  <p>In a Chapter 7, the Trustee’s job is to assess the Bankruptcy Petition and establish if it is a no-asset bankruptcy or if there are assets that need to be seized.  If there are no assets, the Trustee’s job is fairly straightforward and the case will likely be finished within a matter of weeks. </p>

                  <p>If there are assets to be sold, the Trustee’s job is to acquire the assets, sell them (“liquidation”), and distribute the proceeds to creditors in accordance with bankruptcy law. Unfortunately, the timeline on this process is uncertain as it takes the Trustee an uncertain amount of time to complete the job. </p>

                  <p>In a Chapter 13 bankruptcy, the Trustee’s job is far more complex and the role of the Trustee will depend greatly on the specific situation of the person filing for bankruptcy and the creditors.  </p>

                  <h4>What if I have a lot of personal property?  Why can’t I give my property to a friend or family member?</h4>

                  <p>It is a very bad idea to transfer any property or interests in real estate to family members or friends if you are contemplating bankruptcy.  In some cases, such behavior can result in your potential bankruptcy case being dismissed and will delay any future bankruptcy filing for a period of years.  In other more serious cases, such behavior can result in possible criminal bankruptcy fraud charges. </p>

                  <p>It is the job of the resourceful Trustee, appointed by the Bankruptcy Court, to verify that non-exempt assets that could have been used to pay creditors were not illegally transferred, sold, or moved prior to filing for bankruptcy. </p>

                  <p>Bankruptcy is a process for the honest debtor.  Bankruptcy is not a process designed to hide, scam, cheat, or defraud your creditors. (Emphasis added).  </p>

                  <p>If you have moved or transferred property and are now nervous, there are potential solutions that a bankruptcy attorney can suggest.  It is not the end of the world if you think you made a mistake with respect to the transfer of property because a good bankruptcy attorney can help you navigate the process back. </p>
                </div>



              </div>

              <div class="services-pg-col-2">

<BankruptcyMenu>
</BankruptcyMenu>

              </div>
            </div>

          </div>
        </div>

        <ServicesForm />




      </div>

    )
  }
}

export default ChapterSevenInfo
