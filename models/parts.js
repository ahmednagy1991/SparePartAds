const db = require('mongoose');
const Joi = require('joi');


const Part = db.model('Part', db.Schema({
    part_name: String,
    part_type: Number,
    description:String,
    user_id:String,
    manufacture_id:String,
    price:Number, 
    status:String,
    waranty:Boolean,
    is_approved:Boolean,
    viewed:Number,
    likes:Number,
    is_featured:Boolean,
    rank:Number,
    created_at:{ type:String,default:Date.now()}
}));


module.exports.create = function (newpart) {
    return new Promise(function (resolve, reject) {
        let part = new Part(newpart);
        part = part.save((err, obj) => {
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
        Part.find().then((result)=>{
            resolve(result);
        });        
    });
}


exports.validate = function(part) {
    const schema = {
        part_name: Joi.string().required().min(5),
        part_type: Joi.number().required(),
        user_id:Joi.string().required(),
        manufacture_id:Joi.string().required(),
        price:Joi.number().required(),
        status:Joi.string().required(),
        waranty:Joi.boolean().required(),
        is_approved:Joi.boolean().required(),
        is_featured:Joi.boolean().required()        
    }
    return Joi.validate(part, schema);
}







