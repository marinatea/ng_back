'use strict';

const { STRING, INTEGER, ARRAY, JSON, DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Tablets', {
      id: {
        type: STRING(1024),
        primaryKey: true,
        allowNull: false,
      },
      category: {
        type: STRING,
      },
      namespaceId: {
        type: STRING(1024),
      },
      name: {
        type: STRING(1024),
      },
      capacityAvailable: {
        type: ARRAY(STRING(1024)),
      },
      capacity: {
        type: STRING(1024),
      },
      priceRegular: {
        type: INTEGER,
      },
      priceDiscount: {
        type: INTEGER,
      },
      colorsAvailable: {
        type: ARRAY(STRING(1024)),
      },
      color: {
        type: STRING(1024),
      },
      images: {
        type: ARRAY(STRING),
      },
      description: {
        type: JSON,
      },
      screen: {
        type: STRING(1024),
      },
      processor: {
        type: STRING(1024),
      },
      resolution: {
        type: STRING(1024),
      },
      ram: {
        type: STRING(1024),
      },
      camera: {
        type: STRING(1024),
      },
      zoom: {
        type: STRING(1024),
      },
      cell: {
        type: ARRAY(STRING(1024)),
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Tablets');
  }
};
