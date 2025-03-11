'use strict';
const { Op } = require('sequelize');

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

    await queryInterface.bulkInsert('Airplane', [
       {
         modelNumber: 'airbus380',
         capacity: 900,
         createdAt: new Date(),  // ✅ Explicitly add timestamps
         updatedAt: new Date(),
       },
       {
        modelNumber: 'boeing777',
        capacity: 450,
        createdAt: new Date(),  // ✅ Explicitly add timestamps
        updatedAt: new Date(),
       }
      ]);
  },

  async down (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkDelete('Airplane', {[Op.or]: [{modelNumber: 'airbus380'}, {modelNumber: 'boeing777'}]});
  }
};
