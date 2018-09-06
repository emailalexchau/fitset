$(document).ready(function(){
	'use strict';
	if ($(window).height() > 750 && $(window).height() <= 1000) {
		$('#top').css('height', $(window).height() - 350);
	} else if ($(window).height() > 1000) {
		$('#top').css('height', 700);
	} else {
		$('#top').css('height', 400);
	}
});
$(window).resize(function(){
	'use strict';
	if ($(window).height() > 750 && $(window).height() <= 1000) {
		$('#top').css('height', $(window).height() - 350);
	} else if ($(window).height() > 1000) {
		$('#top').css('height', 700);
	} else {
		$('#top').css('height', 400);
	}
});