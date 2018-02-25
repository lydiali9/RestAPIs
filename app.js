var express = require('express');

var app = express();

var port = process.env.PORT || 3888;

var bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function(req, res) {
        var responseJson = {
            hello: "This is my api"
        };
        res.json(responseJson);
    });
app.use('/api', bookRouter);

app.get('/', function(c, res) {
    res.send('Welcome to my API');
});

app.listen(port, function() {
    console.log('Gulp is running my app on PORT ' + port);
});