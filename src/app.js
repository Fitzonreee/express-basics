'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
  res.send("<h1>This is the index route!</h1>");
});

app.get('/blog/:title?', function(req, res){

  var title = req.params.title;

  if (title === undefined) {
    res.send(posts);
  } else {
    var post = posts[title];
    res.send(post);
  }

});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});

// Run your server in one terminal tab using nodemon --debug src/app.js
// Run node-inspector in another tab

// nodemon --debug-brk src/app.js always you do insert debugger; anywhere in your code that you want it to break on
// node-inspector -p to get the debugging URL
