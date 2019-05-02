const db = require('mongoose');



const Manufacture = db.model('Manufacture', db.Schema({
    manufacture_name: {
        type: String,
        required: true
    },
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








