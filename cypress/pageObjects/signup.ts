import { Selector } from './../fixtures/types.d'

class Signup {
  private get firstNameInput(): Selector {
    return cy.get('[data-test=signup-first-name]')
  }

  private get lastNameInput(): Selector {
    return cy.get('[data-test=signup-last-name]')
  }

  private get usernameInput(): Selector {
    return cy.get('[data-test=signup-username]')
  }

  private get passwordInput(): Selector {
    return cy.get('[data-test=signup-password]')
  }

  private get confirmPasswordInput(): Selector {
    return cy.get('[data-test=signup-confirmPassword]')
  }

  private get signUpBtn(): Selector {
    return cy.get('[data-test=signup-submit]')
  }

  signupVisit(): this {
    cy.visit('http://localhost:3000/signup')
    return this
  }

  typeFirstNameInput(value: string): this {
    this.firstNameInput.type(value)
    return this
  }

  typeLastNameInput(value: string): this {
    this.lastNameInput.type(value)
    return this
  }

  typeUsernameInput(value: string): this {
    this.usernameInput.type(value)
    return this
  }

  typePasswordInput(value: string): this {
    this.passwordInput.type(value)
    return this
  }

  typeConfirmPasswordInput(value: string): this {
    this.confirmPasswordInput.type(value)
    return this
  }

  clickSignUpBtn(): this {
    this.signUpBtn.click()
    return this
  }
}

export default new Signup()
