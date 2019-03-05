const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProfileSchema = new Schema({
user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
},
phone: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    ref: 'users'
}
    
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);