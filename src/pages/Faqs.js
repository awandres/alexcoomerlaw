import React, { Component } from 'react'
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ServicesForm from "../pages/ServicesForm";
import Social from '../Social'

class Faqs extends Component {
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

        <div class='faq-banner'>


          <div class='faq-hero'>
            <h1>FAQs</h1>

          </div>
        </div>

        <div class='services-pg-content-container '>
          <div class='services-pg-div flex-col'>

            <div class='flex-row services-pg-col-container'>
              <div class='faq-pg-col-1 flex-col'>

                <div >
                  <img class='services-pg-icon' src='assets/img/icons/courthouse.png' /><h3>FAQs</h3>

                  <div id='top' class='faq-container flex-row'>
                    <div class='faq-col-1 flex-col'>
                      <AnchorLink href='#faq1'><h5>What is personal Chapter 7 Bankruptcy?</h5></AnchorLink>
                      <AnchorLink href='#faq2'><h5>If I file for Bankruptcy, can I keep my home?</h5></AnchorLink>
                      <AnchorLink href='#faq3'><h5>What if my house is in the foreclosure process right now?</h5></AnchorLink>
                      <AnchorLink href='#faq4'><h5>Will I lose my retirement savings if I file for bankruptcy?</h5></AnchorLink>
                      <AnchorLink href='#faq5'><h5>Will I lose my car if I file for Bankruptcy?</h5></AnchorLink>
                      <AnchorLink href='#faq6'><h5>What is secured and unsecured debt?</h5></AnchorLink>
                      <AnchorLink href='#faq21'><h5>What does it mean for debt to be too old? </h5></AnchorLink>
                      <AnchorLink href='#faq22'><h5>What other possible defenses to debt lawsuits are there?  </h5></AnchorLink>

                      <AnchorLink href='#faq7'><h5>What about student loans?            </h5></AnchorLink>
                      <AnchorLink href='#faq8'><h5>Will a Chapter 7 Bankruptcy stop wage garnishments? </h5></AnchorLink>
                      <AnchorLink href='#faq9'><h5>How long will the whole Bankruptcy process take?</h5></AnchorLink>
                      <AnchorLink href='#faq20'><h5>I’m drowning in Student Loan debt.  Can you explain in a little more detail about the student loan discharge process in bankruptcy? </h5></AnchorLink>
                    </div>

                    <div class='faq-col-2 flex-col'>
                    <AnchorLink href='#faq23'><h5>Can you please explain pre-bankruptcy planning in more detail and why this service is valuable to me?  </h5></AnchorLink>
                    <AnchorLink href='#faq24'><h5>Won’t Pre-Bankruptcy Planning slow down my filing?   </h5></AnchorLink>
                    <AnchorLink href='#faq25'><h5>Is Pre-Bankruptcy Planning expensive?  </h5></AnchorLink>

                      <AnchorLink href='#faq10'><h5>What exactly is a Trustee? </h5></AnchorLink>
                      <AnchorLink href='#faq11'><h5>What if I have a lot of personal property?  Why can’t I give my property to a friend or family member?</h5></AnchorLink>
                      <AnchorLink href='#faq12'><h5>Why are Bankruptcy lawyers helpful? </h5></AnchorLink>
                      <AnchorLink href='#faq26'><h5>I’ve talked to several bankruptcy attorneys, but I do not know who I should hire. Should I just hire the attorney who quoted me the cheapest fee? Are bankruptcy attorneys all the same?</h5></AnchorLink>

                      <AnchorLink href='#faq13'><h5>How much do your bankruptcy services cost? </h5></AnchorLink>
                      <AnchorLink href='#faq14'><h5>Do you work on an hourly rate?</h5></AnchorLink>
                      <AnchorLink href='#faq15'><h5>Do you accept credit cards?</h5></AnchorLink>
                      <AnchorLink href='#faq16'><h5>Do you take contingency based personal injury cases? </h5></AnchorLink>
                      <AnchorLink href='#faq17'><h5>Do you take criminal cases?</h5></AnchorLink>
                      <AnchorLink href='#faq18'><h5>Do you take divorce or family law cases?</h5></AnchorLink>
                      <AnchorLink href='#faq19'><h5>Can you take my bankruptcy case if I live in Maricopa County? </h5></AnchorLink>

