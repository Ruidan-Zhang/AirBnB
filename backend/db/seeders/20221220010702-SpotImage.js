'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
} //this block of code is required in every seeder file.

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'www.first-spot-image.com',
        preview: true
      },
      {
        spotId: 2,
        url: 'www.second-spot-image.com',
        preview: false
      },
      {
        spotId: 3,
        url: 'www.third-spot-image.com',
        preview: true
      },
      {
        spotId: 1,
        url: 'www.fourth-spot-image.com',
        preview: false
      },
      {
        spotId: 2,
        url: 'www.fifth-spot-image.com',
        preview: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
