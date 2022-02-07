class Signup {
  get firstNameInput() {
    return cy.get('[data-test=signup-first-name]')
  }

  get lastNameInput() {
    return cy.get('[data-test=signup-last-name]')
  }

  get usernameInput() {
    return cy.get('[data-test=signup-username]')
  }

  get passwordInput() {
    return cy.get('[data-test=signup-password]')
  }

  get confirmPasswordInput() {
    return cy.get('[data-test=signup-confirmPassword]')
  }

  get signUpBtn() {
    return cy.get('[data-test=signup-submit]')
  }

  signupVisit() {
    cy.visit('http://localhost:3000/signup')
    return this
  }

  typeFirstNameInput(value) {
    this.firstNameInput.type(value)
    return this
  }

  typeLastNameInput(value) {
    this.lastNameInput.type(value)
    return this
  }

  typeUsernameInput(value) {
    this.usernameInput.type(value)
    return this
  }

  typePasswordInput(value) {
    this.passwordInput.type(value)
    return this
  }

  typeConfirmPasswordInput(value) {
    this.confirmPasswordInput.type(value)
    return this
  }

  clickSignUpBtn() {
    this.signUpBtn.click()
    return this
  }
}

export default new Signup()
