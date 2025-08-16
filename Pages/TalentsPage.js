export class TalentsPage{
     verifyTalentsPage() {
 cy.url().should('include', '/talents')
}
ClickonCloseMenuButton(){

      cy.get('#mobile-header > div:nth-child(1) > button > svg').click()
  }
ClickOnbordingTab() {
          cy.xpath('//*[@id="main-container"]/div/div[3]/div/div/div/button[2]').click()

    }
SearchNewTalentOnOnboardingList(TalentName) {
          cy.xpath('/html/body/div[3]/div/div/div[1]/main/div/div[4]/div[1]/div[1]/div[2]/div/div/input', { timeout: 10000 }).type(TalentName)

    }
verifyTalentExistsInTheList(TalentName) {
  cy.contains('#employee-list table td', TalentName).should('exist');

}
NewTalentInformationTabOpen(){
      cy.xpath('//*[@id="employee-list"]/div/table/tbody/tr[1]/td[1]/div/a').click()
}

}