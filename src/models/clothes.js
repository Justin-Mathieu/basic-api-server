const { DataTypes } = require('sequelize');

function clothes(sequelize) {
    return sequelize.define('clothes', {
        type: DataTypes.STRING,
        color: DataTypes.STRING
    });
}

module.exports = {
    clothes
}