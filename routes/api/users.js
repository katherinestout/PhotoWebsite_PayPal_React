const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

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
    //see if user exists and match
    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
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

module.exports = router;