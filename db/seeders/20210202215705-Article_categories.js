'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Article_categories', [{
        articleId: 2,
        categoryId: 1,
      },
      {
        articleId: 1,
        categoryId: 2,
      },
      {
        articleId: 3,
        categoryId: 3,
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Article_categories', null, {});

  }
};
