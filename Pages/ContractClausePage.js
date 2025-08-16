export class ContractClausePage{
verifyContractClausePage(){
 cy.url().should('include', '/contract-clauses')}

    ChooseNoticePeriod(){
        cy.xpath('//*[@id="85bfc1b0-13fe-361b-9de4-582627e68998-Yes"]/span[2]').scrollIntoView().should('be.visible').click()

    }
 AddOtherBenifits(benifits){
        cy.get('div:nth-child(1) > div > div > main > div > div > div.sc-fThUAz.kqVwGZ > form > div:nth-child(4) > section > div > div > div > div > div.MuiBox-root.css-j7qwjs').scrollIntoView().should('be.visible').type(benifits)

    }
    ClickContinueButton(){
          cy.get('#onboarding-continue-btn').scrollIntoView().should('be.visible').click()

    }
   
}