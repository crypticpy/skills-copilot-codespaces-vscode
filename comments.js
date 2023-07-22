// Create web server

var express = require('express');
var router = express.Router();

// Import the model (comment.js) to use its database functions.
var comment = require('../models/comment.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  comment.all(function(data) {
    var hbsObject = {
      comments: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/', function(req, res) {
  comment.create([
    'comment', 'devoured'
  ], [
    req.body.comment, req.body.devoured
  ], function() {
    res.redirect('/');
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  comment.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;