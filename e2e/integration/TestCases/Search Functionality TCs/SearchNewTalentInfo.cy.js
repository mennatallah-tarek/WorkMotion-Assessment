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
let Lastname = 'DR'
let Fisrtname = 'fe'
let TalentName = Fisrtname+' '+Lastname
let Email = 'DE.DR@email.com'

describe ('Search New Talent Added',function()
{
    it('should load Talent\'s info Page and Verify if they are correct ', () => {
    //Login Steps
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.Email('avengers.engineering+hr1@workmotion.com')
    LoginElements.Password('DummyPass.12')
    LoginElements.ClickLoginButton()
    //Go to Talent onboarding tab steps
    homePage.verifyDashboard()
    homePage.OpenHomePageMenu()
    homePage.ClickTalentPage()
    talentsPage.ClickonCloseMenuButton()
    talentsPage.ClickOnbordingTab()
    
    //Search the new added Talent
    talentsPage.SearchNewTalentOnOnboardingList(TalentName)
    talentsPage.NewTalentInformationTabOpen()
    
    //Verify if you got redirected to right Talent information tab
    newTalentProfilePage.verifyNewTalentProfilePage()
    
    //verify if FirstName Added in Onbaording is the same as in the info tab
    newTalentProfilePage.VerifyTalentFirstName(Fisrtname)
    
    //verify if LastName Added in Onbaording is the same as in the info tab
    newTalentProfilePage.VerifyTalentLastName(Lastname)
    
    //verify if Email Added in Onbaording is the same as in the info tab
    newTalentProfilePage.VerifyTalentEmail(Email)


  });
});
