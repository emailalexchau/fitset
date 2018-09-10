$(document).ready(function () {
	'use strict';
	var scroll;
	var menuIsVisible;
	
	if ($(window).width() <= 800) {
		$('#menu').addClass('mobile');
	} else {
		$('#menu').removeClass('mobile');
	}
	
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
			$('body').css('overflow', 'scroll');
			$('body').css('position', 'static');
			if (scroll === 0) {
				$("#top").removeClass("opaque");
			}
			$('.quotes').css('display', 'block');
			menuIsVisible = false;
		}
	});
	
	$('#hamburger').click(function () {
		if (menuIsVisible === true) {
			$('#hamburger').removeClass('close');
			// Unlock Screen Position
			$('body').css('overflow', 'scroll');
			$('body').css('position', 'static');
			$('.quotes').css('display', 'block');
			scroll = window.scrollTo(0, scroll);
			menuIsVisible = false;
			$('#menu').hide();
		} else {
			scroll = $(window).scrollTop();
			// Lock Screen Position
			$('body').css('overflow', 'hidden');
			$('body').css('position', 'fixed');
			$('.quotes').css('display', 'none');
			$('#hamburger').addClass('close');
			menuIsVisible = true;
			$('#menu').show();
		}
	});
	
	// Add Dark Background to Menu on Scroll
	$(window).scroll(function () {
		var y = $(window).scrollTop();

		if (y >= 70) {
			$("#top").addClass("opaque");
		} else {
			$("#top").removeClass("opaque");
		}
	});
});









