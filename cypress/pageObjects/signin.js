class Signin {
  get usernameInput() {
    return cy.get('#username')
  }

  get passwordInput() {
    return cy.get('#password')
  }

  get signinBtn() {
    return cy.get('[data-test=signin-submit]')
  }

  get signUpLink() {
    return cy.get('[data-test=signup]')
  }

  signinVisit() {
    cy.visit('http://localhost:3000/signin')
    return this
  }

  typeUsername(value) {
    this.usernameInput.type(value)
    return this
  }

  typePassword(value) {
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
