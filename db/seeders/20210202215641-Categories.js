"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          type: "News",
        },
        {
          type: "Entertainment",
        },
        {
          type: "Politics",
        },
        {
          type: "Non-Sense",
        },
        {
          type: "Humor",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
