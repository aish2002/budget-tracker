const { User } = require("../model/user.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
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

module.exports = { register };