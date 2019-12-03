  /* GET 'Movies' page */
  const request = require('request');
  const apiOptions = {
    server: 'http://localhost:3000'
  }
  if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://pure-temple-67771.herokuapp.com'; 
    }
  /* GET 'home page */
  const homelist = function(req, res, responseBody){
  const path = '/api/movies';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
    qs : {
      offset : 20
    }
  };
  console.log("befor request");
  request(requestOptions, (err,response,body) => {
    let data = body;
    if(response.statusCode === 200 && data.length){
      for(let i=0;i< data.length;i++)
      {
        data[i].movies = _formatMovie(data[i].movies)
      }
    }
  _renderHomepage(req, res, data);
  }
  );
  };
  
const _renderHomepage = function(req, res, responseBody){
let message = null; 
if (!(responseBody instanceof Array)) { 
	message = "API lookup error"; 
	responseBody = []; 
} else { 
if (!responseBody.length) { 
	message = "No places found nearby"; 
} 
}
  res.render('Movies', {
    title: 'Movie',
    pageHeader: {
    title: 'Movie Reviews',
    strapline: 'Reviews for movies'
    },
    movies: { 
     name: 'Avengers EndGame',
     img: 'public/images/poster.jpg',
     description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe. '
    },
     review: responseBody,
     message: message
   });
  };
  const doAddReview = function(req, res){
    const movieid = req.params.movieid; 
    const path = `/api/movies/${movieid}/reviews`; 
    const postdata = { 
    author: req.body.name, 
    rating: parseInt(req.body.rating, 10), 
    reviewText: req.body.review 
    }; 
    const requestOptions = {
    url : apiOptions.server + path, 
    method : 'POST', 
    json : postdata 
    };
    if (!postdata.author || !postdata.rating || !postdata.reviewText) { 
    res.redirect('/movie/' + movieid + '/review/new?err=val'); 
    } else {
    
    request( requestOptions,(err, response, body) => {
    if (response.statusCode === 201) { 
    res.redirect(`/movie/${movieid}`); 
    }else if (response.statusCode === 400 && body.name && body.name ==='ValidationError' ) { 
    res.redirect(`/movie/${movieid}/review/new?err=val`); 
    } 
     else { 
    _showError(req, res, response.statusCode); 
    }
    }
    );
    }
    };
    const _showError = function (req, res, status) {
      let title = '';
      let content = '';
      if (status === 404) { 
      title = '404, page not found'; 
      content = 'Oh dear. Looks like we can\'t find this page. Sorry.'; 
      } else { 
      title = `${status}, something's gone wrong`; 
      content = 'Something, somewhere, has gone just a little bit wrong.'; 
      }
      res.status(status); 
      res.render('generic-text', { 
      title : title, 
      content : content 
      }); 
      };
      const _renderReviewForm = function (req, res, locDetail) { 
        res.render('location-review-form', {
        title: `Review ${locDetail.name} on Loc8r`, 
        pageHeader: { title: `Review ${locDetail.name}` },
        error: req.query.err 
        });
        };
        const _getMovieInfo = function (req, res, callback) { 
          const path = `/api/movies/${req.params.movieid}`;
          const requestOptions = {
          url : apiOptions.server + path,
          method : 'GET',
          json : {}
          };
          request(requestOptions,(err, response, body) => {
          let data = body;
          if (response.statusCode === 200) {
          data.coords = {
          lng : body.coords[0],
          lat : body.coords[1]
          };
          callback(req, res, data); 
          } else {
          _showError(req, res, response.statusCode);
          }
          }
          );
          };
          const movieInfo = function(req, res){
          _getMovieInfo(req, res, (req, res, responseData) => { 
          _renderDetailPage(req, res, responseData); 
          }); 
          };
          const addReview = function(req, res){
          _getLocationInfo(req, res, (req, res, responseData) => { 
          _renderReviewForm(req, res, responseData); 
          }); 
          };


module.exports = {
  addReview,
  movieInfo,
  doAddReview,
  homelist
};