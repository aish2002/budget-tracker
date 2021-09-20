import { Activity } from "../model/activity"

export const addactivity = async (req,res) => {
    try{
        const expense = req.body.expense;
        const user = req.body.user;
        
        await Activity.create({
            userid: user.id,
            topic: expense.topic,
            category: expense.category,
            amount: expense.amount,
            status: expense.status
        })
        res.status(201).send('Added Expense');
    }catch(err){
        console.log(err);
        res.status(200).send('Adding Expense Failed')
    }   
}

export const getactivity = async (req,res) => {
    try{
        //const activities = await Activity.find()
        console.log(req.session)
    }catch(err){
        console.log(err)
    }
}