var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  var movieSchema = new mongoose.Schema({
  title: { type: String }
, rating: String
, releaseYear: Number
, hasCreditCookie: Boolean
});

var Movie = mongoose.model('Movie', movieSchema);
// Find a single movie by name.
Movie.findOne({ title: 'Thor' }, function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
}).then(function() {
  // Find all movies.
  Movie.find(function(err, movies) {
    if (err) return console.error(err);
    console.dir(movies);
  });
}).then(function() {
  // Find all movies that have a credit cookie.
  Movie.find({ hasCreditCookie: true }, function(err, movies) {
    if (err) return console.error(err);
    console.dir(movies);
    db.close();
  });
});
});

mongoose.connect('mongodb://localhost/test');
