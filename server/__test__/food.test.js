const request = require('supertest')
const {afterAll, expect, it, beforeAll} = require('@jest/globals')

const db = require('../models/index')
const app = require('../app')

const seedFood = require('../library/seedFood')

beforeAll(async () => {
    await seedFood()
})

afterAll(async () => {
    db.sequelize.close()
})

describe('GET /pub/food', () => {
    it('Get all food data', async () => {
        const response = await request(app).get('/pub/food')

        expect(response.status).toEqual(200)
        expect(response.body.rows[0]).toHaveProperty('name')
        expect(response.body.rows[0]).toHaveProperty('description')
        expect(response.body.rows[0]).toHaveProperty('price')
        expect(response.body.rows[0]).toHaveProperty('imgUrl')
        expect(response.body.rows[0]).toHaveProperty('authorId')
        expect(response.body.rows[0]).toHaveProperty('categoryId')
        expect(response.body.rows[0]).toHaveProperty('status')
        expect(response.body.rows[0]).toHaveProperty('User')
    })

    it('Get food for first page where response body contain 9 food with no offset', async () => {
        const response = await request(app).get('/pub/food?page=1').send({
            // page: 1
        })
        // console.log(response.body, '++++');
        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(9)
        expect(response.body.rows[0]).toHaveProperty('id')
        expect(response.body.rows[0].id).toEqual(1)
        expect(response.body.rows[0].name).toEqual("Burger")
        expect(response.body.rows[0].User.username).toEqual("cust1")
        expect(response.body.rows[8].id).toEqual(9)
    })

    it('Get food for second page where response body contain 9 food with 9 offset', async () => {
        const response = await request(app).get('/pub/food?page=2').send({
            // page: 2
        })
        // console.log(response.body, '++++');
        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(9)
        expect(response.body.rows[0]).toHaveProperty('id')
        expect(response.body.rows[0].id).toEqual(10)
        expect(response.body.rows[0].name).toEqual("Pizza")
        expect(response.body.rows[0].User.username).toEqual("cust2")
        expect(response.body.rows[8].id).toEqual(18)
    })

    it('Get food for first page where response body contain 9 food with Nasi as search', async () => {
        const response = await request(app).get('/pub/food?search=Nasi&page=1').send({
            // page: 1
        })

        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(9)
        expect(response.body.count).toEqual(16)
    })

    
    it('Get food where user input minimal and maximal price', async () => {
        const response = await request(app).get('/pub/food?minPrice=25000&maxPrice=100000')

        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(23)
    })

    it('Get food where user only input minimal price', async () => {
        const response = await request(app).get('/pub/food?minPrice=56000')

        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(15)
    })

    it('Get food where user only input maximal price', async () => {
        const response = await request(app).get('/pub/food?maxPrice=35000')

        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(7)
    })

    it('Get food where user  input maximal price, minimum price, and a search for second page', async () => {
        const response = await request(app).get('/pub/food?minPrice=38000&maxPrice=150000&search=Nasi&page=2')

        expect(response.status).toEqual(200)
        expect(response.body.rows.length).toEqual(7)
        expect(response.body.count).toEqual(16)
    })
})

describe('GET /pub/food:id',  () => {
    it('Get food where id is 1', async () => {
        const response = await request(app).get('/pub/food/1')

        expect(response.status).toEqual(200)
        expect(response.body.name).toEqual('Burger')
    })

    it('Get food where id is 6', async () => {
        const response = await request(app).get('/pub/food/6')

        expect(response.status).toEqual(200)
        expect(response.body.name).toEqual('Pizza')
    })

    it('Get food where id is does not exist', async () => {
        const response = await request(app).get('/pub/food/999')
        // console.log(response.body);
        expect(response.status).toEqual(404)
        expect(response.body.message).toEqual('Resource not found')
    })
})