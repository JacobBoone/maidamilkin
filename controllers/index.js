var Newblog = require('../models/submission.js')

var indexController = {
	index: function(req, res) {
		res.render('mainpage');
	},

	main: function(req, res){
		res.render('submitpage');
	},

	// each new instance of the info entered
	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newBlog = new Newblog({
		title: req.body.title,
		blog: req.body.blog

	});
		//  mongoose knows where to save it too on the app.js page
	newBlog.save()

		res.redirect('/mainpage')


	},
	// finds info from DB
	viewsubmission: function(req, res){
		Newblog.find({}, function(err, data){
		res.render('mainpage', {milkinblog: data})

	})
	}

};

module.exports = indexController;