                    </div>
                  </div>
                <div class="mobile-faq-content">
                  <h4 id='what-is-personal-chapter-7-bankruptcy'>What is personal Chapter 7 Bankruptcy?</h4>

                  <p>In one relatively long sentence -  when an ordinary person’s debts become so unmanageable, their income cannot reasonably support their household expenses, and also pay back the debts, they can file for bankruptcy and the bankruptcy process helps manage the problem, ideally with the vast majority of unsecured debts being discharged.            </p>

                  <p>The most common form of bankruptcy is what is known as a Chapter 7 “no-asset” bankruptcy.  In a no-asset bankruptcy, the person filing for bankruptcy does not own valuable enough property in order for the bankruptcy Trustee to seize the property, sell the property, and pay creditors. </p>

                  <p>In other words, in a no-asset case, a potential outcome is retention of property and a discharge of the vast majority of your unsecured debt.  Such an outcome of minimal property loss and maximum discharge of debt is the goal of a good bankruptcy attorney.  If such a goal cannot be achieved by filing for bankruptcy, there are other solutions available, such as debt negotiation, consolidation, or settlement. </p>

                  <p>In some situations, an individual, by law, will not qualify as a no-asset bankruptcy either because they make too much money, own too many valuable things, or for other reasons.  In those cases, the job of the bankruptcy attorney is slightly different, but the end outcome should be the same -- to preserve as much property as possible lawfully and discharge as much debt as possible lawfully under the bankruptcy laws. </p>

                  <p>For some people, it is legally impossible to file a Chapter 7 bankruptcy.  For example, the bankruptcy code only allows a person to file for bankruptcy once every eight years.  If someone filed for bankruptcy five years ago and is in need of bankruptcy protection again, Chapter 13 may be the solution.  There are many other reasons why someone may need to file under Chapter 13, in addition to timing considerations.            </p>

                  <p>In conclusion, while the basic idea of bankruptcy is relatively straight forward, understanding and navigating the nuanced bankruptcy code is complex.  To fully understand the best strategies to protect you and your family from creditors, it is always wise to consider a consultation with a skilled bankruptcy attorney to discuss your personal situation.</p>
                  <p class="back-to-top"><AnchorLink style={{zIndex:'9999'}} href='#top'>Back to Top ^ </AnchorLink></p>
                  <h4 id='faq2'>If I file for Bankruptcy, can I keep my home?</h4>

                  <p>Most of the time, yes.  All situations are unique and deserve independent analysis, however, whether you keep your home or not will depend mostly around how much you owe on the house and how much your house is worth.  The difference between what you owe on your house and what your house is worth is considered “equity” in the home. </p>

                  <p>Under Arizona law, if the equity in your home is $150,000 or less, proper usage and application of the “homestead exemption” in a Chapter 7 bankruptcy case would provide an excellent avenue to protect your home.   Please note that you would still remain obligated to pay the mortgage on your house if you filed for Bankruptcy, but you certainly would not be forced to sell your house to pay unsecured creditors.            </p>

                  <p>If the equity in your home exceeds $150,000, this situation is more difficult to explain, and the outcomes can be varied, depending on your personal financial situation, your desire, and nature of the debts.  Do not worry if the equity in your home does exceed $150,000.  With the help of a skilled bankruptcy attorney, there are still ways to structure a personal bankruptcy in order to preserve your primary family home.            </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq3'>What if my house is in the foreclosure process right now?</h4>

                  <p>If your home is presently in foreclosure, it is critical that you contact an attorney right away.            </p>

                  <p>Let me repeat, if your house is presently in the foreclosure process, this is a big deal!  It is highly advised that you call an attorney who can take your call right away and assist.            </p>

                  <p>With respect to stopping a foreclosure through bankruptcy and saving your house, this is possible, but timing and immediate action is of the utmost importance.             </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq4'>Will I lose my retirement savings if I file for bankruptcy?</h4>

