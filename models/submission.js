var mongoose =require('mongoose');

var Newblog = mongoose.model('Newblog',{
	title: String,
	blog: String,

})






module.exports = Newblog