$(document).ready(function() {



	$("#blanks").submit(function() {
		$("#blanks").fadeOut( 1600, "linear", function() {
				$("#result").fadeIn(1600, "linear" );
		});
		event.preventDefault();

	});


});
