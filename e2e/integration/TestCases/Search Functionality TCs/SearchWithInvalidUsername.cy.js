/// <reference types = 'Cypress' />

import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"
import { TalentsPage } from "../../../../../Pages/TalentsPage"
import { NewTalentProfilePage } from "../../../../../Pages/NewTalentProfilePage"

//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
const homePage = new HomePage
const talentsPage = new TalentsPage
const newTalentProfilePage = new NewTalentProfilePage

//Added variables for Data Entry
let Lastname = 'Menna'
let Fisrtname = 'Tarek'
let TalentName = Fisrtname+' '+Lastname
let Email = '129087@email.com'

describe ('Seach With non Existant Talent',function()
{
    it('should failed to get the Searched Talent name', () => {
   
      //Login Steps
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.Email('avengers.engineering+hr1@workmotion.com')
    LoginElements.Password('DummyPass.12')
    LoginElements.ClickLoginButton()
   
    //Go to onboarding tab
    homePage.verifyDashboard()
    homePage.OpenHomePageMenu()
    homePage.ClickTalentPage()
    talentsPage.ClickonCloseMenuButton()
    talentsPage.ClickOnbordingTab()
   
    //Add non Existant Talent
    talentsPage.SearchNewTalentOnOnboardingList('GGAAA')
   
    //Verify 'You will find the list of onboardings here once you start adding employees' appears
   cy.contains('You will find the list of onboardings here once you start adding employees').should('exist')
    
   //Verify 'No Onboardings in progress' appears
   cy.contains('No Onboardings in progress').should('exist')
    
   //Verify Add Talent Button appears
   cy.xpath('//*[@id="main-container"]/div/div[4]/section/button/div').should('have.text','Add talent')
     
  //Verify no Redirection to any URL
 cy.url().should('not.include', '/basic-info')

  });
});