                  <p>Almost all retirement accounts (401ks, IRAs, etc.) are considered “exempt” property.  Exempt property cannot be seized to pay creditors.  So, short answer -- no.            </p>

                  <p>If you need to file for bankruptcy, it is your attorney’s job to help identify all exempt assets, similar to retirement accounts, and disclose these assets appropriately to the Bankruptcy Court and Trustee in your Petition filings to properly protect your exempt property from creditors.            </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq5'>Will I lose my car if I file for Bankruptcy?</h4>

                  <p>Maybe -- it depends on many factors.   For instance, how much is your car worth?  How much do you owe?  Are you married? Do you have any other vehicles that are fully paid off or nearly paid off? If so, how much are those vehicles worth?  Do you want to keep this particular car or would you be happy to get rid of the car to the lender for whatever reason?  Do you have multiple loans on the vehicle? </p>

                  <p>In the event of financial problems, it is the job of your bankruptcy attorney to help you establish the best strategy for you, your family, and your given situation with respect to car ownership, the law, and life. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq6'>What is secured and unsecured debt?</h4>

                  <p>The distinction between secured and unsecured debt is critical. The bankruptcy code treats secured debt differently than unsecured debt.            </p>

                  <p>Put simply, secured debt are types of loans that are actually backed or secured by something, usually the item you bought with the loan.  The most common examples of secured debt are home mortgages and car loans.  In most cases, secured debt cannot be discharged in bankruptcy.  There are, however, exceptions to secondary mortgages and secondary car loans, that can be discharged in bankruptcy under certain circumstances. </p>

                  <p>Unsecured debt are loans or credit lines that are based on your personal guarantee.  These are debts not secured by real estate or the purchased item.  These consumer debts commonly include credit card debt, medical debt, past-due rent, and all other debts driven by your guarantee to pay.  Unsecured debts, depending on your income and assets, are the most likely form of debt to be discharged in bankruptcy. </p>

                  <p>A bankruptcy lawyer helps properly identify all of your debts, establish what is legally dischargeable, what is not dischargeable, and come up with the best plan for you.  In some cases, in consultation with an attorney, pre-bankruptcy planning is extremely helpful in order to maximize the amount of discharge. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id="faq21">What does it mean for debt to be too old?</h4>

<p>Debt being “too old” is a way to talk about the Statute of Limitations to bring a breach of contract lawsuit against you.  Put another way, debt is “too old” if the time has passed for the creditor to bring a valid legal claim.  </p>

<p>For example, in Arizona, a verbal contract or “open account” has a Statute of Limitation of three years from when the cause of action occurred.  The most common “open account” that people encounter in day-to-day life is emergency room medical debt. </p>

<p>ARS § 12-543 (oral contracts) → <a href="https://www.azleg.gov/ars/12/00543.htm" target="blank">https://www.azleg.gov/ars/12/00543.htm</a></p>

<p>A written contract in Arizona maintains a Statute of Limitation of six years from when the cause of action occurred.  This includes credit card debt.  Credit card debt that has been sold onto many collection firms for a number of years, after the card went into default for several years, is an example of when debt may become too old to bring a valid lawsuit against you.  </p>

<p>ARS § 12-548 (written contracts) → <a href="https://www.azleg.gov/ars/12/00548.htm" target="blank">https://www.azleg.gov/ars/12/00548.htm</a> </p>

<p>Please Note --  It is necessary to consult with a licenced attorney when calculating the Statute of Limitations of any given claim or cause of action.  While the basics on the surface seem simple, there are also complex, nuanced, and detailed aspects of calculating Statutes of Limitations for every specific case that only an attorney can fully assess. </p>

<p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

<h4 id="faq22">What other possible defenses to debt lawsuits are there?</h4>

<p>In some rare cases, you can challenge whether you were served with legal documents correctly.</p>

<p>Service of Process Rule 4.1 of the Arizona Rules of Civil Procedure:</p>

<p><a href="https://govt.westlaw.com/azrules/Document/N96ABD6F086DC11E699A4BB097EBD55F8?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)&bhcp=1" target="_blank">https://govt.westlaw.com/azrules/Document/N96ABD6F086DC11E699A4BB097EBD55F8?viewType=FullText&originationContext=documenttoc&transitionType=CategoryPageItem&contextData=(sc.Default)&bhcp=1</a></p>

<p>On occasion, you may also be able to challenge whether a debt-buying firm actually has the proper paperwork and legal “standing” to sue you.  You must answer and respond to the creditors lawsuit if you think this defense applies to you.</p>

<p>Another example of valid debt defense is when you are sued by a credit card company after being the victim of criminal identity theft or fraud.  In such situations, you do NOT want to admit responsibility to these charges and must present a timely defense with evidence in Court that you never authorized the charges.</p>


