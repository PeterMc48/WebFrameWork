const mongoose = require('mongoose');
const Loc = mongoose.model('Movie');

const reviewsCreate = function (req, res) {
  const movieid = req.params.movieid;
  if(movieid){
    loc
      .findById(movieid)
      .select('reviews')
      .exec((err, movie) =>{
        if(err){
          res 
            .status(400)
            .json(err);
        }
        else{
          _doAddReview(req, res, movieid);   
        }
      });
  } else {
    res 
      .status(404)
      .json({
        "message": "Not found, movieid required"
      });
  }  
 };

const reviewsReadOne = function (req, res) {
  if(req.params && req.params.movieid && req.params.reviewid){
    loc
      .findById(req.params.locetionid)
      .exec((err, moviee) => {
        if(!movie) {
          res
            .status(404)
            .json({
              "message": "movieid not found"
            });
            return;
        } else if (err) {
          res 
            .status(404)
            .json(err);
            return;
        }
        if(movie.reviews && movie.reviews.length > 0) {
          const review = movie.reviews.id(req.params.reviewid);
          if(!review) {
            res
              .status(404)
              .josn({
                "message": "reviewid not found"
              });
          } else {
            response = {
              movie: {
                name: movie.name,
                id : req.params.movieid
              },
              review : review
            };
            res
              .status(200)
              .json(response);
          }
        } else {
            res
              .status(200)
              .json({
                "message": "No reviews found"
              });
        }
      });
  } else {
      res
        .status(404)
        .json({
            "message": "Not found, movieid and reviewid are both required"
        });
    }
 };
const reviewsUpdateOne = function (req, res) { 
  if (!req.params.movieid || !req.params.reviewid) {
    res
      .status(404)
      .json({
        "message": "Not found, movieid and reviewid are both required"
      });
      return;
  }
  loc
    .findById(req.params.movieid)
    .select('reviews')
    .exec((err, movie) => {
      if(!movie) {
        res
          .status(404)
          .json({
            "message" : "movieid not found"
          });
          return;
      } else if (err) {
        res
          .status(400)
          .json(err);
          return;
      }
      if(movie.reviews && movie.reviews.length > 0) {
        let thisReview = movie.reviews.id(req.params.reviewid);
        if(!thisReview) {
          res
            .status(404)
            .json({
              "message": "reviewid not found"
            });
        } else {
          thisReview.author = req.body.author;
          thisReview.rating = req.params.rating;
          thisReview.reviewText = req.params.reviewText;
          movie.save((err,movie) => {
            if(err){
              res
                .status(404)
                .json(err);
            } else {
              _updatAveragerating(movie._id);
              res(200)
              .json(thisReview);
            }
          });
        }
      } else{
        res
          .status(404)
          json({
            "message": "No review to update"
          });
      }
    });
};
const reviewsDeleteOne = function (req, res) { 
  if(!req.params.movieid || !req.params.reviewid){
    res
      .status(404)
      .json({
        "message": "Not found, movieid and reviewid are both required" 
      });
      return;
  }
  loc
    .findById(req.params.movieid)
    .select('reviews')
    .exec((err, movie) =>{
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
      if(movie.reviews && movie.reviews.length > 0) {
        if(!movie.reviews.id(req.params.reviewid)) {
          res
            .status(404)
            .json({
              "massage": "reviewid not found"
            });
        } else{
          movie.reviews.id(red.params.reviewid).remove();
          movie.save((err) => {
            if(err) {
              res
                .status(404)
                .json(err);
            } else {
              updatAverageRating(movie._id);
              res
                .status(204)
                .json(null);
            }
          });
        }
      }else {
        res
          .status(404)
          .json({
            "message": "No review to delete"
          });
      }
    });
};

// PRIVATE HELPER METHODS

const _doAddReview = function(req, res, movie) {
  if (!movie) {
    res
      .status(404)
      .json({
        "message": "movieid not found"
      });
  } else {
    movie.reviews.push({
      author: req.body.author,
      rating: req.body.rating,
      reviewText: req.body.reviewText
    });
    movie.save((err, movie) => {
      if (err) {
        res
          .status(400)
          .json(err);
      } else {
        _updateAverageRating(movie._id);
        let thisReview = movie.reviews[movie.reviews.length - 1];
         res
           .status(201)
           .json(thisReview);
      }
    });
  }
};

const _updateAverageRating = function(movieid) {
  Loc
    .findById(movieid)
    .select('rating reviews')
    .exec((err, movie) => {
      if (!err) {
        doSetAverageRating(movie); 
      }
    });
};

const _doSetAverageRating = function(movie) {
  if (movie.reviews && movie.reviews.length > 0) {
    const reviewCount = movie.reviews.length;
    let ratingTotal = 0;
    for (let i = 0; i < reviewCount; i++) {
      ratingTotal = ratingTotal + movie.reviews[i].rating;
    }
    let ratingAverage = parseInt(ratingTotal / reviewCount, 10);
    movie.rating = ratingAverage;
    movie.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Average rating updated to", ratingAverage);
      }
    });
  }
};

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne
};
