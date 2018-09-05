$(document).ready(function(){
	'use strict';
	if ($(window).height() > 750) {
		$('#top').css('height', $(window).height() - 300);
	}
});
$(window).resize(function(){
	'use strict';
	if ($(window).height() > 750) {
		$('#top').css('height', $(window).height() - 300);
	}
});