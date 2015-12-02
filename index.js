var express = require('express');
var app = express();
var assert = require('assert');
app.use(express.static(__dirname  + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');





app.listen(process.env.PORT || 5000);

app.get('/', function(request, response)
{
  response.render('pages/index');
});

app.get('/quotes/:id', function(req, res) {

  console.log(req.params.id);

  var a =   req.params.id;

  //jjjj


  var connect = require('connect'),
      mongo = require('mongodb');
// var prompt = require('prompt');
  var assert = require('assert');
  mongo.connect('mongodb://heroku_d03kn7hw:4pd26pbsinojodrga1hkp3sjv5@ds045604.mongolab.com:45604/heroku_d03kn7hw', {}, function(error, db) {

    if (error) {
      return console.log("Not connected");
    }

    console.log("Connected");



    var findpeople = function (db, callback) {
      var cursor = db.collection('Pro').find({"_id": +a });

      cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
          console.dir(doc);
          res.send(doc);

        } else {
          callback();
        }
      });
    }
    mongo.connect('mongodb://heroku_d03kn7hw:4pd26pbsinojodrga1hkp3sjv5@ds045604.mongolab.com:45604/heroku_d03kn7hw', function(err, db) {
      assert.equal(null, err);
      findpeople(db, function() {
        db.close();
      });
    });
  });


  //jjj


});


