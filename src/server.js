const express = require('express');
const cors = require('cors');
const { notFound } = require('./error-handlers/404');
const { error500 } = require('./error-handlers/500');
const { logger } = require('./middleware/logger')
const foodRoute = require('./routes/food-routes');
const clothesRoute = require('./routes/clothes-routes');

const server = express();

//Middleware
server.use(express.json());
server.use(cors());
server.use(logger);

//Routes
server.use(clothesRoute);
server.use(foodRoute);

//Proof of life 
server.get('/', (req, res, next) => {
    res.status(200).send('Home route working');
});

//Error handling
server.use(error500, notFound)

//Start function
const start = (port) => {
    server.listen(port, () => console.log(`server listening on:${port}`));
};

module.exports = { server, start };