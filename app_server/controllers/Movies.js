  /* GET 'Movies' page */
  const Movies = function(req, res){
    res.render('movies', { title: 'Movie' });
    };

/* GET 'Reviews' page */
const reviews = function(req, res){
  res.render('reviews', { title: 'Reviews' });
  };


module.exports = {
  reviews,
  Movies
};