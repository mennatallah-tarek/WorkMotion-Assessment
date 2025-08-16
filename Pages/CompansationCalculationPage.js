export class CompansationCalculationPage{
verifyCompansationCalculationPage(){
 cy.url().should('include', '/salary-calculator')}

    ProvideEmployeeParticipation(){
        cy.xpath('//*[@id="3427ebc4-8074-35ca-9083-f61089922b63-No"]').should('be.visible').click()

    }
 CurrencySelection(){
        cy.xpath('//*[@id="fd437f4e-9029-3184-ac8f-3667a420c81c"]/div/div[1]/div[2]').scrollIntoView().should('be.visible').click()
       cy.contains('EUR').click({ force: true });

    }
  TypeYourSalary(money){
          cy.xpath('/html/body/div[3]/div/div/div[1]/main/div/div[3]/div[1]/div/div/main/div/div/div[2]/form/div[1]/div[2]/section/div[3]/div/div/div/div[1]/div/input').scrollIntoView().should('be.visible')

    

cy.xpath('/html/body/div[3]/div/div/div[1]/main/div/div[3]/div[1]/div/div/main/div/div/div[2]/form/div[1]/div[2]/section/div[3]/div/div/div/div[1]/div/input')
.type(money, { force: true })
  
    }
 ChooseTalentBouns(){
        cy.xpath('//*[@id="c20a642f-5ef3-397b-80cb-7e1cc16109e3-No"]').should('be.visible').click()

    }
ChooseVariablebouns(){
        cy.xpath('//*[@id="8c939979-011e-3945-9e72-d38988d1cdcc-No"]').should('be.visible').click()

    }
   AddSignoffBouns(bouns){
          cy.xpath('//*[@id="b08f9827-c1cb-39c0-894c-508e5aef7b3e"]').scrollIntoView().should('be.visible').type(bouns)

    }
    ChooseAllownces(){
        cy.xpath('//*[@id="8b7fed89-2e6d-3dd2-80e1-2b67b74b89a4.newAllowance-No"]').should('be.visible').click()

    }
     ClickContinueButton(){
          cy.get('#onboarding-continue-btn').scrollIntoView().should('be.visible').click()

    }

}