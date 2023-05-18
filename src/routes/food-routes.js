const express = require('express');
const router = express.Router();
const { food } = require('../models/index');

router.get('/food', async (req, res, next) => {
    let thing = await food.findAll();
    res.status(200).send(thing);
});

router.get('/food/:id', async (req, res, next) => {
    let foodById = await food.findAll({ where: { id: req.params.id } })
    res.status(200).send(foodById);
});

router.post('/food', async (req, res, next) => {
    let createFood = await food.create(req.body);
    res.status(200).send(createFood)
});

router.put('/food/:id', async (req, res, next) => {
    let theFood = await food.findOne({ where: { id: req.params.id } })
    let foodData = {
        type: req.body.type,
        color: req.body.color
    }
    theFood = await theFood.update(foodData)
    res.status(200).send(theFood);
});

router.delete('/food/:id', async (req, res, next) => {
    let itemDelete = await food.findOne({ where: { id: req.params.id } })
    itemDelete.destroy();
    res.status(200).send('Item Deleted')
});

module.exports = router;