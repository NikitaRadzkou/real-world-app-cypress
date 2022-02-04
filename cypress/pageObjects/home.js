class Home {
  get getStartedNextBtn() {
    return cy.get('[data-test=user-onboarding-next]')
  }

  get bankNameAccountInput() {
    return cy.get('#bankaccount-bankName-input')
  }

  get routingNumberInput() {
    return cy.get('#bankaccount-routingNumber-input')
  }

  get accountNumber() {
    return cy.get('#bankaccount-accountNumber-input')
  }

  get newTransactionBtn() {
    return cy.get('[data-test=nav-top-new-transaction]')
  }

  get saveBankAccountBtn() {
    return cy.get('[data-test=bankaccount-submit]')
  }

  get doneBankAccountBtn() {
    return cy.get('[data-test=user-onboarding-next]')
  }

  get logoutBtn() {
    return cy.get('[data-test=sidenav-signout]')
  }

  homeVisit() {
    cy.visit('/')
    return this
  }

  verifyHomeUrl() {
    cy.url().should('eq', 'http://localhost:3000/')
    return this
  }

  typeBankName(value) {
    this.bankNameAccountInput.type(value)
    return this
  }

  typeRoutingNumber(value) {
    this.routingNumberInput.type(value)
    return this
  }

  typeAccountNumber(value) {
    this.accountNumber.type(value)
    return this
  }

  clickGetStartedNextBtn() {
    this.getStartedNextBtn.click()
    return this
  }

  clickNewTransaction() {
    this.newTransactionBtn.should('be.visible').click()
    return this
  }

  clickSaveBankAccount() {
    this.saveBankAccountBtn.click()
    return this
  }

  clickDoneBankAccount() {
    this.doneBankAccountBtn.click()
    return this
  }

  clickLogoutBtn() {
    this.logoutBtn.click()
    return this
  }
}

export default new Home()
