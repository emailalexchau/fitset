$(document).ready(function () {
	'use strict';
	var menuIsVisible;

	if ($(window).width() <= 800) {
		$('#menu').addClass('mobile');
	} else {
		$('#menu').removeClass('mobile');
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() > 0) {
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
			// Close Menu
			$('#hamburger').removeClass('close');
			$('#menu').hide();
			$('body').css('overflow', '');

			// Enable Scrolling
			document.ontouchmove = function (e) {
				return true;
			};

			menuIsVisible = false;

			if ($(window).scrollTop() === 0) {
				$("#top").removeClass("opaque");
			}

		} else {
			// Open Menu
			$('#hamburger').addClass('close');
			$('#menu').show();
			$('body').css('overflow', 'hidden');
			$("#top").addClass("opaque");

			// Disable Scrolling
			document.addEventListener('touchmove', function (e) {
				e.preventDefault();
			}, {
				passive: false
			});

			menuIsVisible = true;
		}
	});

	$(window).resize(function () {
		if ($(window).width() <= 800) {
			$('#menu').addClass('mobile');

			if (menuIsVisible === true) {
				$('#hamburger').addClass('close');
				$('#menu').show();
			} else {
				$('#menu').hide();
			}

		} else {
			$('#menu').removeClass('mobile');
			$('#menu').show();
		}
	});
});
