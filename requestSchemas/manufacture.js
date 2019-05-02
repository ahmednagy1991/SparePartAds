const Joi = require('joi');


exports.validate = function (man) {
    const schema = {
        manufacture_name: Joi.string().required().min(5)
    };
    return Joi.validate(man, schema);
}
