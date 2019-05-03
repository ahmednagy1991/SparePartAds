
module.exports = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Headers', 'x-user-auth');
    res.setHeader('Cache-Control', 'no-cache');
    next();
   
}