                  <h4 id='faq7'>What about student loans?            </h4>

                  <p>Even though a student loan may seem like an unsecured loan because it is not secured by anything other than your promise to pay, the bankruptcy code treats student loans differently than other unsecured debt. Unfortunately, the current state of bankruptcy law as applied to student loans is not favorable to borrowers.  Most student loans are not dischargeable in bankruptcy.  There are limited exceptions, but, in general, it is very difficult to get student loans discharged through bankruptcy.            </p>

                  <p>If you are behind on student loans, there are other options besides bankruptcy, such as loan consolidation, forbearance on payments due to economic hardship, or applying to be placed into affordable income based repayment plans for Federal student loans. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq8'>Will a Chapter 7 Bankruptcy stop wage garnishments? </h4>

                  <p>Yes, in most situations.  Once you file for bankruptcy, an “automatic stay” will be put in place on all collection efforts by your creditors.  This includes wage garnishments.   In certain circumstances, it is possible to recover past wage garnishments that have already been seized by creditors through the bankruptcy process. </p>

                  <p>If your wages are being garnished presently, or your creditors are threatening to garnish your wages, and you are worried, please consider contacting a bankruptcy attorney who can help you right away.            </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq9'>How long will the whole Bankruptcy process take?</h4>

                  <p>This depends on the type of bankruptcy you file, how quickly you acquire all the necessary documentation, how backed up the bankruptcy courts are due to COVID precautions, and a number of other factors.            </p>

                  <p>Expect at least four to six months from start to finish for most Chapter 7 bankruptcies. </p>

                  <p>Under a very fast scenario, without any delays whatsoever, from start to finish on a Chapter 7 no-asset case, could be completed in as little as four to six weeks. </p>

                  <p>Chapter 13 bankruptcy proceedings are long and slow.  Chapter 13 bankruptcy proceedings can last between three and five years, sometimes longer. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq20'>I’m drowning in Student Loan debt.  Can you explain in a little more detail about the student loan discharge process in bankruptcy?</h4>

                  <p>Unless and until the Federal Government acts on comprehensive Student Loan Reform and related Bankruptcy reform, the current state of the law presents a number of barriers to obtaining an easy, quick, or clean discharge of student loan debt in bankruptcy.</p>

                  <p>This does NOT mean it is impossible to obtain a discharge, however, it is a trying and slow process that entails a number of procedural tasks and legal elements that must be satisfied.</p>

                  <p>The general state of the law is codified under 11 U.S.C. § 523(a)(8).  This section of the bankruptcy code provides that student loans are excepted from the discharge a debtor receives in bankruptcy unless repaying those loans would impose an undue hardship on the debtor and the debtor’s dependents.</p>

                  <p>In United Student Aid Funds v. Pena (In re Pena), 155 F.3d 1108, 1112 (9th Cir. 1998), the Ninth Circuit adopted the three-pronged test set out in Brunner, 831 F.2d 395 at 396 (2nd. Cir. 1987), to determine whether the undue hardship standard has been met for a particular debtor in a particular situation.</p>

                  <p>The three prongs require a showing: (1) that the debtor cannot maintain, based on current income and expenses, a minimal standard of living for herself and her dependents if forced to repay the loans; (2) that additional circumstances exist indicating that this state of affairs is likely to persist for a significant portion of the repayment period of the student loans; and (3) the debtor made good faith efforts to repay the loans.</p>

