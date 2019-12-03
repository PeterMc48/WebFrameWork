const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/Movies');
const ctrlMembers = require('../controllers/Members');


/* Movie pages. */
router.get('/', ctrlMovies.homelist);
router.get('/movie/:movieid', ctrlMovies.movieInfo);
router
 .route('/movie/:movieid/review/new')
 .get(ctrlMovies.addReview)
 .post(ctrlMovies.doAddReview);


/*Members pages*/ 
router.get('/login', ctrlMembers.logIn);
router.get('/Register', ctrlMembers.register);

module.exports = router;
