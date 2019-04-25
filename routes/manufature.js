const express = require('express');
const router = express.Router();
const manufature = require('../models/manufacture');
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
    const error = manufature.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    manufature.create(req.body).then((result) => {
        return res.send(result);
    }).catch((err) => {
        return res.status(400);
    });
});

// router.get('/:id', (req, res) => {
//     res.send("hello spare parts");
// });

// router.put('/:id', (req, res) => {
//     res.send("hello spare parts");
// });
// router.delete('/:id', (req, res) => {
//     res.send("hello spare parts");
// });

module.exports = router;
