const { Favorite } = require('../models')
const db = require('../models')
const queryInterface = db.sequelize.getQueryInterface()
const bcrypt = require('bcrypt');

async function seedFavorite() {
    try {
    await queryInterface.bulkDelete('Favorites', {}, {truncate: true, restartIdentity: true, cascade:true})
    
    // console.log('MASUUUUUUUKKKKKKKKKK');
    await Favorite.bulkCreate([
        {
            UserId: 1,
            FoodId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            UserId: 2,
            FoodId: 4,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            UserId: 1,
            FoodId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            UserId: 2,
            FoodId: 5,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            UserId: 1,
            FoodId: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            UserId: 2,
            FoodId: 6,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ])
    } catch (error) {
        console.log(error, '<<<<<<<<<<<<<<<<<<<')
    }
    
}

module.exports = seedFavorite