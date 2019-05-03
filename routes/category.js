const express = require('express');
const anony=require('../middleware/anonyms');
const router = express.Router();
const category = require('../models/category');
const category_schema = require('../requestSchemas/category');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    const cats = await category.getAll();
    return res.send(cats);   
});

router.post('/', anony,(req, res) => {
    console.log("calling post category");
    console.log(req.body);
    const error = category_schema.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    category.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400);
    });
});

module.exports = router;
