const express = require('express');
const router = express.Router();
const ctrlMovies = require('../Controllers/movies');
const ctrlMembers = require('../Controllers/members');
const ctrlReviews = require('../Controllers/reviews');

//Movies

router
    .route('/Movie')
    .get(ctrlMovies.moviesListByName)
    .post(ctrlMovies.moviesCreate);
router
    .route('/Movie/:Moviesid')
    .get(ctrlMovies.moviesReadOne)
    .put(ctrlMovies.moviesUpdateOne)
    .delete(ctrlMovies.moviesDeleteOne);
// reviews
router
  .route('/Movie/:Movieid/reviews')
  .post(ctrlReviews.reviewsCreate);

router
  .route('/Movie/:Movieid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);
//Members
router
    .route('/Members')
    .get(ctrlMembers.memberName)
    .post(ctrlMembers.memberCreate);
router
    .route('/Members/:MemberEmail')
    .get(ctrlMembers.memberReadOne)
    .put(ctrlMembers.memberUpdateOne)
    .delete(ctrlMembers.memberDeleteOne);


module.exports = router;

