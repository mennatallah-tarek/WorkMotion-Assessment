export class SuccessfulOnboardingPage{
verifySuccessfulOnboardingPage(){
 cy.url().should('include', '/success')}

 ClickGoToTalentListButton(){
          cy.xpath('//*[@id="onboarding-app"]/div[1]/div/div/div/div/div[3]/button[2]/div').scrollIntoView().should('be.visible').click()

    }
      
}