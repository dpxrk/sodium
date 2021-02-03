'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article_category = sequelize.define('Article_category', {
    categoryId: { allowNull: false, type: DataTypes.INTEGER },
  }, {});
  Article_category.associate = function(models) {
    Article_category.belongsTo(models.Article, { foreignKey: "articleId" });
  };
  return Article_category;
};