'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    Category.hasOne(models.Article_category, { foreignKey: "categoryId" });
    Category.belongsToMany(model.Article, {
      through: Article_category, 
      otherKey: "articlesId", 
      foreignKey: "categoryId"
    })
  };
  return Category;
};