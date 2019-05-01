const express = require('express');
const router = express.Router();
const auth=require("../middleware/auth");
const part = require('../models/parts');
const part_schema = require('../requestSchemas/part');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req, res) => {
    part.getAll().then((result)=>{
        return res.send(result);
    }).catch((err)=>{
        return res.send(400);
    });   
});

router.post('/', auth, async (req, res) => {
    const error = part_schema.validate(req.body);   
    if (error.error) return res.status(400).send(error.error.details[0].message); 
    console.log("user_id: " + req.user._id);
    req.body.user= req.user._id; 
    part.create(req.body).then((result) => {       
        return res.send(result);
    }).catch((err) => {     
        return res.status(400).send(err);
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
