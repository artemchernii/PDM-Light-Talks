// CAROUSEL
(function ($) {
	"use strict";
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: false,
		dots: false,
		nav: true,
		center: true,
		animateOut: 'fadeOut',
		navText: ['<img src="img/arrow_left.svg" class="edicao_prev">', '<img src="img/arrow_right.svg" class="edicao_next">'],
		margin: 10,
		callbacks: true,
		URLhashListener: true,
		autoplayHoverPause: true,
		mouseDrag: false,
		startPosition: '#talk1'
	});
})(jQuery);
// CAROUSEL

// Clear URL
function clearUrl() {
	window.location.replace("#");
	if (typeof window.history.replaceState == 'function') {
		history.replaceState({}, '', window.location.href.slice(0, -1));
	}
	edicaolinks[index].classList.add('active');
}
window.addEventListener('load', clearUrl);
// Clear URL

// NAVIGATION
const edicaoMenu = document.querySelector('.header_edicao__list'),
	edicaolinks = edicaoMenu.querySelectorAll('.header_edicao__list-link'),
	link = document.querySelector('.header_edicao__list-link'),
	owlNext = document.querySelector('.owl-next'),
	owlPrev = document.querySelector('.owl-prev');

let index = 0;

function next() {
	edicaolinks.forEach(el => el.classList.remove('active'));
	if (0 < index < 5) {
		index++;
	}
	edicaolinks[index].classList.add('active');
}

function prev() {
	edicaolinks.forEach(el => el.classList.remove('active'));
	if (0 < index < 5) {
		index--;
	}
	edicaolinks[index].classList.add('active');
}


owlNext.addEventListener('click', (e) => {
	e.preventDefault();
	next();
})


owlPrev.addEventListener('click', (e) => {
	e.preventDefault();
	prev();
})

edicaoMenu.addEventListener('click', (e) => {
	edicaolinks.forEach(el => el.classList.remove('active'));
	let target = e.target;
	if (!target.classList.contains('active')) {
		target.classList.add('active');
	}
	edicaolinks.forEach(el => {
		if (el.classList.contains('active')) {
			index = el.id;
		}
	})
})

// NAVIGATION