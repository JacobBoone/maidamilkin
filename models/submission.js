var mongoose =require('mongoose');

var Newblog = mongoose.model('Newblog',{
	title: String,
	date: String,
	blog: String,

})






module.exports = Newblog