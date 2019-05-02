const express = require('express');
// const auth=require('../middleware/auth');
const router = express.Router();
const carBrand = require('../models/carBrand');
const carBrand_schema = require('../requestSchemas/carBrand');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    const brands = await carBrand.getAll();
    return res.send(brands);
});

router.post('/', async (req, res) => {
    const error = carBrand_schema.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    carBrand.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400);
    });
});

module.exports = router;
