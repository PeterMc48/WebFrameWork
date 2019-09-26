/* GET home page */
const home = function(req, res){
  res.render('index', { title: 'Search' });
};
/* GET 'Reviews' page */
const reviews = function(req, res){
  res.render('reviews', { title: 'Reviews' });
  };
  /* GET 'Movies' page */
const Movies = function(req, res){
  res.render('movies', { title: 'Movie' });
  };

module.exports = {
  home,
  reviews,
  Movies
};