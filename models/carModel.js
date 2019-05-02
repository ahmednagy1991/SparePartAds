const db = require('mongoose');


const CarModel = db.model('CarModel', db.Schema({
    model_name: {
        type: String,
        required: true
    },
    barnd:{
        type:db.Schema.Types.ObjectId,
        ref:'CarBrand'
    }
    ,
    created_at: { type: String, default: Date.now() }
}));


module.exports.create = function (newmodel) {
    return new Promise(function (resolve, reject) {
        let model = new CarModel(newmodel);
        model = model.save((err, obj) => {
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
        CarModel.find().then((result) => {
            resolve(result);
        });
    });
}









