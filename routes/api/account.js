const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load validation
const validateAccountInput = require('./../../validation/account');
//const validateLoginInput = require('./../../validation/login');

// Bring in account model
const Account = require('../../models/Account');
// Bring in user 
const User = require('../../models/User');

//Route: GET request to api/account/test
//this is a public route

router.get('/test', (req ,res) => res.json({msg: "account WORKS!"}));

router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const errors = {};
  
     Account.findOne({ user: req.user.id })
        .populate('user', 'name')
        .then(account => {
          if (!account) {
            errors.noaccount = 'There is no account for this user';
            return res.status(404).json(errors);
          }
          res.json(account);
        })
        .catch(err => res.status(404).json(err));
    }
  );


//GET request route: api/account/user/:user_id
//get account by user id
//Public access route

router.get('/user/:user_id', (req, res) => {
    const errors = {};
    //match and grab handle from db
    Account.findOne({ user: req.params.user_id })
    .populate('user')
    .then (account => {
        if(!account){
            errors.noaccount = 'There is no account for this user!!';
            res.status(404).json(errors);

        }
        res.json(account); 
    }).catch(err => 
        res.status(404).json({account: 'There is no account sorry.'})
    );
    });

//GET request route: api/account/all
//get account by user id
//Public access route

router.get('/all', (req, res) => {
    const errors ={};
    //match and grab handle from db
    Account.find()
   
    .populate('user')
    .then (accounts => {
        if(!accounts){
            errors.noaccount = 'There are no accounts';
            return res.status(404).json(errors);
        }
        res.json(accounts);
    })
    .catch(err =>
    res. status(404).json({account: 'No accounts sorry'})
);
}); 






// Route that creates user account
//private access route
//POST api/account

router.post('/', passport.authenticate('jwt', {session: false}), 
(req, res) => {

const{ errors, isValid} = validateAccountInput(req.body);

//check validation
if(!isValid){
    //return any errors with status
    return res.status(400).json(errors);
}

  //GET fields
  //filling account fields object
const accountFields = {};
accountFields.user = req.user.id;

if(req.body.phone) accountFields.phone = req.body.phone;


//search for user by id
Account.findOne({user: req.user.id})
.then(account => {
    if(account){
        //if they have a account then update
        Account.findOneAndUpdate(
            {user: req.user.id},
            {$set: accountFields},
            {new: true}
        )
        .then(account => res.json(account));
    }else{
        //create
        //check to see if handle exsists
        Account.findOne({ phone: accountFields.phone}).then(account =>{
            if(account){
                errors.phoen = 'This phone already exists';
                res.status(400).json(errors);
            }
        //if it doesnt then save account
        new Account(accountFields).save().then(account => res.json(account));
        });
    }
});
}
);

// @route   DELETE api/account
// @desc    Delete user and account
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Account.findOneAndRemove({ user: req.user.id }).then(() => {
        User.findOneAndRemove({ _id: req.user.id }).then(() =>
          res.json({ success: true })
        );
      });
    }
  );

module.exports = router;