export class HireCountryPage{
verifyCountryPage(){
 cy.url().should('include', '/country')
}
  
ChooseCountry(country) {
          cy.get('#select-country > div > div.css-hlgwow > div.css-19bb58m').type(country + '{enter}')



    }
clickGetStarted(){
        cy.get('#onboarding-get-started-btn > div').scrollIntoView().click()




    }
 
}