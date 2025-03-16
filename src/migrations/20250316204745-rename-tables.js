'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Step 1: Drop the foreign key constraint
    //await queryInterface.removeConstraint('Airports', 'city_fkey_constraint');

    // Step 2: Rename tables
    await queryInterface.renameTable('Cities', 'City');
    await queryInterface.renameTable('Airports', 'Airport');

    // Step 3: Re-add the foreign key with the new table name
    await queryInterface.addConstraint('Airport', {
      type: 'FOREIGN KEY',
      name: 'city_fkey_constraint',
      fields: ['cityId'],
      references: {
        table: 'City',
        field: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverse process if migration is undone

    // Step 1: Drop the foreign key constraint
    await queryInterface.removeConstraint('Airport', 'city_fkey_constraint');

    // Step 2: Rename tables back to original
    await queryInterface.renameTable('City', 'Cities');
    await queryInterface.renameTable('Airport', 'Airports');
  }
};
