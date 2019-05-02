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


module.exports.getAllApprved = function () {
    return new Promise(function (resolve, reject) {
        Part.find({is_approved:true}).then((result) => {
            resolve(result);
        });
    });
}


module.exports.getAllNotApproved = function () {
    return new Promise(function (resolve, reject) {
        Part.find({ is_approved: false }).then((result) => {
            resolve(result);
        });
    });
}

module.exports.getAllNE = function () {
    return new Promise(function (resolve, reject) {
        Part.find().then((result) => {
            resolve(result);
        });
    });
}



module.exports.getById = function (partId) {
    return new Promise(function (resolve, reject) {
        Part.findOne({ _id: partId}).then((result) => {
            resolve(result);
        });
    });
}


module.exports.getUserParts = function (userID) {
    return new Promise(function (resolve, reject) {
        Part.find({ user: userID }).then((result) => {
            resolve(result);
        });
    });
}

module.exports.softDeletePart = function (partID) {
    return new Promise(function (resolve, reject) {
        Part.find({ _id: partID }).then((result) => {
            result.is_approved=false;
            Part.update({ _id: partID }, result).then((subRes)=>{
                resolve(subRes);
            });
           
        });
    });
}










