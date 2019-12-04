  /* GET 'Movies' page */
  const request = require('request');
  const apiOptions = {
    server: 'http://localhost:3000'
  }
  if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://dashboard.heroku.com/apps/mccaffertypwebapp/settings'; 
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
  _renderHomepage(req, res);
  }
  );
  };
  
const _renderHomepage = function(req, res, responseBody){

  res.render('Movies', {
    title: 'Movie',
    pageHeader: {
    title: 'Movie Reviews',
    strapline: 'Reviews for movies'
    }});
    
  };

  const addReview = function(req, res){
    res.render('reviews',)
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
      

module.exports = {
  doAddReview,
  addReview,
  homelist
};