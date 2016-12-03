'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
  res.send("<h1>This is the index route!</h1>");
});

app.get('/blog', function(req, res){
  res.send(posts);
});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});

// Run your server in one terminal tab using nodemon --debug src/app.js
// nodemon --debug-brk src/app.js always you do insert debugger; anywhere in your code that you want it to break on
