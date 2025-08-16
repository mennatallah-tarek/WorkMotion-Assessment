export class HirePage{
verifyHirePage() {
 cy.url().should('include', '/hire')
}
  
ClickTalent() {
          cy.get('#onboarding-app > div:nth-child(1) > div > div > main > section > div:nth-child(2) > div > div > div.sc-epALIP.bUGAuO'
).click()

    }
 
}