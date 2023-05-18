const { DataTypes } = require('sequelize');

function clothesModel(sequelize) {
    return sequelize.define('clothes', {
        type: DataTypes.STRING,
        color: DataTypes.STRING
    });
}

module.exports = {
    clothesModel
}