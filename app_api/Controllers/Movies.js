const mongoose = require('mongoose');
const Loc = mongoose.model('Movie');

const movieCreate = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const movieByName = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

 };

const movieReadOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const movieUpdateOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const movieDeleteOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const reviewCreate = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const reviewReadOne = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const reviewUpdateOne = function (req, res) { 
    res
.status(200)
.json({"status" : "success"});

};
const reviewDeleteOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };


module.exports = {
  movieByName,
  movieCreate,
  movieReadOne,
  movieUpdateOne,
  movieDeleteOne,
  reviewCreate,
  reviewReadOne,
  reviewUpdateOne,
  reviewDeleteOne
};


