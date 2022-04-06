import { Selector } from './../fixtures/types.d'

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

  signinVisit(): this {
    cy.visit('http://localhost:3000/signin')
    return this
  }

  typeUsername(value: string): this {
    this.usernameInput.type(value)
    return this
  }

  typePassword(value: string): this {
    this.passwordInput.type(value)
    return this
  }

  clickSingin(): this {
    this.signinBtn.click()
    return this
  }

  clickSignUpLink(): this {
    this.signUpLink.click()
    return this
  }
}

export default new Signin()
