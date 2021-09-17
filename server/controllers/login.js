import { User } from "../model/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email}).exec();
        if(user && bcrypt.compare(password,user.password)){
            
            const token = jwt.sign(
                {user: user._id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )
            user.token = token;
            res.status(200).json(user);
        }else{
            res.status(400).send('invalid credentials');
        }
    }catch(err){
        console.log(err)
    }
}