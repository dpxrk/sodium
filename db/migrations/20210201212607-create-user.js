'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      passwordHash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.NUMERIC(10)
      },
      intro: {
        type: Sequelize.TEXT
      },
      registeredAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};