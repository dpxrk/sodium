'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article_categories = sequelize.define('Article_categories', {
    categoryId: DataTypes.INTEGER
  }, {});
  Article_categories.associate = function(models) {
    // associations can be defined here
  };
  return Article_categories;
};