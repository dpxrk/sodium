'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { allowNull: false, type: DataTypes.STRING },
    lastName: { allowNull: false, type: DataTypes.STRING },
    email: { allowNull: false, type: DataTypes.STRING },
    passwordHash: { allowNull: false, type: DataTypes.STRING },
    profileImage: { type: DataTypes.INTEGER },
    phoneNumber: { allowNull: false, type: DataTypes.NUMERIC },
    intro: DataTypes.TEXT
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Salt, { foreignKey: "userId" });
    User.hasMany(models.Article, { foreignKey: "authorId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
  };
  return User;
};