const Joi = require('joi');




exports.validate = function (cat) {
    const schema = {
        category_name: Joi.string().required().min(5)
    };
    return Joi.validate(cat, schema);
}
