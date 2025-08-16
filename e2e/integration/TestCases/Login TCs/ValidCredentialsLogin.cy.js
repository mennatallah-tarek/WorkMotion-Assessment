/// <reference types = 'Cypress' />

import { HomePage } from "../../../../../Pages/HomePage";
import { LoginPage } from "../../../../../Pages/LoginPage"

//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
const homePage = new HomePage

describe ('Successful Login with correct Email and password',function()
{
	it('should load the homepage', () => {
    
    //Login Steps
    cy.visit('https://beta.workmotion.com/login')
	LoginElements.Email('avengers.engineering+hr1@workmotion.com')
	LoginElements.Password('DummyPass.12')
	LoginElements.ClickLoginButton()
	//Get Redirected to Dashboard
	homePage.verifyDashboard()
   
  });
});
