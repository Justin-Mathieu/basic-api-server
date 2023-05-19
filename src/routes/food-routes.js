const express = require('express');
const router = express.Router();
const { Food, Clothes } = require('../models/index');



router.get('/food', async (req, res, next) => {
    let thing = await Food.read();
    res.status(200).send(thing);
});

router.get('/foodandclothes', async (req, res, next) => {
    console.log(Clothes)
    let both = Food.read({ includes: { model: clothes } })
    res.status(200).send(both);
});

router.get('/food/:id', async (req, res, next) => {
    let foodById = await Food.read(req.params.id)
    res.status(200).send(foodById);
});

router.post('/food', async (req, res, next) => {
    let createFood = await Food.create(req.body);
    res.status(200).send(createFood)
});

router.put('/food/:id', async (req, res, next) => {
    let theFood = await Food.update(req.params.id)
    let foodData = {
        type: req.body.type,
        color: req.body.color
    }
    theFood = await theFood.update(foodData)
    res.status(200).send(theFood);
});

router.delete('/food/:id', async (req, res, next) => {
    let itemDelete = await Food.delete(req.params.id)
    itemDelete.destroy();
    res.status(200).send('Item Deleted')
});

module.exports = router;