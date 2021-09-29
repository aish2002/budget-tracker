const { Activity } = require("../model/activity.js")

const addactivity = async (req,res) => {
    try{
        const expense = req.body.expense;
        const user = req.body.user;
        if(user.isAuthorized){
            await Activity.create({
                userid: user.id,
                topic: expense.topic,
                category: expense.category,
                amount: expense.amount,
                status: expense.status
            })
            res.status(201).send('Added Expense');
        }else{
            res.status(200).send('Invalid Input');
        }
    }catch(err){
        console.log(err);
        res.status(200).send('Adding Expense Failed')
    }   
}

const getactivity = async (req,res) => {
    try{
        const user = JSON.parse(req.query.user);
        const activities = await Activity.find({userid: user.id})
        res.status(200).json(activities)
    }catch(err){
        console.log(err)
    }
}

module.exports = {getactivity,addactivity}