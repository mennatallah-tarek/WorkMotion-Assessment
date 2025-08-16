/// <reference types = 'Cypress' />

import { HomePage } from "../../../../../Pages/HomePage";
import { LoginPage } from "../../../../../Pages/LoginPage"

//Added Opjects for Pages needed for this Test from Pages Package 
const LoginElements = new LoginPage

describe (' Invalid Email Login',function()
{
    it('should ask for correct Email', () => {
      
    //Login Steps woth Invalid Email
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.Email('avengers.engineering+hr1')
    LoginElements.Password('DummyPass.12')
    LoginElements.ClickLoginButton()

    //verify 'Please enter a valid email' appears
    cy.contains('Please enter a valid email').should('exist')

  //verify ''The email and / or the password you entered is invalid' appears
    cy.contains('The email and / or the password you entered is invalid').should('exist')

  // Verify it won't get redirected to HomePage
    cy.url().should('not.include', '/dashboard')
  });
});