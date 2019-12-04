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
const Loc = mongoose.model('Movie');



const  moviesListByName = function (req, res) { 
  
    res
.status(200)
.json({"status" : "success"});

};

const moviesCreate = function (req, res) { 
    loc.create({
        movieName: req.body.movieName,
        image: req.body.image,
        rating: req.body.rating,
        description: req.body.description
    },(err, movie) => {
        if(err) {
            res
                .status(400)
                .json(err);
        }
        else {
            res
            .status(201)
            .json(movie);
        }
    });
};
const moviesReadOne = function (req, res) { 
    if(req.params && req.params.movieid){
        Loc
        .findById(req.params.movieid) 
        .exec((err, Movies) => { 
            if(!Movie){
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
    if(!req.params.movieid){
        res
        .status(404)
        .json({
            "message": "Not found, movieid is required"
        });
        return;
    }
    loc
        .findById(req.params.movieid)
        .select('-reviews -rating')
        .exec((err, movie) => {
            if(!movie) { 
                res
                    .status(404)
                    .json({
                        "message": "movieid not found"
                    });
                return;
            } else if (err) {
                res
                    .status(400)
                    .json(err);
                return;
            }
            movie.name = req.body.name;
            movie.image = req.body.image;
            movie.description = req.body.description;
            movie.save((err, movie) => {
                if (err) {
                    res
                      .status(404)
                      .json(err);
                  } else {
                    res
                      .status(200)
                      .json(movie);
                  }
            })

        })

};
const moviesDeleteOne = function (req, res) {
  const movieid = req.params.movieid;
  if (movieid) {
      loc
        .findByIdAndRemove(movieid)
        .exec((err, movie) => {
            if(err)
            {
                res
                    .status(404)
                    .json(err);
                    return;
            }
            res
                .status(204)
                .json(null);
        });
    }else {
        res
            .status(404)
            .json({
                "message": "No movieid"
            });
    }
 };

module.exports = {
  moviesListByName,
  moviesCreate,
  moviesReadOne,
  moviesUpdateOne,
  moviesDeleteOne
};
