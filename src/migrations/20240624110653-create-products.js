'use strict';

const { INTEGER, STRING, DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: INTEGER,
      },
      category: {
        type: STRING,
      },
      itemId: {
        type: STRING,
      },
      name: {
        type: STRING,
      },
      fullPrice: {
        type: INTEGER,
      },
      price: {
        type: INTEGER,
      },
      screen: {
        type: STRING,
      },
      capacity: {
        type: STRING,
      },
      color: {
        type: STRING,
      },
      ram: {
        type: STRING,
      },
      year: {
        type: INTEGER,
      },
      image: {
        type: STRING,
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
    await queryInterface.dropTable('Products');
  }
};
