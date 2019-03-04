const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const AccountSchema = new Schema({
user:{
    type: Schema.Types.ObjectId,
    ref: 'users'
},
email: {
    type: String,
    required: true,
    max: 40
},
phone: {
    type: String,
    required: true,
}
    
});

module.exports = Account = mongoose.model('account', AccountSchema);