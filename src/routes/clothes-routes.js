const express = require('express');
const router = express.Router();
const { Clothes } = require('../models/index');

router.get('/clothes', async (req, res, next) => {
    let allClothes = await Clothes.read();
    res.status(200).send(allClothes);
});

router.get('/clothes/:id', async (req, res, next) => {
    let clothesById = await Clothes.read(req.params.id)
    res.status(200).send(clothesById);
});

router.post('/clothes', async (req, res, next) => {
    let createClothes = await Clothes.create(req.body);
    res.status(200).send(createClothes)
});

router.put('/clothes/:id', async (req, res, next) => {
    let newClothes = await Clothes.update(req.params.id)
    let clothesData = {
        type: req.body.type,
        color: req.body.color
    }
    newClothes = await newClothes.update(clothesData)
    res.status(200).send(newClothes);
});

router.delete('/clothes/:id', async (req, res, next) => {
    let itemDelete = await Clothes.delete(req.params.id)
    itemDelete.destroy();
    res.status(200).send('Item Deleted')
});

module.exports = router;