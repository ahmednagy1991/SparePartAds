const db = require('mongoose');

const Part = db.model('Part', db.Schema({
    part_name: {
        type: String,
        required: true
    }
    ,
    category: {
        type: db.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    description: {
        type: String,
        required: true
    }
    ,
    user: {
        type: db.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    manufacture: {
        type: db.Schema.Types.ObjectId,
        ref:'Manufacture',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    waranty: {
        type: Boolean,
        default: false
    },
    is_approved: Boolean,
    viewed: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    is_featured: {
        type: Boolean,
        default: false
    },
    rank: {
        type: Number,
        default: 0
    },
    created_at: { type: String, default: Date.now() }
}));


module.exports.create = function (newpart) {
    return new Promise(function (resolve, reject) {
        let part = new Part(newpart);

        part = part.save((err, obj) => {
            if (err) {
                console.log(err);
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
        Part.find().then((result) => {
            resolve(result);
        });
    });
}










