const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Expenses = sequelize.define(
  "expenses",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    expense: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
  },
  {
    logging: false,
  }
);

module.exports = Expenses;
