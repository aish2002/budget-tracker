import { User } from "../model/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getToken = (user,email) => jwt.sign(
    {user: user._id,email},
    process.env.TOKEN_KEY,
    {
        expiresIn: "2h"
    }
)

export const loginuser = async (req,res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email}).exec();
        if(user && await bcrypt.compare(password,user.password)){
            user.token = getToken(user,email);
            res.status(201).json(user);
        }else{
            res.status(200).send('invalid credentials');
        }
    }catch(err){
        console.log(err)
    }
}

export const registeruser = async (req,res) => {
    try{
        const {name,email,password,repassword} = req.body;
        const olduser = await User.findOne({email}).exec();
        if(olduser){
            res.status(200).send('User already exists.Please Login');
        } else{
            const encryptedPassword = await bcrypt.hash(password,10);
            const user = await User.create({
                name,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
            user.token = getToken(user,email);
            res.status(201).json(user)
        }    
    }catch(err){
        console.log('err ->',err);
    }
}

export const reset = async (req,res) => {
    try{
        const {email,password,repassword} = req.body;
        const user = await User.findOne({email}).exec();
        if(user){
            const encrytedPassword = await bcrypt.hash(password,10);
            user.password = encrytedPassword;
            await user.save();

            res.status(201).send('Password Reset Successful');
        }else{
            res.status(400).send('Email does not exist.Please Sign Up')
        }
    }catch(err){
        console.log(err)
    }
}