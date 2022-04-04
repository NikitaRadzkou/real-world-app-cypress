type Selector = Cypress.Chainable<JQuery<HTMLElement>>

class Signin {
  private get usernameInput(): Selector {
    return cy.get('#username')
  }

  private get passwordInput(): Selector {
    return cy.get('#password')
  }

  private get signinBtn(): Selector {
    return cy.get('[data-test=signin-submit]')
  }

  private get signUpLink(): Selector {
    return cy.get('[data-test=signup]')
  }

  signinVisit() {
    cy.visit('http://localhost:3000/signin')
    return this
  }

  typeUsername(value: string) {
    this.usernameInput.type(value)
    return this
  }

  typePassword(value: string) {
    this.passwordInput.type(value)
    return this
  }

  clickSingin() {
    this.signinBtn.click()
    return this
  }

  clickSignUpLink() {
    this.signUpLink.click()
    return this
  }
}

export default new Signin()
