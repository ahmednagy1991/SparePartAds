const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const part = require('../models/parts');
const part_schema = require('../requestSchemas/part');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', (req, res) => {
    part.getAll().then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});


router.get('/all', (req, res) => {
    part.getAllApprved().then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});


router.get('/allNA', (req, res) => {
    part.getAllNotApproved().then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});

router.get('/allNE', (req, res) => {
    part.getAllNE().then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});

router.post('/', auth, async (req, res) => {
    const error = part_schema.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    console.log("user_id: " + req.user._id);
    req.body.user = req.user._id;
    part.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400).send(err);
    });
});

router.get('/partDetails/:id', (req, res) => {
    part.getById(req.params.id).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});


router.get('/myParts', auth, (req, res) => {
    part.getUserParts(req.user.id).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});

router.put('/:id', (req, res) => {
    res.send("hello spare parts");
});

router.delete('/:id', (req, res) => {
    part.softDeletePart(req.params.id).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.send(400);
    });
});

module.exports = router;
