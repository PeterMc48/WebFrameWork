const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/Movies');
const ctrlMembers = require('../controllers/Members');

//Movies

router
    .route('/Movies')
    .get(ctrlMovies.movieByName)
    .post(ctrlMovies.movieCreate);
router
    .route('Movies/:MovieName')
    .get(ctrlMovies.movieReadOne)
    .put(ctrlMovies.movieUpdateOne)
    .delete(ctrlMovies.movieDeleteOne);
// reviews
router
  .route('/Movies/:Movieid/reviews')
  .post(ctrlMovies.reviewCreate);

router
  .route('/Movies/:movieName/reviews/:movieName')
  .get(ctrlMovies.reviewReadOne)
  .put(ctrlMovies.reviewUpdateOne)
  .delete(ctrlMovies.reviewDeleteOne);
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

