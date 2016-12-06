'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

// Require routes from it's own file
// require(routes.js)(app);

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views')

app.get('/', function(req, res) {
  // res.send("<h1>This is the index route!</h1>");
  res.render('index');
});

app.get('/blog/:title?', function(req, res){

  var title = req.params.title;

  if (title === undefined) {
    res.send(posts);
    // Left off here
    // res.render('blog');
  } else {
    // if the post doesn't not exist, define it as an empty object
    var post = posts[title] || {title: "error", description: "This post does not exist"};
    res.render('post', {post: post});
    // console.log(post);
  }

});

app.listen(3000, function() {
  console.log("The Front End server is running on port 3000!");
});

// Run your server in one terminal tab using nodemon --debug src/app.js
// Run node-inspector in another tab

// nodemon --debug-brk src/app.js always you do insert debugger; anywhere in your code that you want it to break on
// node-inspector -p to get the debugging URL
