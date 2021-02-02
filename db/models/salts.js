'use strict';
module.exports = (sequelize, DataTypes) => {
  const Salts = sequelize.define('Salts', {
    articleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Salts.associate = function(models) {
    // associations can be defined here
  };
  return Salts;
};