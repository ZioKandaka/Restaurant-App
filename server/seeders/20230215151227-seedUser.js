'use strict';
const {crypt} = require('../helpers/helper')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
    {
      username: 'Admin Restaurant',
      email: 'admin@gmail.com',
      password: '123456',
      role: 'admin',
      phoneNumber: '081341516171',
      address: 'Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Staff 1',
      email: 'staff1@gmail.com',
      password: '111111',
      role: 'staff',
      phoneNumber: '081341516172',
      address: 'Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Staff 2',
      email: 'staff2@gmail.com',
      password: '222222',
      role: 'staff',
      phoneNumber: '081341516173',
      address: 'Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Staff 3',
      email: 'staff3@gmail.com',
      password: '333333',
      role: 'staff',
      phoneNumber: '081341516174',
      address: 'Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Staff 4',
      email: 'staff4@gmail.com',
      password: '444444',
      role: 'staff',
      phoneNumber: '081341516174',
      address: 'Jakarta',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
   data.forEach(el => {
    el.password = crypt(el.password)
   })
   await queryInterface.bulkInsert('Users', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
