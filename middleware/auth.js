const jwt=require('jsonwebtoken');
const config=require('config');
module.exports=function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return  res.status(401).send("Access denied. no token provided");
    try {
        const dcoded_token = jwt.verify(token, config.get('jwt_private_key'));
        req.user = dcoded_token;
        next();
    } catch (ex) {

    }


}