  /* GET 'Movies' page */
  const Movies = function(req, res){
    res.render('movies', { title: 'Movie',
                           pageHeader: {
                           title: 'Reviews',
                           strapline: 'Reviews for movies'
                           },
                           movies: { 
                            name: 'Avengers EndGame',
                            img: '"../images/poster.jpg"',
                            description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe. '
                           },
                            review: [ {Author: 'Holmes',
                                      Rating: '4',
                                      Timestamp: '16 May 2019',
                                      reviewText: 'Great movie, well worth the watch.'},
                                      {Author: 'Smithy',
                                      Rating: '4',
                                      Timestamp: '20 May 2019',
                                      reviewText: 'Great movie'}
                                    ]
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