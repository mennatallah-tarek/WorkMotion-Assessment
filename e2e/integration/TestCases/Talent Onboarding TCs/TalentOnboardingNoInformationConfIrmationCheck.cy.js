/// <reference types = 'Cypress' />

import { CompansationCalculationPage } from "../../../../../Pages/CompansationCalculationPage"
import { ContractClausePage } from "../../../../../Pages/ContractClausePage"
import { ContractdetailsPage } from "../../../../../Pages/ContractDetailsPage"
import { HireCountryPage } from "../../../../../Pages/HireCountryPage"
import { HirePage } from "../../../../../Pages/HirePage"
import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"
import { InviteYourEmployeePage } from "../../../../../Pages/InviteYourEmployeePage"
import { SummaryReviewPage } from "../../../../../Pages/SummaryReviewPage"
import { SuccessfulOnboardingPage } from "../../../../../Pages/SuccessfulOnboardingPage"
import { TalentsPage } from "../../../../../Pages/TalentsPage"

//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
const homePage = new HomePage
const hirePage = new HirePage
const CountryPage= new HireCountryPage
const contractdetailsPage = new ContractdetailsPage
const contractClausePage = new ContractClausePage
const compansationCalculationPage = new CompansationCalculationPage
const inviteYourEmployeePage = new InviteYourEmployeePage
const summaryReviewPage = new SummaryReviewPage
const successfulOnboardingPage = new SuccessfulOnboardingPage
const talentsPage = new TalentsPage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname
let Email = 'DER@email.com'

describe ('TalentOnboarding No Information Confirmation Check',function()
{
    it('should Verify that Onboarding flow is interupted in Summary Review Step', () => {

    //Login Steps
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.Email('avengers.engineering+hr1@workmotion.com')
    LoginElements.Password('DummyPass.12')
    LoginElements.ClickLoginButton()
   
    //Dashboard Steps
    homePage.verifyDashboard()
    homePage.ClickAddNewTalent()
   
    //Add New Talent 
    hirePage.verifyHirePage()
    hirePage.ClickTalent()
   
    
    //Choose Talent's Country
    CountryPage.verifyCountryPage()
    CountryPage.ChooseCountry('Egypt')
    CountryPage.clickGetStarted()
    
    //Add Talent's contract details
    contractdetailsPage.verifyContractDetailsPage()
    contractdetailsPage.AddFirstName(Fisrtname)
    contractdetailsPage.AddLastName(Lastname)
    contractdetailsPage.clickEgliblityToWorkInCountry()
    contractdetailsPage.ClickTalentExecutive()
    contractdetailsPage.AddJobTitle('QA')
    contractdetailsPage.AddJobDescription('HELP')
    contractdetailsPage.ClickEmploymentType()
    contractdetailsPage.ClickContractType()
    contractdetailsPage.ChooseContractDate()
    contractdetailsPage.ChooseContractEndDate()
    contractdetailsPage.chooseToWorkFromHome()
    contractdetailsPage.chooseToReimburseExpenses()
    contractdetailsPage.ClickContinueButton()
    
    //Add Talent's Contract Clause
    contractClausePage.verifyContractClausePage()
    contractClausePage.ChooseNoticePeriod()
    contractClausePage.AddOtherBenifits('N/a')
    contractClausePage.ClickContinueButton()
    
    //Calculate Talent's Salary and benifits 
    compansationCalculationPage.verifyCompansationCalculationPage()
    compansationCalculationPage.ProvideEmployeeParticipation()
    compansationCalculationPage.CurrencySelection()
    compansationCalculationPage.ChooseTalentBouns()
    compansationCalculationPage.ChooseVariablebouns()
    compansationCalculationPage.AddSignoffBouns('4000')
    compansationCalculationPage.ChooseAllownces()
    compansationCalculationPage.TypeYourSalary('30000')
    compansationCalculationPage.ClickContinueButton()
    
    //Add Talent's Email
    inviteYourEmployeePage.verifyInviteYourEmployeePage()
    inviteYourEmployeePage.AddTalentEmail(Email)
    inviteYourEmployeePage.ClickContinueButton()
   
    //Click Finish Without Information Confirmation Check
    summaryReviewPage.verifySummaryReviewPage()
    summaryReviewPage.ClickFinishButton()
    
    //Verify 'You must first approve the data provided' Appears
      cy.contains('You must first approve the data provided').should('exist')
    //Verify Talent isn't Successfully Added and no Redirection to Success page
      cy.url().should('not.include', '/success')

  });
});
