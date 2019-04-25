const db = require('mongoose');
const Joi = require('joi');


const Manufacture = db.model('Manufacture', db.Schema({
    manufacture_name: String,
    created_at: { type: String, default: Date.now() }
}));


module.exports.create = function (newman) {
    return new Promise(function (resolve, reject) {
        let manufacture = new Manufacture(newman);
        manufacture = manufacture.save((err, obj) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(obj);
            }
        });
    });
}


module.exports.getAll = function () {
    return new Promise(function (resolve, reject) {
        Manufacture.find().then((result) => {
            resolve(result);
        });
    });
}


exports.validate = function (man) {
    const schema = {
        manufacture_name: Joi.string().required().min(5)
    };
    return Joi.validate(man, schema);
}







