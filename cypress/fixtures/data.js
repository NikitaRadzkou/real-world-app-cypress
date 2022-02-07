import Chance from 'chance'

const chance = new Chance()

export default {
  firstName: chance.first(),
  lastName: chance.last(),
  username: chance.first() + chance.last(),
  secondUsername: 'Damon57',
  password: 'test12345',
  secondPassword: 's3cret',
  nameContact: 'Arely',
  bankName: 'Test Bank',
  routingNumber: '123456789',
  accountNumber: '987654321',
}
