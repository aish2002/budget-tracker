import { User } from "../model/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const register = async (req,res) => {
    try{
        const {name,email,password,repassword} = req.body;
        const olduser = await User.findOne({email}).exec();
        console.log(olduser)
        if(olduser){
            res.status(200).send('User already exists.Please Login');
        } else{
            const encryptedPassword = await bcrypt.hash(password,10);
            const user = await User.create({
                name,
                email: email.toLowerCase(),
                password: encryptedPassword
            });

            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            )
            user.token = token;
            res.status(201).json(user)
        }    
    }catch(err){
        console.log('err ->',err);
    }
}