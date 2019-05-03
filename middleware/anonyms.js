
module.exports = function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Headers', 'x-user-auth');
    res.setHeader('Cache-Control', 'no-cache');
    next();
   
}