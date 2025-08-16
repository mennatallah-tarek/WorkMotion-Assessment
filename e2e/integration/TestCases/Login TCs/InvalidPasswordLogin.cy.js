/// <reference types = 'Cypress' />

import { HomePage } from "../../../../../Pages/HomePage";
import { LoginPage } from "../../../../../Pages/LoginPage"
//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage
describe ('Invalid Password Login',function()
{
    it('should ask for Correct Password', () => {
    
    //Login Steps woth InCorrect Password
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.Email('avengers.enineering+hr1@workmotion.com')
    LoginElements.Password('DummyPass.12')
    LoginElements.ClickLoginButton()
   
    // Verify 'The email and / or the password you entered is invalid' appears
    cy.contains('The email and / or the password you entered is invalid').should('exist')
    
    // Verify it won't get redirected to HomePage
    cy.url().should('not.include', '/dashboard')
  });
});