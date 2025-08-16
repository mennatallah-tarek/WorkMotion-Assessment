/// <reference types = 'Cypress' />

import { HomePage } from "../../../../../Pages/HomePage"
import { LoginPage } from "../../../../../Pages/LoginPage"

//Added Opjects for Pages needed for this Test from Pages Package 

const LoginElements = new LoginPage

describe ('Empty Login with no Email or Password',function()
{
    it('should ask for Email and Password', () => {
    //Login by Clicking Login Button Only
    cy.visit('https://beta.workmotion.com/login')
    LoginElements.ClickLoginButton()
    //verify 'Email is required' appears
    cy.contains('Email is required').should('exist')
      
    //verify 'Password is required' appears
    cy.contains('Password is required').should('exist')

   //verify ''The email and / or the password you entered is invalid' appears
    cy.contains('The email and / or the password you entered is invalid').should('exist')
  
    // Verify it won't get redirected to HomePage
    cy.url().should('not.include', '/dashboard')
  });
});