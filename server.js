const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

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
    //console.log(req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p> 
        
        `

        //mail options

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'karina.beahan@ethereal.email',
                pass: 'XbVJRUbQQ1GFJPrEmk'
            }

        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'karina.beahan@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent', info.message);
            console.log('Message URL:', nodemailer.getTestMessageUrl(info));
        })
    })

});

const port = process.env.PORT || 5000;

//console.log(process.env.client_id);

app.listen(port, () => console.log(`Server running on port ${port}`));