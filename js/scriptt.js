$(document).ready(function() {
	$('.blockk_title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

