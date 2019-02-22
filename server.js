const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//body parser


const app = express();

//Database Config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 5000;

//console.log(process.env.client_id);

app.listen(port, () => console.log(`Server running on port ${port}`));