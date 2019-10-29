const mongoose = require('mongoose');
const Loc = mongoose.model('Movies');


const memberName = function (req, res) { 
  
    res
.status(200)
.json({"status" : "success"});

};


const memberCreate = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const memberReadOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const memberUpdateOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };
const memberDeleteOne = function (req, res) {
    res
.status(200)
.json({"status" : "success"});

 };

module.exports = {
    memberName,
    memberCreate,
    memberReadOne,
    memberUpdateOne,
    memberDeleteOne
}