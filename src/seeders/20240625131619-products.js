"use strict";

const productsData = require("../apiData/products.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const transformedProductData = productsData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Products", transformedProductData, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
