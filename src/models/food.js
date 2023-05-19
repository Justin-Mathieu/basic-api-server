const { DataTypes } = require('sequelize');

function food(sequelize) {
    return sequelize.define('food', {
        type: DataTypes.STRING,
        color: DataTypes.STRING
    });
}

module.exports = {
    food
}