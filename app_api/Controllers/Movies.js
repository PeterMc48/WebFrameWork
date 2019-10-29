const request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};
if(process.env.Node_ENV === 'production'){
    apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}
const requestOptions = { 
    url : 'http://yourapi.com/api/path', 
    method : 'GET', 
    json : {}, 
    qs : { 
    offset : 20 
    } 
    }; 
    request(requestOptions, (err, response, body) => { 
    if (err) { 
    console.log(err); 
    } else if (response.statusCode === 200) { 
    console.log(body); 
    } else { 
    console.log(response.statusCode); 
    } 
    });
    
    
const mongoose = require('mongoose');
const Loc = mongoose.model('Movies');


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
    if(req.params && req.params.Moviesid){
        Loc
        .findById(req.params.Moviesid) 
        .exec(function(err, Movies){ 
            if(!Movies){
                sendJsonResponse(res,404, {"message": "no movieid found"});
                return;
            }
            else if(err){
                sendJsonResponse(res,404,err);
                return;
            }
            sendJsonResponse(res, 200, Movies);
    });
}
    else{
        sendJsonResponse(res,404, {"message": "no movieid in request"});
}

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
