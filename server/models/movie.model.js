const mongoose = require('mongoose')
const uniqueValidator = require("mongoose-unique-validator");
//create schema
const MovieSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true,'Title is a mandatory field!'],
        minLength: [3,'Title must be greater than 3 chars!'],
        unique: true
    },
    genre:{
        type:String,
        enum:['Drama','Comedy','Horror'],
        required: [true,'Genre is a mandatory field!']
    },
    image:{
        type:String
    },
    rating:{
        type:String,
        enum:['PG','G','R']
    },
    releasedYear:{
        type:Number
    }
},{timestamps:true});
MovieSchema.plugin(uniqueValidator);
const Movie = mongoose.model('Movie',MovieSchema);

module.exports = Movie;