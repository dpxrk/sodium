'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Salts', [{
        articleId: 2,
        userId: 1,
      },
      {
        articleId: 3,
        userId: 2,
      },
      {
        articleId: 1,
        userId: 2,
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Salts', null, {});

  }
};
