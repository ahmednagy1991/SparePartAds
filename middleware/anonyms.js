
module.exports = function (req, res, next) {
    console.log("enabling cors");
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Headers', 'x-user-auth');
    res.setHeader('Cache-Control', 'no-cache');
    
    next();
   
}