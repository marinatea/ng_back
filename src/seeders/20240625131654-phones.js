"use strict";

const phonesData = require("../apiData/phones.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const transformedPhoneData = phonesData.map((phone) => ({
      ...phone,
      capacityAvailable: phone.capacityAvailable,
      colorsAvailable: phone.colorsAvailable,
      images: phone.images,
      description: JSON.stringify(phone.description),
      cell: phone.cell,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Phones", transformedPhoneData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Phones", null, {});
  },
};
