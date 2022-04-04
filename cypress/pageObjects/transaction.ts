type Selector = Cypress.Chainable<JQuery<HTMLElement>>

class Transaction {
  private get searchInput(): Selector {
    return cy.get('[data-test=user-list-search-input]')
  }

  private get userList(): Selector {
    return cy.get('[data-test=users-list]')
  }

  private get amountInput(): Selector {
    return cy.get('[data-test=transaction-create-amount-input]')
  }

  private get addNoteInput(): Selector {
    return cy.get('[data-test=transaction-create-description-input]')
  }

  private get payBtn(): Selector {
    return cy.get('[data-test=transaction-create-submit-payment]')
  }

  private get requestBtn(): Selector {
    return cy.get('[data-test=transaction-create-submit-request]')
  }

  private get transactionSubmitted(): Selector {
    return cy.get('.MuiAlert-message')
  }

  typeContact(value: string) {
    this.searchInput.type(value)
    return this
  }

  typeAmount(amount: string) {
    this.amountInput.type(amount)
    return this
  }

  typeDesc(desc: string) {
    this.addNoteInput.type(desc)
    return this
  }

  clickContact() {
    this.userList.children().first().click()
    return this
  }

  clickRequestBtn() {
    this.requestBtn.click()
    return this
  }

  verifyTransactionSubmitted() {
    this.transactionSubmitted
      .should('be.visible')
      .and('contain.text', 'Transaction Submitted!')
    return this
  }

  createInterceptTransaction() {
    cy.intercept('POST', '/transactions').as('transaction')
    return this
  }
}

export default new Transaction()
