'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Users" }},
    articleId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Articles" }},
    contents: { allowNull: false, type: DataTypes.TEXT }, 
    }, {});
  Comment.associate = function(models) {
    Comment.hasOne(models.Users, { foreignKey: "userId" });
    Comment.hasOne(models.Article, { foreignKey: "articleId" });
  };
  return Comment;
};