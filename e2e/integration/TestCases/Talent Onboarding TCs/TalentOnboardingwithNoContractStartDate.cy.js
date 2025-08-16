/// <reference types = 'Cypress' />


import { ContractdetailsPage } from "../../../../../Pages/ContractDetailsPage"
import { HireCountryPage } from "../../../../../Pages/HireCountryPage"
import { HirePage } from "../../../../../Pages/HirePage"
import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"


//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
const homePage = new HomePage
const hirePage = new HirePage
const CountryPage= new HireCountryPage
const contractdetailsPage = new ContractdetailsPage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname

describe ('Talent Onboarding with No Contract Start Date',function()
{
    it('should Verify that Onboarding flow is interupted in Contract Detalis step', () => {
    cy.visit('https://beta.workmotion.com/login')
    
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
    
    //Add All Talent's contract details Without Adding Start Contract Date

    contractdetailsPage.verifyContractDetailsPage()
    contractdetailsPage.AddFirstName(Fisrtname)
    contractdetailsPage.AddLastName(Lastname)
    contractdetailsPage.clickEgliblityToWorkInCountry()
    contractdetailsPage.ClickTalentExecutive()
    contractdetailsPage.AddJobTitle('QA')
    contractdetailsPage.AddJobDescription('HELP')
    contractdetailsPage.ClickEmploymentType()
    contractdetailsPage.ClickContractType()
    contractdetailsPage.ChooseContractEndDate()
    contractdetailsPage.chooseToWorkFromHome()
    contractdetailsPage.chooseToReimburseExpenses()
    contractdetailsPage.ClickContinueButton()
    
    //Verify 'Contract start date field is required' appears
    cy.contains('Contract start date field is required').should('exist')
    
    //Verify that it will not redirect it to Contract Clauses Page
    cy.url().should('not.include', '/contract-clauses')
  });
});
