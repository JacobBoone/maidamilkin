$(function () {

	$('.submit-button').click(function(){
		// empty the contents
		// this does not work....
		$('.title-entry', '.blog-entry').empty(); 
		// post success message
		$('.submit-button').after("Success!")

		console.log("Submit click")

	})




 });