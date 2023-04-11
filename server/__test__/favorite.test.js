require('dotenv').config()
const request = require('supertest')
const {afterAll, expect, it, beforeAll} = require('@jest/globals')
const {createToken} = require('../middleware/jwt');

const db = require('../models/index')
const app = require('../app')

const seedFavorite = require('../library/seedFavorite')
const seedFood = require('../library/seedFood')
const token = createToken({
    email: 'cust1@gmail.com',
    userId: 1
})

beforeAll(async () => {
    await seedFood()
    await seedFavorite()
})

afterAll(async () => {
    db.sequelize.close()
})

describe('GET /pub/favorites/UserId', () => {
    it('Get favorites by id', async () => {
        // console.log(token, 'TOKEEENN');
        const response = await request(app).get('/pub/favorites/1').set('token', token)

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(3)
        expect(response.body[0]).toHaveProperty('FoodId')
        expect(response.body[0]).toHaveProperty('Food')
    })

    it('Get favorites by id before login', async () => {
        const response = await request(app).get('/pub/favorites/1')

        expect(response.status).toEqual(401)
        expect(response.body.message).toEqual('Invalid token')
    })

    it('Get favorites by id with invalid token', async () => {
        const response = await request(app).get('/pub/favorites/1')

        expect(response.status).toEqual(401)
        expect(response.body.message).toEqual('Invalid token')
    })
})

describe('POST /pub/favorites/UserId/FoodId', () => {
    it('Success insert new food to favorite', async () => {
        const response = await request(app).post('/pub/favorites/1/11').set('token', token)

        expect(response.status).toEqual(201)
        expect(response.body).toHaveProperty('FoodId')
        expect(response.body).toHaveProperty('UserId')
    })

    it('Failed to insert new food to favorite because food not found', async () => {
        const response = await request(app).post('/pub/favorites/1/99').set('token', token)

        expect(response.status).toEqual(404)
        expect(response.body.message).toEqual('Resource not found')
    })

    it('Food already included in favorites', async () => {
        const response = await request(app).post('/pub/favorites/1/1').set('token', token)

        expect(response.status).toEqual(400)
        expect(response.body.message).toEqual('Food already added to favorites')
    })


})