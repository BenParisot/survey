$(document).ready(function() {



	$("#input").submit(function() {
		$("#input").fadeOut( 1600, "linear", function() {
				$("#result").fadeIn(1600, "linear" );
		});
		event.preventDefault();

	});


});
