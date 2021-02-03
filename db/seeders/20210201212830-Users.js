'use strict';
const faker = require('faker');
const avatar = require('give-me-an-avatar');
const { bcrypt } = require('')

const password = await bcrypt.hash('theSixPack!', 10);

//Initial users array with 'demo user' included

let users = [
{
  firstName: 'Sean',
  lastName: 'Morrison',
  email: 'sean234@ymail.com',
  passwordHash: password,
  profileImage: avatar.giveMeAnAvatar(),
  phoneNumber: 4875169582
},
{
  firstName: 'Stephanie',
  lastName: 'Vargas',
  email: 'svargas@rocketmail.com',
  passwordHash: password,
  profileImage: avatar.giveMeAnAvatar(),
  phoneNumber: 5128496526
},
{
  firstName: 'demo',
  lastName: 'user',
  email: 'demo.user@demo.com',
  passwordHash: password,
  profileImage: avatar.giveMeAnAvatar(),
  phoneNumber: 6541254865
},
];

//Functionality to create more users will be added below



module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', users [
      {}
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
