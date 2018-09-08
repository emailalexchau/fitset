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
			$('#menu').slideDown(300);
			$('#hamburger').addClass('close');
		} else {
			$('#menu').hide();
			$('#hamburger').removeClass('close');
		}
	} else {
		$('#menu').removeClass('mobile');
		$('#menu').show();
		$('body').css('overflow', 'scroll');
		$('body').css('position', 'static');
	}
});

$('#hamburger').click(function() {
	'use strict';
	if (sessionStorage.getItem('menuIsVisible') === 'true') {
		sessionStorage.setItem('menuIsVisible', 'false');
		$('#menu').slideUp(300);
		$('#hamburger').removeClass('close');
		$('body').css('overflow', 'scroll');
		$('body').css('position', 'static');
		$('.quotes').css('display','block');
		
	} else {
		sessionStorage.setItem('menuIsVisible', 'true');
		$('#menu').slideDown(300);
		$('#hamburger').addClass('close');
		$('body').css('overflow', 'hidden');
		$('body').css('position', 'fixed');
		$('.quotes').css('display','none');
	}
});

