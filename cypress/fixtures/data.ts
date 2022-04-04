import * as Chance from 'chance'

const chance = new Chance()

interface Data {
  firstName: string
  lastName: string
  username: string
  secondUsername: string
  password: string
  secondPassword: string
  nameContact: string
  bankName: string
  routingNumber: string
  accountNumber: string
}

const data: Data = {
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

export default data
