/// <reference types = 'Cypress' />

import { CompansationCalculationPage } from "../../../../../Pages/CompansationCalculationPage"
import { ContractClausePage } from "../../../../../Pages/ContractClausePage"
import { ContractdetailsPage } from "../../../../../Pages/ContractDetailsPage"
import { HireCountryPage } from "../../../../../Pages/HireCountryPage"
import { HirePage } from "../../../../../Pages/HirePage"
import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"
import { InviteYourEmployeePage } from "../../../../../Pages/InviteYourEmployeePage"


//Added Opjects for Pages needed for this Test from Pages Package 

const LoginElements = new LoginPage
const homePage = new HomePage
const hirePage = new HirePage
const CountryPage= new HireCountryPage
const contractdetailsPage = new ContractdetailsPage
const contractClausePage = new ContractClausePage
const compansationCalculationPage = new CompansationCalculationPage
const inviteYourEmployeePage = new InviteYourEmployeePage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname
let Email = 'DE.DR@email'

describe ('Talent Onboarding invalid Talent Email',function()
{
    it('should Verify that it will not Pass Wrong Talent Email Talent Isn\'t added', () => {
    
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
    
    //Add Invalid Talent's Email
    inviteYourEmployeePage.verifyInviteYourEmployeePage()
    inviteYourEmployeePage.AddTalentEmail(Email)
    inviteYourEmployeePage.ClickContinueButton()
  
    //Verify 'Talent\'s email is not a valid email' appears
    cy.contains('Talent\'s email is not a valid email').should('exist')

    // Verify Page isn't  redirected to summary review page
    cy.url().should('not.include', '/summary-review')
  });
});
