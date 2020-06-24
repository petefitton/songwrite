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
    return queryInterface.bulkInsert('achievements', [
      { name: 'namer one',
        imageUrl: 'an url',
        description: 'Some desc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'namer two',
        imageUrl: 'an url',
        description: 'Some desc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { name: 'namer thr',
        imageUrl: 'an url',
        description: 'Some desc',
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
    return queryInterface.bulkDelete('achievements', null, {})
  }
};
