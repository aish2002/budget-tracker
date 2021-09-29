const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const { loginuser,registeruser,reset, userdetails } = require('./controllers/user.js');
//const { verifyToken } require('./middleware/auth';
const { connect } = require('./config/database.js');
const { addactivity, getactivity } = require('./controllers/activity.js');
const {setbudget,getbudget} = require('./controllers/budget.js');
const session = require('express-session');
const bodyParser = require('body-parser')

connect();
const app = express();
//for serversiderendering
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/build')));
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
//     app.use(express.static(path.resolve(__dirname, '../client/build')));
// };

app.use(express.json())
app.use(session({
  secret: 'sfjsk,akqklqkqkel',
  saveUninitialized: true,
  resave: true
}))
app.get('/api',(req,res) => {
    res.status(200).send('API up');
})

app.post('/api/login',loginuser);
app.post('/api/register',registeruser);
app.post('/api/reset',reset);
app.get('/api/user',userdetails);
//app.use(verifyToken);
app.post('/api/addactivity',addactivity);
app.get('/api/getactivity',getactivity);
app.post('/api/setbudget',setbudget);
app.get('/api/getbudget',getbudget);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));

//for production
// app.get('*',(req,res) => 
//     res.sendFile(path.resolve(__dirname,'../client/build','index.html')))