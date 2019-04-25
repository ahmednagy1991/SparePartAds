const express = require('express');
const router = express.Router();
const user = require('../models/user');
const _=require('lodash');
const helper=require('../utilities/utilites');
var bodyParser = require('body-parser');
const regTemplate=require('../email_templates/registration_template');
router.use(bodyParser.json());


router.post('/register', async (req, res) => {
    const error = user.validate(req.body);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    req.body.password = await helper.hash_password(req.body.password);
    user.Register(req.body).then((new_usr) => {
        helper.sendEmail(req.body.email, "spare parts activatoin link", regTemplate.getTemplate({ "activation_token": new_usr.activation_token}));
        res.send(_.pick(new_usr,["username","email"]));
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

router.get('/activate', (req, res) => {
    user.findUserByActivationtoken(req.query.activation_token).then((result) => {
        user.activateUser(result).then((result) => {
            return res.send(_.pick(result, ["_id", "username", "email"]));
        })
    }).catch((err) => {
        return res.status(500).send(err);
    });

});

module.exports = router;
