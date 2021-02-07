"use strict";
const { Article } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let articleNum = await Article.count();
    return queryInterface.bulkInsert(
      "Article_categories",
      [
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 1,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 2,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 2,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 3,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 3,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 4,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 4,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 1,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 5,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 5,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 5,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 5,
        },
        {
          articleId: Math.floor(Math.random() * articleNum + 1),
          categoryId: 5,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Article_categories", null, {});
  },
};
