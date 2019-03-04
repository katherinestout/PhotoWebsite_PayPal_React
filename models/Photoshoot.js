const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const PhotoshootSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    name:{
        type: String
    },
    typeShoot: {
        type: String,
        required: true
    }


});
module.exports = Post = mongoose.model('photoshoot', PhotoshootSchema);