const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        res.status(403).send('Token needed for authorization')
    }else{
        try{
            const decoded = jwt.verify(token, config.TOKEN_KEY);
            req.user = decoded;
            next();
        }catch(err){
            res.status(401).send('Invalid token')
        }
    }
}

module.exports = {verifyToken}