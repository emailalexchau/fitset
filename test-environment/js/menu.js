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
			
			
			$('body').css('overflow', 'scroll');
			$('body').css('overflow-x', 'hidden');
			$('body').css('height', '');
			window.scrollTo(0, scroll);
			menuIsVisible = false;
			
			var y = $(window).scrollTop();

			if (y > 5) {
				$("#top").addClass("opaque");
			} else {
				$("#top").removeClass("opaque");
			}
		} else {
			scroll = $(window).scrollTop();
			$('body').css('overflow', 'hidden');
			$('body').css('height', '100%');
			$('#hamburger').addClass('close');
			$("#top").addClass("opaque");
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
			if (scroll === 0) {
				$("#top").removeClass("opaque");
			}
			menuIsVisible = false;
		}
	});

});









