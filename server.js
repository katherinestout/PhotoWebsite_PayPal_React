const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');

//require('dotenv').config(); 

//paypal

//body parser


const app = express();

app.get('/', (req, res) => res.send('Hello!'));

const port = process.env.PORT || 5000;

//console.log(process.env.client_id);

app.listen(port, () => console.log(`Server running on port ${port}`));