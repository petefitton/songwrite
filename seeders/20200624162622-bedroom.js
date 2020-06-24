'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('bedrooms', [
      { size: 0,
        weeklyRent: 250,
        slots: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { size: 1,
        weeklyRent: 350,
        slots: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { size: 2,
        weeklyRent: 450,
        slots: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('bedrooms', null, {})
  }
};
