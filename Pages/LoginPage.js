export class LoginPage {

    Email(Email) {
        cy.get('#email',{ timeout: 10000 }).should('be.visible').type(Email)

    }
    Password(password) {
        cy.get('#password',{ timeout: 10000 }).should('be.visible').type(password)

    }
    ClickLoginButton() {
        cy.get('#main-container > div > div > main > div > div > form > div:nth-child(2) > button > div',{ timeout: 10000 }).should('be.visible').click()       

    }
}
