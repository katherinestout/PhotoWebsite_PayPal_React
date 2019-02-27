const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const nodemailer = require('nodemailer');

//body parser


const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Database Config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));


//routes
//get
app.get('/', (req, res) => res.send('Hello!'));

//post
app.post('/api/form', (req, res) => {
    console.log(req.body)
});

const port = process.env.PORT || 5000;

//console.log(process.env.client_id);

app.listen(port, () => console.log(`Server running on port ${port}`));