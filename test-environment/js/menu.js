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

		if (y > 0) {
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
			menuIsVisible = false;
			$('#menu').hide();
			$('#hamburger').removeClass('close');
			// Unlock Screen Position
			$('body').css('overflow', 'scroll');
			$('.quotes').css('display', 'block');
			scroll = window.scrollTo(0, scroll);
		} else {
			scroll = $(window).scrollTop();
			// Lock Screen Position
			$('body').css('overflow', 'hidden');
			$('.quotes').css('display', 'none');
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
			$('body').css('overflow', 'scroll');
			$('body').css('position', 'static');
			if (scroll === 0) {
				$("#top").removeClass("opaque");
			}
			$('.quotes').css('display', 'block');
			menuIsVisible = false;
		}
	});

});