                  <p>If your factual situation meets the basic elements of the Brunner Test and you desire to begin the long and arduous process to have your student loans discharged, you must file an Adversary Proceeding and related Complaint to Determine Dischargeability.  This Adversary Proceeding and Complaint to Determine Dischargeability is separate from your Chapter 7 or Chapter 13 Bankruptcy Petition.</p>

                  <p>After the Bankruptcy Petition and related Adversary Proceeding is filed and pre-trial proceedings (including discovery) are conducted, a trial will eventually be held in front of a Bankruptcy Judge.  The Bankruptcy Judge will hear testimony and weigh evidence on whether your particular situation meets the Brunner factors.  Just like any trial, the opposing party(ies), the Student loan Issuer and Servicer, will be represented by an attorney and will be presented an opportunity to offer evidence in support of their case that the loans should not be discharged.</p>

                  <p>After hearing the facts of the case and applying the facts to the state of the law, the Bankruptcy Judge then possesses the power to order your student loans discharged or not.  The whole process takes several years to complete, but may be worth it if your loans are large enough, your personal situation satisfies the Brunner factors, and significant financial relief can be obtained for you.</p>

                  <p class="bold">How much will it cost to hire a lawyer to help me with this process?</p>

                  <p>There is no one fixed rate or fee for services with Alex Coomer Law.  Every case is different and every fee is specially tailored to each case.</p>

                  <p>Please call <a href="tel:520-372-2475">520-372-2475</a> to schedule a free appointment to discuss the particular facts and situation of your life, student loans, and case.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>


                  <h4 id="faq23">Can you please explain pre-bankruptcy planning in more detail and why this service is valuable to me?</h4>

                  <p>In a Chapter 7 case, a thoughtful bankruptcy lawyer must analyze the timing of filing your case to maximize your exemptions and minimize the assets that will be liquidated or taken from you to pay your creditors.   In other words, good pre-bankruptcy planning protects your stuff, gets you the largest legal discharge available, and provides the best foundation possible for your life coming out of bankruptcy.</p>

                  <p>For example, without proper pre-bankruptcy planning and assistance from an attorney, it is possible you may surrender most (if not all) of your tax refund.  An ill-timed filing at the end of the calendar year when you are anticipating a big refund will likely result in the Trustee keeping your case open until your refund arrives and taking your refund to pay creditors a portion of the debt owed.  If you regularly receive a large tax refund, discussion with an attorney as to the optimal time to file and how to spend your tax refund properly prior to filing is highly advised.</p>

                  <p>Another classic example where proper pre-bankruptcy planning with an attorney is helpful is when you have way too much equity in automobiles, own lots of vehicles, and you must transition non-exempt assets into exempt assets prior to filing.   With the guidance of an attorney, you can sell the vehicles you do not want to keep and with the sale proceeds of the vehicles know exactly what you can buy, how much you can spend, and the timing of this process to accumulate helpful exempt assets to your family (i.e. stuff you get to keep even though you are filing for bankruptcy). </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id="faq24">Won’t Pre-Bankruptcy Planning slow down my filing? </h4>

                  <p>Yes, in theory, your filing date can be pushed back in order to Pre-Bankruptcy plan properly. BUT, this sort of pre-bankruptcy strategy will only be done to maximize value in your case for you as applied to your given situation. </p>

                  <p>In some cases, such as a pending home foreclosure or where there are heavy wage garnishments already in place, there may not be any incentive or financial reasons to pre-bankruptcy plan to the same degree and filing your case quickly will be the priority. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id="faq25">Is Pre-Bankruptcy Planning expensive?  </h4>

                  <p>No, in fact, there is usually no separate charge for pre-bankruptcy planning.  At Alex Coomer Law, Pre-Bankruptcy planning is typically built into the flat fee price designed for your case and your situation.  Pre-Bankruptcy planning is simply good legal work. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq10'>What exactly is a Trustee? </h4>

                  <p>When a Chapter 7 or Chapter 13 bankruptcy Petition is filed, a Trustee will be appointed to the case by the Bankruptcy Court. </p>

