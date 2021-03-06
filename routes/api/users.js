const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load User model
const User = require('../../models/User');

//@route   GET api/users/test
//@desc    Tests users route
//@access  Public

router.get('/test', (req ,res) => res.json({msg: "users WORKS!"}));


//@route   GET api/users/test
//@desc    Resgister user
//@access  Public

router.post('/register', (req, res) => {
    const {errors, isValid} = validateRegisterInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);

    }
    //see if user exists and match
User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            //errors.email = 'Email already exists';
            return res.status(400).json({email: 'Email already exists'});
        } else{
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
    //generating a salt
    //basically- password protecting
    bcrypt.genSalt(10, (err, salt) => {
                //store hash in DB
                //hashing password
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    //set password to hashed password
                    newUser.password = hash;
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
                } )
            })
        }
    });
});

//@route   GET api/users/login
//@desc    Login user, aka returning jwt token
//@access  Public

router.post('/login', (req, res) => {

    const {errors, isValid} = validateLoginInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);

    }

const email = req.body.email;
const password = req.body.password;

//find the user by email
User.findOne({email})
    .then(user => {
        // Check for user
        if(!user){
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

//Check password if found
bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch){
                //res.json({msg: 'Password Success'});
                //User Matched
                const payload = {id: user.id, name: user.name, email: user.email}; //creating jwt payload

                //Sign Token
                jwt.sign(payload, 
                    keys.secretOrKey, 
                    {expiresIn: 3600},
                    (err, token) => {
                        res.json({
                            sucess: true,
                            token: 'Bearer ' + token
                        });
                    });

            } else {
                errors.password = 'Password incorrect!'
                return res.status(400).json(errors);
            }
        })
    });
});

//@route   GET api/users/current
//@desc    Return current user
//@access  Private

router.get('/current', passport.authenticate('jwt', 
{session: false}), 
(req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = router;