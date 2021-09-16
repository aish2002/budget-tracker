require('dotenv').config();
require('./config/database').connect();
//const path = require('path');
const express = require("express");
const app = express();

//for production
//app.use(express.static(path.resolve(__dirname,'../client/build')))
app.use(express.json())

app.get('/api',(req,res) => {
    res.status(200).send('API up');
})

app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

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