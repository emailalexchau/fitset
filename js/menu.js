// Is Menu in Mobile View?
$(document).ready(function(){
	'use strict';
	if ($(window).width() <= 800) {
		$('#menu').addClass('mobile');
	} else {
		$('#menu').removeClass('mobile');
	}
});
$(window).resize(function(){
	'use strict';
	if ($(window).width() <= 800) {
		$('#menu').addClass('mobile');
		if (sessionStorage.getItem('menuIsVisible') === 'true') {
			$('#menu').show();
			$('#hamburger').addClass('close');
			$('body').css('overflow', 'hidden');
		} else {
			$('#menu').hide();
			$('#hamburger').removeClass('close');
		}
	} else {
		$('#menu').removeClass('mobile');
		$('#menu').show();
		$('body').css('overflow', 'auto');
	}
});

$('#hamburger').click(function() {
	'use strict';
	if (sessionStorage.getItem('menuIsVisible') === 'true') {
		sessionStorage.setItem('menuIsVisible', 'false');
		$('#menu').hide();
		$('#hamburger').removeClass('close');

		$('body').css('overflow', 'auto');
		
	} else {
		sessionStorage.setItem('menuIsVisible', 'true');
		$('#menu').show();
		$('#hamburger').addClass('close');
		$('body').css('overflow', 'hidden');
	}
});

