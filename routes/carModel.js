const express = require('express');
// const auth=require('../middleware/auth');
const router = express.Router();
const carModel = require('../models/carModel');
const carModel_schema = require('../requestSchemas/carModel');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    const models = await carModel.getAll();
    return res.send(models);
});

router.post('/', async (req, res) => {
    const error = carModel_schema.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    carModel.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400);
    });
});

module.exports = router;
