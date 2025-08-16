export class InviteYourEmployeePage{
verifyInviteYourEmployeePage(){
 cy.url().should('include', '/invite-employee',{ timeout: 20000 })}

 verifyInviteYourEmployeePage(){
 cy.url().should('include', '/invite-employee')}

 AddTalentEmail(email){
          cy.xpath('//*[@id="b08ff779-a9d1-390f-bef4-2e7cf5bd178e"]').scrollIntoView().should('be.visible').type(email)

    }
        ClickContinueButton(){
          cy.get('#onboarding-continue-btn > div').scrollIntoView().should('be.visible').click()

    }

}