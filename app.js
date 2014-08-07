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
app.get('/', indexController.viewsubmission);//points to what I want user to see.
app.get('/submitpage', indexController.submit);



// // Submit entry is the submitted form when accessed as a POST
app.post('/blogSubmission', indexController.submission);




app.get('/mainpage', indexController.viewsubmission);





var server = app.listen(process.env.PORT || 7594, function() {
	console.log('Express server listening on port ' + server.address().port);
});

// to do
//1. new entries apply at the bottom or seemingly random insertion points in of the list not the top on the mainpage...
// 2. enter a time stamp on the mainpage of when the blog posting was submitted. look into Datepicker restricted date range, moment.js or newDate
