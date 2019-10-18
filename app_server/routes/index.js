const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/Movies');
const ctrlMembers = require('../controllers/Members');


/* Movie pages. */
router.get('/', ctrlMovies.Movies);
router.get('/Reviews', ctrlMovies.reviews);


/*Members pages*/ 
router.get('/login', ctrlMembers.logIn);
router.get('/Register', ctrlMembers.register);

module.exports = router;
