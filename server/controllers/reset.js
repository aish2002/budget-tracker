const { User } = require("../model/user.js");
const bcrypt = require('bcryptjs');

const reset = async (req,res) => {
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

module.exports = {reset}