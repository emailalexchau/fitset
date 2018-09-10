$(document).ready(function () {
	'use strict';
	var scroll = 0;
	var menuIsVisible = null;
	
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
			$('body').css('overflow-y', 'scroll');
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
			$('#menu').slideUp(300);
			$('#hamburger').removeClass('close');
			menuIsVisible = false;
			// Unlock Screen Position
			$('body').css('overflow-y', 'scroll');
			$('body').css('position', 'static');
			$('.quotes').css('display', 'block');
			scroll = window.scrollTo(0, scroll);
			
			if (scroll < 70) {
				$("#top").addClass("opaque");
			}
		} else {
			scroll = $(window).scrollTop();
			$('#menu').slideDown(300);
			$('#hamburger').addClass('close');
			menuIsVisible = true;
			// Lock Screen Position
			$('body').css('overflow-y', 'hidden');
			$('body').css('position', 'fixed');
			$('.quotes').css('display', 'none');
			// Scroll Window Back to Original Position
			
		}
	});
	
	// Add Dark Background to Menu on Scroll
	$(window).scroll(function () {
		scroll = $(window).scrollTop();

		if (scroll >= 70) {
			$("#top").addClass("opaque");
		} else {
			$("#top").removeClass("opaque");
		}

		if (menuIsVisible === true) {
			$("#top").addClass("opaque");
		}

	});

});








