'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salt = sequelize.define('Salt', {
    articleId: { allowNull: false, type: DataTypes.INTEGER, references: { model: "Articles" }},
    userId: { allowNull: false, type: DataTypes.INTEGER, refernces: { model: "Users" }},
  }, {});
  Salt.associate = function(models) {
    Salt.belongsTo(models.Articles, { foreignKey: "articleId" });
    Salt.belongsTo(models.Users, { foreignKey: "userId" });
  };
  return Salt;
};