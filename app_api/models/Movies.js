const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
    },
    reviewText: String,
    createdOn: {
    type: Date,
    'default': Date.now
    }
    });
    
const movieSchema = new mongoose.Schema({movieName: {
    type: String,
    required: true
    },
    poster: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5

    },
    reviews: [reviewSchema]
    
});
const memberSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    } 
});

mongoose.model('Movie', movieSchema);


