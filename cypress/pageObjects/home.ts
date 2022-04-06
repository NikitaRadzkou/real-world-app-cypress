import { Selector } from './../fixtures/types.d'

class Home {
  private get getStartedNextBtn(): Selector {
    return cy.get('[data-test=user-onboarding-next]')
  }

  private get bankNameAccountInput(): Selector {
    return cy.get('#bankaccount-bankName-input')
  }

  private get routingNumberInput(): Selector {
    return cy.get('#bankaccount-routingNumber-input')
  }

  private get accountNumber(): Selector {
    return cy.get('#bankaccount-accountNumber-input')
  }

  private get newTransactionBtn(): Selector {
    return cy.get('[data-test=nav-top-new-transaction]')
  }

  private get saveBankAccountBtn(): Selector {
    return cy.get('[data-test=bankaccount-submit]')
  }

  private get doneBankAccountBtn(): Selector {
    return cy.get('[data-test=user-onboarding-next]')
  }

  private get logoutBtn(): Selector {
    return cy.get('[data-test=sidenav-signout]')
  }

  private get notificationsBtn(): Selector {
    return cy.get('[data-test=sidenav-notifications]')
  }

  homeVisit(): this {
    cy.visit('http://localhost:3000/')
    return this
  }

  verifyHomeUrl(): this {
    cy.url().should('eq', 'http://localhost:3000/')
    return this
  }

  typeBankName(value: string): this {
    this.bankNameAccountInput.type(value)
    return this
  }

  typeRoutingNumber(value: string): this {
    this.routingNumberInput.type(value)
    return this
  }

  typeAccountNumber(value: string): this {
    this.accountNumber.type(value)
    return this
  }

  clickGetStartedNextBtn(): this {
    this.getStartedNextBtn.click()
    return this
  }

  clickNewTransaction(): this {
    this.newTransactionBtn.should('be.visible').click()
    return this
  }

  clickSaveBankAccount(): this {
    this.saveBankAccountBtn.click()
    return this
  }

  clickDoneBankAccount(): this {
    this.doneBankAccountBtn.click()
    return this
  }

  clickLogoutBtn(): this {
    this.logoutBtn.click()
    return this
  }

  clickNotificationsBtn(): this {
    this.notificationsBtn.click()
    return this
  }
}

export default new Home()
