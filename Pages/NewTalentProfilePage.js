export class NewTalentProfilePage{
     verifyNewTalentProfilePage() {
 cy.url().should('include', '/basic-info')
}
  
  VerifyTalentFirstName(Fisrtname) {
          cy.xpath('//*[@id="main-container"]/div/div[3]/div/div[2]/div[3]/div/div[2]/span[2]/div').should('have.text', Fisrtname);

    }
     VerifyTalentLastName(Lastname) {
          cy.xpath('//*[@id="main-container"]/div/div[3]/div/div[2]/div[3]/div/div[3]/span[2]/div').should('have.text', Lastname);

    }
    VerifyTalentEmail(Email) {
          cy.xpath('//*[@id="main-container"]/div/div[3]/div/div[2]/div[3]/div/div[5]/span[2]/div').should('have.text', Email);

    }
}