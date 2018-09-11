$(document).ready(function () {
	'use strict';
	var scroll;
	var menuIsVisible;
	
	if ($(window).width() <= 800) {
		$('#menu').addClass('mobile');
	} else {
		$('#menu').removeClass('mobile');
	}
	
	// Add Dark Background to Menu on Scroll
	$(window).scroll(function () {
		var y = $(window).scrollTop();

		if (y > 5) {
			$("#top").addClass("opaque");
		} else {
			$("#top").removeClass("opaque");
		}
		if (menuIsVisible === true) {
			$("#top").addClass("opaque");
		}
	});
	
	$('#hamburger').click(function () {
		
		if (menuIsVisible === true) {
			$('#menu').hide();
			$('#hamburger').removeClass('close');
			// Unlock Screen Position
			$('body').css('overflow-y', 'scroll');
			scroll = window.scrollTo(0, scroll);
			menuIsVisible = false;
		} else {
			scroll = $(window).scrollTop();
			// Lock Screen Position
			$('body').css('overflow-y', 'hidden');
			$('#hamburger').addClass('close');
			$('#menu').show();
			menuIsVisible = true;
		}
	});
	
	$(window).resize(function () {
		if ($(window).width() <= 800) {
			$('#menu').addClass('mobile');
			if (menuIsVisible === 'true') {
				$('#hamburger').addClass('close');
			} else {
				$('#menu').hide();
				$('#hamburger').removeClass('close');
			}
		} else {
			$('#menu').removeClass('mobile');
			$('#menu').show();
			$('body').css('overflow-y', 'scroll');
			if (scroll === 0) {
				$("#top").removeClass("opaque");
			}
			menuIsVisible = false;
		}
	});

});









