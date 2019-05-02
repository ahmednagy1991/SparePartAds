const express = require('express');
const router = express.Router();
const manufature = require('../models/manufacture');
const manufature_schema = require('../requestSchemas/manufacture');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req, res) => {
    manufature.getAll().then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});

router.post('/', async (req, res) => {
    const error = manufature_schema.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    manufature.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400);
    });
});

module.exports = router;
