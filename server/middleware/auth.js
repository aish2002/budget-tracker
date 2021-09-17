import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req,res,next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        res.status(403).send('Token needed for authorization')
    }
    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
    }catch(err){
        res.status(401).send('Invalid token')
    }
    return next();
}