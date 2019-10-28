const mongoose = require('mongoose');
const Loc = mongoose.model('Movie');

const moviesCreate = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const moviesListByName = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const moviesReadOne = function (req, res) { 
    Loc
    .findById(req.params.Movieid) 
    .exec((err, Movie) => { 
    res 
    .status(200) 
    .json(Movie); 
    });
    

};
const moviesUpdateOne = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const moviesDeleteOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };

module.exports = {
  moviesListByName,
  moviesCreate,
  moviesReadOne,
  moviesUpdateOne,
  moviesDeleteOne
};
