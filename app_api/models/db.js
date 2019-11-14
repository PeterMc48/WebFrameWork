const mongoose = require('mongoose');
//let dbURI = 'mongodb+srv://mccaffertyp:PA55W0RD12345@clustermovie-j9qdk.mongodb.net/test?retryWrites=true&w=majority';
let dbURI = 'mongodb://localhost/Movie'
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
}  
mongoose.connect(String(dbURI),
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
)
.then(()=> console.log('Connected To  Mongo!!'))
.catch(err => console.log(err));


mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
  });
  mongoose.connection.on('error',function(err) {
    console.log('Mongoose connection error:'+ err);
  });
  mongoose.connection.on('disconnected',function(){
    console.log('Mongoose disconnected');
  });
  
  const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
      console.log(`Mongoose disconnected through ${msg}`);
      callback();
    });
  };
  
  // For nodemon restarts                                 
  process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
    });
  });
  // For app termination
  process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
  });
  // For Heroku app termination
  process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
      process.exit(0);
    });
  });
require('./Movies');
            