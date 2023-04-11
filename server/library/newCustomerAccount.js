const { User } = require('../models')
const db = require('../models')
const queryInterface = db.sequelize.getQueryInterface()
const bcrypt = require('bcrypt');

async function bulkInsertCustomer() {
    try {
    await queryInterface.bulkDelete('Users', {}, {truncate: true, restartIdentity: true, cascade:true})
    
    // console.log('MASUUUUUUUKKKKKKKKKK');
    await User.bulkCreate([
        {
            username: 'cust1', 
            email: 'cust1@gmail.com',
            password: bcrypt.hashSync("123456", 10),
            role: "customer",
            phoneNumber: "081345674568",
            address: "Bekasi",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'cust2', 
            email: 'cust2@gmail.com',
            password: bcrypt.hashSync("123456", 10),
            role: "customer",
            phoneNumber: "081345674568",
            address: "Bekasi",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            username: 'cust3', 
            email: 'cust3@gmail.com',
            password: bcrypt.hashSync("123456", 10),
            role: "customer",
            phoneNumber: "081345674568",
            address: "Bekasi",
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ])
    } catch (error) {
        console.log(error, '<<<<<<<<<<<<<<<<<<<')
    }
    
}

module.exports = bulkInsertCustomer