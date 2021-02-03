'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Comments', [{
        userId: 2,
        articleId: 1,
        content: 'Questionable at best....'

      },
      {
        userId: 2,
        articleId: 3,
        content: 'Excited to hear more about this in the coming months! <3 <3 <3'

      },
      {
        userId: 1,
        articleId: 2,
        content: 'just reading about this garbage makes me SALTY >:('

      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Comments', null, {});

  }
};