                  <p>In a Chapter 7, the Trustee’s job is to assess the Bankruptcy Petition and establish if it is a no-asset bankruptcy or if there are assets that need to be seized.  If there are no assets, the Trustee’s job is fairly straightforward and the case will likely be finished within a matter of weeks. </p>

                  <p>If there are assets to be sold, the Trustee’s job is to acquire the assets, sell them (“liquidation”), and distribute the proceeds to creditors in accordance with bankruptcy law. Unfortunately, the timeline on this process is uncertain as it takes the Trustee an uncertain amount of time to complete the job. </p>

                  <p>In a Chapter 13 bankruptcy, the Trustee’s job is far more complex and the role of the Trustee will depend greatly on the specific situation of the person filing for bankruptcy and the creditors.            </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq11'>What if I have a lot of personal property?  Why can’t I give my property to a friend or family member?</h4>

                  <p>It is a very bad idea to transfer any property or interests in real estate to family members or friends if you are contemplating bankruptcy.  In some cases, such behavior can result in your potential bankruptcy case being dismissed and will delay any future bankruptcy filing for a period of years.  In other more serious cases, such behavior can result in possible criminal bankruptcy fraud charges. </p>

                  <p>It is the job of the resourceful Trustee, appointed by the Bankruptcy Court, to verify that non-exempt assets that could have been used to pay creditors were not illegally transferred, sold, or moved prior to filing for bankruptcy. </p>

                  <p>Bankruptcy is a process for the honest debtor.  Bankruptcy is not a process designed to hide, scam, cheat, or defraud your creditors. (Emphasis added).            </p>

                  <p>If you have moved or transferred property and are now nervous, there are potential solutions that a bankruptcy attorney can suggest.  It is not the end of the world if you think you made a mistake with respect to the transfer of property because a good bankruptcy attorney can help you navigate the process back. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq12'>Why are Bankruptcy lawyers helpful? </h4>

                  <p>Is it possible, and completely legal, for someone to represent themselves in their own bankruptcy proceeding?  Absolutely. </p>

                  <p>Do many people successfully navigate a bankruptcy on their own?  Absolutely. </p>

                  <p>Is it stressful, difficult, and risky to file for bankruptcy on your own?  Absolutely.            </p>

                  <p>Bankruptcy law is a combination of contract law, property law, secured transactions, tax law, administrative law, civil procedure, family law, math, and lots of paper-work.  In addition, bankruptcy law combines federal law with state law, thereby adding to the complications. </p>

                  <p>Your bankruptcy lawyer is there to make sure the details don’t get missed, every exemption is sought, and all discharges are maximized with as little stress and work on you as possible. You will need to work closely and diligently with providing documents and information to your bankruptcy lawyer, but the heavy lifting will never be on your shoulders. </p>

                  <p>The idea is this -- a good bankruptcy attorney provides you peace of mind.  How much is this worth to you? </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id="faq26">I’ve talked to several bankruptcy attorneys, but I do not know who I should hire.  Should I just hire the attorney who quoted me the cheapest fee?  Are bankruptcy attorneys all the same?  </h4>

                  <p>Cost is obviously a major factor when it comes to your decision as to who to hire as your attorney, but it is not the only thing to consider.  </p>

                  <p>Every attorney is different. Consider the big picture.  Going through a personal debt crisis, business failure, or bankruptcy will be emotionally difficult for most people and, for some especially, it is critically important to have a lawyer who you connect with personally, who listens to you intently at all times, and who you know has your back. </p>

                  <p>If you find it difficult to get in touch or garnish the attention of your attorney, this is a red flag and likely someone you do not want to work with.   You are NOT a number.   Please be wary of “bankruptcy mills” in Tucson and Southern Arizona.  Bankruptcy mills work and operate on volume.  A volume business model makes it difficult for you to obtain the personal relationship you should have with your attorney.  </p>

                  <p>Finally, the bankruptcy process is not particularly fast.  You will be working closely with your bankruptcy lawyer during the preparation of the bankruptcy petition for several months, maybe longer. </p>

                  <p>For these practical reasons, you want to hire a lawyer you like.  You want a lawyer you want to work with during this trying process.  Debt resolution, loan modifications, and bankruptcy are difficult things to go through.  To make sure the process is as painless as possible for you, it is important to have a true and genuine relationship with your attorney.  </p>

