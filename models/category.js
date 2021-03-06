const db = require('mongoose');


const Category = db.model('Category', db.Schema({
    category_name: {
        type: String,
        required: true
    },
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








