import { Activity } from "../model/activity"

export const addactivity = async (req,res) => {
    try{
        const expense = req.body.expense;
        const user = req.body.user;
        
        if(user.isAuthenticated){
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

export const getactivity = async (req,res) => {
    try{
        console.log(req.query)
        const activities = await Activity.find()
        res.status(200).json(activities)
    }catch(err){
        console.log(err)
    }
}