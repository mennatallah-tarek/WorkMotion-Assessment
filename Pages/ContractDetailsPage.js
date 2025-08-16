export class ContractdetailsPage{
verifyContractDetailsPage(){
 cy.url().should('include', '/contract-details')
}
  
AddFirstName(firstname) {
          cy.get('#d5deff3f-7772-328f-b79c-0eb7d0c51a85').type(firstname)

    }
    AddLastName(lastname) {
          cy.get('#e64f0cca-edaa-3fdf-9490-c90f09f44e64').type(lastname)

    }
    clickEgliblityToWorkInCountry(){
        cy.xpath('//*[@id="6c20042a-4bfd-312b-b00d-f25fcc2d69de-Yes"]').scrollIntoView().click()

    }
ClickTalentExecutive(){
        cy.xpath('//*[@id="769be8cd-0214-32b3-9f7f-ee8719f2abe2-Yes"]').scrollIntoView().should('be.visible').click()

    }
    AddJobTitle(jobtitle) {
          cy.get('#a55bffc6-7f57-3036-bcdd-f49158941f71').scrollIntoView().should('be.visible').type(jobtitle)

    }
    AddJobDescription(jobdescription) {
          cy.get('#d3f07c10-4e02-3ab7-8b9d-fa4dec585b3d').scrollIntoView().should('be.visible').type(jobdescription)

    }
 ClickEmploymentType(){
        cy.xpath('//*[@id="0f9d5320-f71d-3458-ac58-093c65081831-full-time"]').scrollIntoView().should('be.visible').click()

    }
ClickContractType(){
        cy.xpath('//*[@id="a2c1ae1e-7ecc-31bd-9515-1928a5a17368-fixed-term"]').scrollIntoView().should('be.visible').click()

    }
    chooseToWorkFromHome(){
        cy.xpath('//*[@id="c3950686-6ffb-3a4a-9677-2304ea71bc6c-Yes"]').scrollIntoView().click()

    }
    chooseToReimburseExpenses(){
        cy.xpath('//*[@id="43726060-8606-3432-926d-2ac495de2001-No"]').scrollIntoView().click()

    }
     ChooseContractDate() {
          cy.xpath('//*[@id="4888400e-89f4-3c79-8b11-012ac7215428"]').scrollIntoView().should('be.visible').click()
          cy.get('body > div.MuiDialog-root.MuiModal-root.css-1kb3o1r > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogContent-root.css-27iiwz > div > div.css-epd502 > div > div.MuiPickersFadeTransitionGroup-root.MuiCalendarPicker-viewTransitionContainer.css-1h73gvd > div > div > div.PrivatePickersSlideTransition-root.MuiDayPicker-slideTransition.css-1cnkspq > div > div:nth-child(5) > button:nth-child(6)').scrollIntoView().should('be.visible').click()
          cy.get('body > div.MuiDialog-root.MuiModal-root.css-1kb3o1r > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-1vskg8q > button:nth-child(2)').scrollIntoView().should('be.visible').click()
    }
      ChooseContractEndDate() {
          cy.xpath('//*[@id="0b0d03f9-613f-3175-812d-e5343c50aab2"]').scrollIntoView().should('be.visible').click()
          cy.get('body > div.MuiDialog-root.MuiModal-root.css-1kb3o1r > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogContent-root.css-27iiwz > div > div.css-epd502 > div > div.MuiPickersFadeTransitionGroup-root.MuiCalendarPicker-viewTransitionContainer.css-1h73gvd > div > div > div.PrivatePickersSlideTransition-root.MuiDayPicker-slideTransition.css-1cnkspq > div > div:nth-child(5) > button:nth-child(6)').scrollIntoView().should('be.visible').click()
          cy.get('body > div.MuiDialog-root.MuiModal-root.css-1kb3o1r > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiDialogActions-root.MuiDialogActions-spacing.css-1vskg8q > button:nth-child(2)').scrollIntoView().should('be.visible').click()
    }
ClickContinueButton(){
    cy.get('#onboarding-continue-btn > div').click()
}
}