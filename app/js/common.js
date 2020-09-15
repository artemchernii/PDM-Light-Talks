(function ($) {
	"use strict";

	// Preloader (if the #preloader div exists)
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(500).fadeOut('slow', function () {
				$(this).remove();
			});
		}
		if ($('#preloader_next').length) {
			$('#preloader_next').delay(500).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	// Initiate the wowjs animation library
	new WOW().init();

	// Header scroll class
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
			$('.img-fluid').css('display', 'block');
			// $('.link_next-img').remove('removearrow');
			// $('.link_next-img').addClass('scrollarrow2');
		} else {
			$('#header').removeClass('header-scrolled');
			$('.img-fluid').css('display', 'none');
			// $('.link_prev-img').addClass('removearrow');
			// $('.link_prev-img').removeClass('scrollarrow');
			// $('.link_next-img').addClass('removearrow');
			// $('.link_next-img').removeClass('scrollarrow2');
		}
		if ($(this).scrollTop() > 300) {
			// $('.link_prev-img').remove('removearrow');
			// $('.link_prev-img-1').addClass('scrollarrow');
			// $('.link_next-img').remove('removearrow');
			$('.link_next-img-1').addClass('scrollarrow2');
		} else {
			// $('.link_prev-img').addClass('removearrow');
			// $('.link_prev-img-1').removeClass('scrollarrow');
			// $('.link_next-img').addClass('removearrow');
			$('.link_next-img-1').removeClass('scrollarrow2');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}
	setTimeout(function () {
		// $('.link_prev-img').remove('removearrow');
		$('.link_prev-img').addClass('scrollarrow');
	}, 1000)

	// Smooth scroll for the navigation and links with .scrollto classes
	$('.main-nav a, .mobile-nav a, .scrollto').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						top_space = top_space + 50;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.main-nav, .mobile-nav').length) {
					$('.main-nav .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});
	$('.main-nav--next a, .mobile-nav a, .scrollto').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				var top_space = 0;

				if ($('#header').length) {
					top_space = $('#header').outerHeight();

					if (!$('#header').hasClass('header-scrolled')) {
						top_space = top_space + 50;
					}
				}

				$('html, body').animate({
					scrollTop: target.offset().top - top_space
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.main-nav--next, .mobile-nav').length) {
					$('.main-nav--next .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.main-nav, .mobile-nav');
	var main_nav_height = $('#header').outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		nav_sections.each(function () {
			var top = $(this).offset().top - main_nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				main_nav.find('li').removeClass('active');
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
		});
	});

})(jQuery);

function goTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

window.addEventListener('load', goTop);

// rellax
var rellax = new Rellax('.rellax');
// rellax