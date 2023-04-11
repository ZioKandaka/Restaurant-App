const request = require('supertest')
const {afterAll, expect, it, beforeAll} = require('@jest/globals')

const db = require('../models/index')
const queryInterface = db.sequelize.getQueryInterface()
const app = require('../app')

const bulkInsertCustomer = require('../library/newCustomerAccount');

beforeAll(async () => {
    await bulkInsertCustomer()
})

afterAll(async () => {
    db.sequelize.close()
})

describe('POST /pub/login', () => {
    it('should send a response with status 200 and body containing token, id, and role with correct value', async () => {
        const response = await request(app).post('/pub/login').send({email: 'cust1@gmail.com', password: "123456"})
        //kalau headers pakai set -> .set('key', 'value')
        // console.log(response.body, '<<<<');
        expect(response.status).toEqual(200)
        expect(typeof response.body).toEqual('object')

        expect(response.body).toHaveProperty('token')
        expect(typeof response.body.token).toEqual('string')
        
        expect(response.body).toHaveProperty('customerId')
        expect(typeof response.body.customerId).toEqual('number')
        expect(response.body.customerId).toEqual(1)

        expect(response.body).toHaveProperty('role')
        expect(typeof response.body.role).toEqual('string')
        expect(response.body.role).toEqual('customer')

    })

    it('should send a response with status 401 due to wrong password', async () => {
        const response = await request(app).post('/pub/login').send({email: 'cust1@gmail.com', password: "1234567"})
        //kalau headers pakai set -> .set('key', 'value')
        // console.log(response.body);
        expect(response.status).toEqual(401)
        expect(response.body.message).toEqual('Wrong e-mail or password')
    })

    it('should send a response with status 401 due to email not exists', async () => {
        const response = await request(app).post('/pub/login').send({email: 'cust1a@gmail.com', password: "1234567"})
        
        expect(response.status).toEqual(401)
        expect(response.body.message).toEqual('Wrong e-mail or password')
    })

    it('should send a response with status 400 due to empty input', async () => {
        const response = await request(app).post('/pub/login').send({email: null, password: null})

        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Please fill e-mail or password')
    })
})