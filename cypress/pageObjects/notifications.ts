class Notifications {
  verifyNotificationId(): this {
    cy.request('http://localhost:3001/notifications').as('notification')

    cy.get('@notification').then((res: any): any => {
      cy.wait('@transaction').then(({ request, response }) => {
        expect(res.body.results[0].transactionId).to.eq(
          response.body.transaction.id
        )
        expect(response.statusCode).to.eq(200)
        expect(request.body.description).to.eq(
          response.body.transaction.description
        )
        expect(request.body.senderId).to.eq(response.body.transaction.senderId)
        expect(request.body.receiverId).to.eq(
          response.body.transaction.receiverId
        )
      })
    })
    return this
  }
}

export default new Notifications()
