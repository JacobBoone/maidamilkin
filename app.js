var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/milkinblog')



var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);
app.get('/submitpage', indexController.main);



// // Submit entry is the submitted form when accessed as a POST
app.post('/blogSubmission', indexController.submission);




app.get('/mainpage', indexController.viewsubmission);





var server = app.listen(process.env.PORT || 7594, function() {
	console.log('Express server listening on port ' + server.address().port);
});
