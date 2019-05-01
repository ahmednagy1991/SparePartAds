const Joi = require('joi');


exports.validate = function (part) {
    const schema = {
        part_name: Joi.string().required().min(5),
        category: Joi.string().required(),
        manufacture: Joi.string().required(),
        price: Joi.number().required(),
        status: Joi.string().required(),
        waranty: Joi.boolean().required(),
        is_approved: Joi.boolean().required(),
        is_featured: Joi.boolean().required()
    }
    return Joi.validate(part, schema);
}