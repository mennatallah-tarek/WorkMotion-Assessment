/// <reference types = 'Cypress' />

import { CompansationCalculationPage } from "../../../../../Pages/CompansationCalculationPage"
import { ContractClausePage } from "../../../../../Pages/ContractClausePage"
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
const contractClausePage = new ContractClausePage
const compansationCalculationPage = new CompansationCalculationPage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname

describe ('Talent Onboarding With No ESOP Selection',function()
{
    it('should Verify that Onboarding flow is interupted in Salary Calculator step', () => {
  
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
    compansationCalculationPage.CurrencySelection()
    compansationCalculationPage.ChooseTalentBouns()
    compansationCalculationPage.ChooseVariablebouns()
    compansationCalculationPage.AddSignoffBouns('4000')
    compansationCalculationPage.ChooseAllownces()
    compansationCalculationPage.TypeYourSalary('30000')
    compansationCalculationPage.ClickContinueButton()
    
    //Verify 'Do you intend to provide ESOP, VSOP or any other type of employee participation to your talent? field is required' appears
    cy.contains('Do you intend to provide ESOP, VSOP or any other type of employee participation to your talent? field is required').should('exist')
    
    //Verify that it will not redirect it to Talent's Email Page
    cy.url().should('not.include', '/invite-employee')

  });
});
