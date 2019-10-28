const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/Movies');
const ctrlMembers = require('../controllers/Members');
const ctrlReviews = require('../Controllers/Reviews');

//Movies

router
    .route('/Movies')
    .get(ctrlMovies.moviesListByName)
    .post(ctrlMovies.moviesCreate);
router
    .route('Movies/:Movieid')
    .get(ctrlMovies.moviesReadOne)
    .put(ctrlMovies.moviesUpdateOne)
    .delete(ctrlMovies.moviesDeleteOne);
// reviews
router
  .route('/Movies/:Movieid/reviews')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/Movies/:Movieid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);
//Members
router
    .route('/Members')
    .get(ctrlMembers.memberName)
    .post(ctrlMembers.memberCreate);
router
    .route('Members/:MemberEmail')
    .get(ctrlMembers.memberReadOne)
    .put(ctrlMembers.memberUpdateOne)
    .delete(ctrlMembers.memberDeleteOne);


module.exports = router;

