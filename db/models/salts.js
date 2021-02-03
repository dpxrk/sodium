'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salt = sequelize.define('Salt', {
    articleId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Articles" }},
    userId: { allowNull: false, type: DataTypes.INTEGER, refernces: { model: "Users" }},
  }, {});
  Salt.associate = function(models) {
    Salt.belongsTo(models.Article, { foreignKey: "articleId" });
    Salt.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Salt;
};