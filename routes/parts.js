const express = require('express');
const router = express.Router();
const part = require('../models/parts');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req, res) => {
    part.getAll().then((result)=>{
        return res.send(result);
    }).catch((err)=>{
        return res.send(400);
    });   
});

router.post('/', async (req, res) => {
    const error = part.validate(req.body);   
    if (error.error) return res.status(400).send(error.error.details[0].message);   
    part.create(req.body).then((result) => {       
        return res.send(result);
    }).catch((err) => {     
        return res.status(400);
    });
});

router.get('/:id', (req, res) => {
    res.send("hello spare parts");
});

router.put('/:id', (req, res) => {
    res.send("hello spare parts");
});
router.delete('/:id', (req, res) => {
    res.send("hello spare parts");
});

module.exports = router;
