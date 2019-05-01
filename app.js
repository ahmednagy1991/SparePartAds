const express=require('express');
const app=express();
const user = require('./routes/user');
const parts = require('./routes/parts');
const categories = require('./routes/category');
const manufature = require('./routes/manufature');
const auth = require('./routes/auth');

const db = require('mongoose');
const config = require('config');
//://cloud.mongodb.com


// db.connect(config.get("db_host")).then(() => console.log("connected to databse successfuly"))
//     .catch(err => console.log("ther is an error while connecting to the databse", err));
//console.log(config.db);



if (config.get("node_envi") == "production")
{
    db.connect(config.get("db_host"), { useNewUrlParser: true, useCreateIndex: true }).then(() => console.log("connected to databse successfuly"))
        .catch(err => console.log("There is an error while connecting to the databse", err));
}
else
{
    db.connect(config.db, { useNewUrlParser: true, useCreateIndex: true }).then(() => console.log("connected to databse successfuly"))
        .catch(err => console.log("There is an error while connecting to the databse", err));
}



    
app.use('/api/parts',parts);
app.use('/api/category', categories);
app.use('/api/manufature', manufature);
app.use('/api/user', user);
app.use('/api/auth', auth);
console.log(config.application_url);

  

const port = config.get("PORT") || 3000
app.listen(port,()=>{ 
    console.log(`working on port ${port}`);
});