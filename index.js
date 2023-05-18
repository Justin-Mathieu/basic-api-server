require('dotenv');
const { sequelize } = require('./src/models');
const { start } = require('./src/server');
const port = process.env.PORT;

sequelize.sync()
    .then(() => {
        console.log('Successful database Connection');
        start(3001);
    })
    .catch(error => console.error(error));