'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Article_category, { foreignKey: "categoryId" });
    Category.belongsToMany(models.Article, {
      through: "Article_category", 
      otherKey: "articleId", 
      foreignKey: "categoryId"
    })
  };
  return Category;
};