const express = require('express');
const router = express.Router();
const { clothes } = require('../models/index');

router.get('/clothes', async (req, res, next) => {
    let allClothes = await clothes.findAll();
    res.status(200).send(allClothes);
});

router.get('/clothes/:id', async (req, res, next) => {
    let clothesById = await clothes.findOne({ where: { id: req.params.id } })
    res.status(200).send(clothesById);
});

router.post('/clothes', async (req, res, next) => {
    let createClothes = await clothes.create(req.body);
    res.status(200).send(createClothes)
});

router.put('/clothes/:id', async (req, res, next) => {
    let newClothes = await clothes.findOne({ where: { id: req.params.id } })
    let clothesData = {
        type: req.body.type,
        color: req.body.color
    }
    newClothes = await newClothes.update(clothesData)
    res.status(200).send(newClothes);
});

router.delete('/clothes/:id', async (req, res, next) => {
    let itemDelete = await clothes.findOne({ where: { id: req.params.id } })
    itemDelete.destroy();
    res.status(200).send('Item Deleted')
});

module.exports = router;