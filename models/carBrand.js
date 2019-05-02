const db = require('mongoose');



const CarBrand = db.model('CarBrand', db.Schema({
    brand_name: {
        type: String,
        required: true
    },
    created_at: { type: String, default: Date.now() }
}));


module.exports.create = function (newbrand) {
    return new Promise(function (resolve, reject) {
        let brnd = new CarBrand(newbrand);
        brnd = brnd.save((err, obj) => {
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
        CarBrand.find().then((result) => {
            resolve(result);
        });
    });
}









