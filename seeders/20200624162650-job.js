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
    return queryInterface.bulkInsert('jobs', [
      { level: 0,
        weeklyIncome: 350,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { level: 1,
        weeklyIncome: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { level: 2,
        weeklyIncome: 550,
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
    return queryInterface.bulkDelete('jobs', null, {})
  }
};
