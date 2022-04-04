import data from '../fixtures/data'
import Signup from '../pageObjects/signup'
import Signin from '../pageObjects/signin'
import Home from '../pageObjects/home'
import Transaction from '../pageObjects/transaction'
import Notifications from '../pageObjects/notifications'

describe('User creates request transaction', () => {
  before(() => {
    Signup.signupVisit()
      .typeFirstNameInput(data.firstName)
      .typeLastNameInput(data.lastName)
      .typeUsernameInput(data.username)
      .typePasswordInput(data.password)
      .typeConfirmPasswordInput(data.password)
      .clickSignUpBtn()

    Signin.signinVisit()
      .typeUsername(data.username)
      .typePassword(data.password)
      .clickSingin()

    Home.verifyHomeUrl()
      .clickGetStartedNextBtn()
      .typeBankName(data.bankName)
      .typeRoutingNumber(data.routingNumber)
      .typeAccountNumber(data.accountNumber)
      .clickSaveBankAccount()
      .clickDoneBankAccount()
      .clickLogoutBtn()
  })

  beforeEach(() => {
    Signin.signinVisit()
      .typeUsername(data.username)
      .typePassword(data.password)
      .clickSingin()
  })

  it('User login', () => {
    Home.verifyHomeUrl()
  })

  it('User creates request transaction', () => {
    Transaction.createInterceptTransaction()

    Home.clickNewTransaction()

    Transaction.clickContact()
      .typeAmount('10')
      .typeDesc('For coffee')
      .clickRequestBtn()
      .verifyTransactionSubmitted()
    // .verifyResponseTransaction()

    Home.homeVisit().clickLogoutBtn()

    Signin.typeUsername(data.secondUsername)
      .typePassword(data.secondPassword)
      .clickSingin()

    Home.clickNotificationsBtn()

    Notifications.verifyNotificationId()
  })

  afterEach(() => {
    Home.homeVisit().clickLogoutBtn()
  })
})
