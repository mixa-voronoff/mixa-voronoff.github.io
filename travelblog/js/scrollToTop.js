
'use strict';
(function() {
	function trackScroll() {
		let scrolled = window.pageYOffset; // на сколько пикселей страница пролистана вниз
		let height = window.innerHeight; // высота окна просмотра

		//window.innerHeight

		if (scrolled > height) {
			backToTopButton.classList.add('js-show');
		}
		if (scrolled < height) {
			backToTopButton.classList.remove('js-show');
		}
	}

	function backToTop() {
		if (window.pageYOffset > 0) {
				window.scrollTo ({
					top: 0,
					behavior: 'smooth',
				});
		}
	}

	let backToTopButton = document.querySelector('.back-to-top');

	window.addEventListener('scroll', trackScroll);
	backToTopButton.addEventListener('click', backToTop);
})();