import dotenv from 'dotenv';
dotenv.config();
//import path from 'path';
import express from 'express';
import { login } from './controllers/login';
import { register } from './controllers/register';
import {reset} from './controllers/reset';
import { verifyToken } from './middleware/auth';
import {connect} from './config/database';
connect();
const app = express();
//for production
//app.use(express.static(path.resolve(__dirname,'../client/build')))
app.use(express.json())

app.get('/api',(req,res) => {
    res.status(200).send('API up');
})

app.post('/api/login',login);
app.post('/api/register',register);
app.post('/api/reset',reset);
app.use(verifyToken);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    console.log(`Server listening on ${PORT}`);
    if(err){
      console.log(err);
      return;
    }
});

//for production
// app.get('*',(req,res) => 
//     res.sendFile(path.resolve(__dirname,'../client/build','index.html'))
// )