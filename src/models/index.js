const { Sequelize, DataTypes } = require('sequelize');
const { food } = require('./food');
const { clothes } = require('./clothes');
const Collection = require('./collection')

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);


const foodModel = food(sequelize);
const clothesModel = clothes(sequelize);


foodModel.hasMany(clothesModel);
clothesModel.belongsTo(foodModel)


module.exports = {
    sequelize,
    Food: new Collection(foodModel),
    Clothes: new Collection(clothesModel),
};