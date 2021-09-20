import { Activity } from "../model/activity"

export const addactivity = async (req,res) => {
    try{
        await Activity.create({
            userid: req.body.userid,
            topic: req.body.topic,
            category: req.body.category,
            amount: req.body.amount
        })
        res.status(201).send('Added Expense');
    }catch(err){
        console.log(err);
    }   
}

export const getactivity = async (req,res) => {
    try{
        console.log(req.session)
    }catch(err){
        console.log(err)
    }
}