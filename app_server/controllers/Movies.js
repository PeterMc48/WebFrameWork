  /* GET 'Movies' page */
  
const _renderHomepage = function(req, res, responseBody){
  res.render('movies', {
    title: 'Movie',
    pageHeader: {
    title: 'Reviews',
    strapline: 'Reviews for movies'
    },
    movies: { 
     name: 'Avengers EndGame',
     img: '"../images/poster.jpg"',
     description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe. '
    },
     review: responseBody
   }

               );
  };
   
     
   
  
  module.exports.homelist = function(req, res){
    const path = '/api/movie'; 
    const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {}, 
    qs : { 
   
    } 
    }; 
    request(requestOptions, (err, response, body) => { 
    _renderHomepage(req, res,body); 
    } 
    );
    };
    
/* GET 'Reviews' page */
const reviews = function(req, res){
  res.render('reviews', { title: 'Reviews'});
  };


module.exports = {
  reviews,
  Movies
};