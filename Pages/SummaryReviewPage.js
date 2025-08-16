export class SummaryReviewPage{
verifySummaryReviewPage(){
 cy.url().should('include', '/summary-review')}
ClickAccurateInformationConfirmation(){
          cy.xpath('//*[@id="onboarding-app"]/div[1]/div/div/main/div/div/div[2]/form/div[1]/div[2]/div[3]/div[2]/div[1]/div/div/div/label/span[1]',{ timeout: 10000 }).scrollIntoView().should('be.visible').click()

    }
        ClickFinishButton(){
          cy.get('#onboarding-finish-btn').scrollIntoView().should('be.visible').click()

    }
}