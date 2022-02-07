class Transaction {
  get searchInput() {
    return cy.get('[data-test=user-list-search-input]')
  }

  get userList() {
    return cy.get('[data-test=users-list]')
  }

  get amountInput() {
    return cy.get('[data-test=transaction-create-amount-input]')
  }

  get addNoteInput() {
    return cy.get('[data-test=transaction-create-description-input]')
  }

  get payBtn() {
    return cy.get('[data-test=transaction-create-submit-payment]')
  }

  get requestBtn() {
    return cy.get('[data-test=transaction-create-submit-request]')
  }

  get transactionSubmitted() {
    return cy.get('.MuiAlert-message')
  }

  typeContact(value) {
    this.searchInput.type(value)
    return this
  }

  typeAmount(amount) {
    this.amountInput.type(amount)
    return this
  }

  typeDesc(desc) {
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
