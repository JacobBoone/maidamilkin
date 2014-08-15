var Newblog = require('../models/submission.js')

var indexController = {
	index: function(req, res) {
		res.render('index');
	},


	bradley: function (req, res) {
		res.render('bradley');
	},

	aboutme: function (req, res) {
		res.render('aboutme');
	},

	submit: function(req, res){
		res.render('submitpage');
	},

	// each new instance of the info entered
	submission: function(req, res){
		// console.log('from index.js', req.body);

		var newBlog = new Newblog({
		title: req.body.title,
		date: req.body.date,
		blog: req.body.blog

		});
		//  mongoose knows where to save it too on the app.js page
		newBlog.save(function(err,doc){
			if(err){
				console.log("ERROR!", err)
			}
			else{
				res.render('submitpage')
			}
		})
		// res.redirect('/mainpage')


	},

	// mysubmission: function(req,res){
	// 	var newMyBlog = new Newblog({
	// 	title: req.body.title,
	// 	date: req.body.date,
	// 	blog: req.body.blog

	// 	});
	// 	console.log(req.body)
	// 	newMyBlog.save(function(err,doc){
	// 		if(err){
	// 			console.log("ERROR!", err)
	// 		}
	// 		else{
	// 			res.redirect('/mainpage')
	// 		}
	// 	})
	// },


	// finds info from DB - this also ispointed to to serve as the main page the user sees.
	// this posts the blog entries in chronological order descending by date. however, not by time, 2+ entries on the same day wont always be in real chronological order
	viewsubmission: function(req, res){
		Newblog.find({}, null,{sort:{date: -1}},function(err, data){
		res.render('mainpage', {milkinblog: data})

	})
	}

};

module.exports = indexController;