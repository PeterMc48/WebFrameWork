const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/Movies');
const ctrlMembers = require('../controllers/Members');


/* Movie pages. */
router.get('/', ctrlMovies.homelist);
router.get('/review', ctrlMovies.addReview);
router.post('/movie/:movieid/review/new',ctrlMovies.doAddReview);
 


/*Members pages*/ 
router.get('/login', ctrlMembers.logIn);
router.get('/Register', ctrlMembers.register);

module.exports = router;
