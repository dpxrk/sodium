"use strict";
const { User } = require("../models");
const { Article } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert(
      "Salts",
      [
        {
          articleId: 1,
          userId: 1,
        },
        {
          articleId: 2,
          userId: 2,
        },
        {
          articleId: 3,
          userId: 3,
        },
        {
          articleId: 4,
          userId: 4,
        },
        {
          articleId: 5,
          userId: 5,
        },
        {
          articleId: 6,
          userId: 6,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Salts", null, {});
  },
};
