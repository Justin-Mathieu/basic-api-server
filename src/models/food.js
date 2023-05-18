const { DataTypes } = require('sequelize');

function foodModel(sequelize) {
    return sequelize.define('food', {
        type: DataTypes.STRING,
        color: DataTypes.STRING
    });
}

module.exports = {
    foodModel
}