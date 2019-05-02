const Joi = require('joi');

exports.validate = function (brnd) {
    const schema = {
        brand_name: Joi.string().required().min(5)
    };
    return Joi.validate(brnd, schema);
}