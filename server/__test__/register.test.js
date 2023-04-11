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
    it('success register', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'maximuz',
            email: 'maximuz@gmail.com',
            password : 'password', 
            phoneNumber : '081245614561',
            address : 'address' 
        })
        expect(response.status).toEqual(201)
        expect(typeof response.body).toEqual('object')

        expect(response.body).toHaveProperty('id')
        expect(typeof response.body.id).toEqual("number")
        
        expect(response.body).toHaveProperty('email')
        expect(response.body.email).toEqual('maximuz@gmail.com')
    })

    it('User did not input email', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'maximuz',
            password : 'password', 
            phoneNumber : '081245614561',
            address : 'address' 
        })
        // console.log(response.body);
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Email can not be empty')
    })

    it('User did not input password', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'maximuz',
            email: 'maximuz@gmail.com',
            phoneNumber : '081245614561',
            address : 'address' 
        })
        // console.log(response.body);
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Password can not be empty')
    })

    it('User input empty string into email', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'maximuz',
            email: '',
            password : 'password', 
            phoneNumber : '081245614561',
            address : 'address' 
        })
        // console.log(response.body);
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Email can not be empty')
    })

    it('User input empty string into password', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'maximuz',
            email: 'maximuz@gmail.com',
            password: '',
            phoneNumber : '081245614561',
            address : 'address' 
        })
        // console.log(response.body);
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Password can not be empty')
    })

    it('Email already registered', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'unknown',
            email: 'cust2@gmail.com',
            password: '123456',
            phoneNumber : '081245614561',
            address : 'address' 
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Email already used')
    })

    it('Email type is invalid', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'unknown',
            email: 'cust2gmail.com',
            password: '123456',
            phoneNumber : '081245614561',
            address : 'address' 
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Email format is not recognized')
    })

    it('Username already used', async () => {
        const response = await request(app).post('/pub/register').send({
            username : 'cust1',
            email: 'cust1@gmail.com',
            password: '123456',
            phoneNumber : '081245614561',
            address : 'address' 
        })
        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Username already exist')
    })
})