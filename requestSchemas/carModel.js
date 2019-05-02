const Joi = require('joi');

exports.validate = function (model) {
    const schema = {
        model_name: Joi.string().required().min(5),
        barnd: Joi.string().required()
    };
    return Joi.validate(model, schema);
}