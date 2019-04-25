const db = require('mongoose');
const Joi = require('joi');


const Category = db.model('Category', db.Schema({
    category_name: String,   
    created_at: { type: String, default: Date.now() }
}));


module.exports.create = function (newcat) {
    return new Promise(function (resolve, reject) {
        let cat = new Category(newcat);
        cat = cat.save((err, obj) => {
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
        Category.find().then((result) => {
            resolve(result);
        });
    });
}


exports.validate = function(cat) {
    const schema = {
        category_name: Joi.string().required().min(5)         
    };
    return Joi.validate(cat, schema);
}







