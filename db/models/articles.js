'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    authorId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Users" }},
    title: { allowNull: false, type: DataTypes.STRING(500) },
    content: { allowNull: false, type: DataTypes.TEXT },
  }, {});
  Article.associate = function(models) {
    Article.hasOne(models.Comment, { foreignKey: "articleId"});
    Article.hasMany(models.Salt, { foreignKey: "articleId" });
    Article.belongsToMany(models.Category, {
      through: Article_category, 
      otherKey: "categoryId", 
      foreignKey: "articleId"
    })
  };
  return Article;
};