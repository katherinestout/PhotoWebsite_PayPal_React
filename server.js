const express = require('express');
const paypal = require('paypal-rest-sdk');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const passport = require('passport');
const path = require('path');

//routes
const profile = require('./routes/api/profile');
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');


const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Database Config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport config (put everything else for passport in here)
require('./config/passport')(passport);

//routes

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


//Form for email
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
// Server static assets if in production
//Check to see if on server, on heroku
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('client/build'));
    //route
    //for any route that gets hit we're going to load the react index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server running on port ${port}`));