export class HomePage{
     verifyDashboard() {
 cy.url().should('include', '/dashboard')
}
  
  ClickAddNewTalent() {
          cy.get('#mobile-header > div:nth-child(2) > button:nth-child(3) > svg').click()

    }
OpenHomePageMenu(){
   cy.get('#mobile-header > div:nth-child(1) > button > svg > path').click()
}
 ClickTalentPage() {
          cy.get('#sidebar-talents-link > div').click()

    }

 
}