require('dotenv').config();
const { sequelize } = require('./src/models');
const { start } = require('./src/server');
const PORT = process.env.PORT;

sequelize.sync()
    .then(() => {
        console.log('Successful database Connection');
        start(PORT);
    })
    .catch(error => console.error(error));