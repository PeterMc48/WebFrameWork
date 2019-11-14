const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    author: { 
        type: String, 
        required: true 
        }, 
        
    rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
    },
    reviewText: { 
        type: String, 
        required: true 
        }, 
        
    createdOn: {
    type: Date,
    'default': Date.now
    }
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
    
const movieSchema = new mongoose.Schema({
    movieName: {
    type: String,
    required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5

    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
    
});


mongoose.model('Movie', movieSchema);


