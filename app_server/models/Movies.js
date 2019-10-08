const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({movieName: String,
    poster: String,
    rating: Number,
    });