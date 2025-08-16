/// <reference types = 'Cypress' />


import { HireCountryPage } from "../../../../../Pages/HireCountryPage"
import { HirePage } from "../../../../../Pages/HirePage"
import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"

//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
const homePage = new HomePage
const hirePage = new HirePage
const CountryPage= new HireCountryPage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname


describe ('Talent Onboarding with Invalid Country',function()
{
    it('should Verify that Onboarding flow is interupted in Country Step', () => {
    
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
   
    
    //Choose Invalid Country Like 'Cairo'
    CountryPage.verifyCountryPage()
    CountryPage.ChooseCountry('Cairo')
    CountryPage.clickGetStarted()

    //Verify that it will not redirect it to Contract Details Page
    cy.url().should('not.include', '/contract-details')

  });
});
