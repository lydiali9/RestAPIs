var express = require('express');

var app = express();

var port = process.env.PORT || 3888;

app.get('/', function(c, res) {
    res.send('Welcome to my API');
});

app.listen(port, function() {
    console.log('Running on PORT ' + port);
});