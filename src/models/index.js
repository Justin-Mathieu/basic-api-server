const { Sequelize, DataTypes } = require('sequelize');
const { foodModel } = require('./food');
const { clothesModel } = require('./clothes');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelize = new Sequelize('postgres://localhost:5432/basic-api-server');
const food = foodModel(sequelize);
const clothes = clothesModel(sequelize);

module.exports = {
    sequelize,
    food,
    clothes,
};