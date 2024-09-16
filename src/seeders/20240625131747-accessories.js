"use strict";

const accessoriesData = require("../apiData/accessories.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const transformedAccessoryData = accessoriesData.map((accessory) => ({
      ...accessory,
      capacityAvailable: accessory.capacityAvailable,
      colorsAvailable: accessory.colorsAvailable,
      images: accessory.images,
      description: JSON.stringify(accessory.description),
      cell: accessory.cell,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert(
      "Accessories",
      transformedAccessoryData,
      {}
    );
  },

  down: async (queryInterface) => {
    // Usuń dane z bazy danych
    await queryInterface.bulkDelete("Accessories", null, {});
  },
};
