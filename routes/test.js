const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/', async (req, res) => {    
        return res.send("ok");
});



module.exports = router;
