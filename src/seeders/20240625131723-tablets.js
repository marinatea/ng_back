"use strict";

const { tabletsData } = require('../apiData/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const transformedTabletData = tabletsData.map((tablet) => ({
      ...tablet,
      capacityAvailable: tablet.capacityAvailable,
      colorsAvailable: tablet.colorsAvailable,
      images: tablet.images,
      description: JSON.stringify(tablet.description),
      cell: tablet.cell,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Tablets", transformedTabletData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Tablets", null, {});
  },
};