                  <p>Put simply -- don’t be fooled by the lowest cost attorney.  There is more to the equation in assessing who is the right attorney for you.  </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>


                  <h4 id='faq13'>How much do your bankruptcy services cost? </h4>

                  <p>There is no one set fixed fee for bankruptcy services at Alex Coomer Law, PLLC. </p>

                  <p>A good way to understand why there is no one set fee is through analogy.  Envision an auto-mechanic sitting out front of his shop and a customer comes along pushing a vehicle up the road.  If the customer asks, “how much to fix my car?”, any reasonable mechanic would say, “I don’t know, I need to see what’s wrong.”  Bankruptcy law is similar.            </p>

                  <p>Until a bankruptcy lawyer knows the extent of what is wrong with the financial situation and how many issues need to be resolved, it is impossible to accurately know how much time it will take to fix and how much the services will cost. </p>

                  <p>Alex Coomer Law, PLLC offers a completely free initial consultation in order to get an understanding of your situation such that an accurate, fair, and reasonable price for services can be provided.  If you would like to schedule a free consultation, please call 520-372-2475 to start the process.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq14'>Do you work on an hourly rate?</h4>

                  <p>Yes.  The hourly rate depends on the nature of the case, client, and situation.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq15'>Do you accept credit cards?</h4>

                  <p>Alex Coomer Law, PLLC is not allowed to accept a credit card payment for attorney’s fees from a bankruptcy client who intends to list such payment of fees on a credit card as a debt in a bankruptcy proceeding.</p>

                  <p>Credit card payments, in some circumstances, may be accepted from third parties who pay the fee on a bankruptcy client’s behalf. </p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq16'>Do you take contingency based personal injury cases? </h4>

                  <p>No, but I am confident I can refer you to a very good local attorney who does, if you would like my recommendation.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq17'>Do you take criminal cases?</h4>

                  <p>No, but I am confident I can refer you to a very good local attorney who does, if you would like my recommendation.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq18'>Do you take divorce or family law cases?</h4>

                  <p>No, but I am confident I can refer you to a very good local attorney who does, if you would like my recommendation.</p>
                  <p class="back-to-top"><AnchorLink href='#top'>Back to Top ^ </AnchorLink></p>

                  <h4 id='faq19'>Can you take my bankruptcy case if I live in Maricopa County? </h4>

                  <p>No, at the present moment, Alex Coomer Law, PLLC only files bankruptcies for individuals residing in Pima, Cochise, Graham, Greenlee, and Santa Cruz County.</p>

                  <p>I am confident I can refer you to a very good Maricopa bankruptcy attorney who can help you, if you would like my recommendation.             </p>
                  </div>
                </div>

              </div>

              <div class='faq-pg-col-2'>

                <div>
                  <Link exact to='/services/chapter-7-bankruptcy'><h2>Chapter 7 Bankruptcy</h2></Link>
                  <Link exact to='/services/chapter-13-bankruptcy'><h2>Chapter 13 Bankruptcy</h2></Link>
                  <Link exact to='/services/pre-bankruptcy-planning'><h2>Pre-Bankruptcy Planning</h2></Link>
                  <Link exact to='/services/loan-modification-assistance'><h2>Loan Modification Assistance</h2></Link>
                  <Link exact to='/services/debt-negotiation-and-settlement'><h2>Debt Negotiation and Settlement</h2></Link>
                  <Link exact to='/services/protection-from-creditors'><h2>Protection from Creditors</h2></Link>
                  <Link exact to='/services/creditor-defense'><h2>Creditor Defense</h2></Link>
                  <Link class='active-service' exact to='/services/FAQs'><h2>FAQs</h2></Link>
                  <Link exact to='/services/payment'><h2>Payment</h2></Link>
                  <Link exact to='/services/process-of-bankruptcy'><h2>The Process of BK</h2></Link>
                </div>

              </div>
            </div>

          </div>
        </div>
        <Social />
        <ServicesForm />



      </div>

    )
  }
}

export default Faqs
