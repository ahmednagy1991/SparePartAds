const express = require('express');
const router = express.Router();
const user = require('../models/user');
const _ = require('lodash');
const helper = require('../utilities/utilites');
const Joi = require('joi');

var bodyParser = require('body-parser');
router.use(bodyParser.json());

const schema = {
    password: Joi.string().required().min(5),
    email: Joi.string().required().email(),
};



router.post('/login', (req, res) => {
    const error = Joi.validate(req.body, schema);
    if (error.error) return res.status(400).send(error.error.details[0].message);
    user.findUserByMail(req.body.email).then((result) => {
        helper.compare_password(req.body.password, result.password).then((valid) => {
            if (valid) {
                helper.generateToken(_.pick(result, ["_id", "username", "email"])).then((token) => {
                    return res.header('x-auth-token', token).send(token);
                }).catch((err) => {
                    return res.status(500).send(err);
                });
            }
            else {
                return res.status(500).send("Invalid username or password");
            }
        }).catch((err) => {
            return res.status(500).send(err);
        });
    }).catch((err) => {
        return res.status(500).send(err);
    });
});


module.exports = router;
