
var mainNav = document.querySelector('.main-nav');
var navToggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');
navToggle.addEventListener('click', function(evt){
	evt.preventDefault();
	mainNav.classList.toggle('main-nav--closed');
	mainNav.classList.toggle('main-nav--open');
});
//Слайдер преимуществ
var advantageItems = document.querySelectorAll('.advantage__item');
var advantageButtons = document.querySelectorAll('.advantage__button');
if (advantageItems && advantageButtons) {
	for (var i = 0; i < advantageButtons.length; i++) {
		advantageButtons[i].dataset.dt = i;
		advantageButtons[i].addEventListener('click', function (evt) {
			evt.preventDefault();

			for (var j = 0; j < advantageItems.length; j++) {
				advantageItems[j].classList.remove('advantage__item--current');
				advantageButtons[j].classList.remove('slide-radio__button--current');
			}
			this.classList.add('slide-radio__button--current');
			advantageItems[this.dataset.dt].classList.add('advantage__item--current');
		});
	}
}
//Слайдер отзывов

var reviews = document.querySelector('.reviews');


var reviewsItems = document.querySelectorAll('.reviews__item');
var reviewsButtons = document.querySelectorAll('.reviews__button');

var buttonNext = document.querySelector('.reviews__slide-button--next');
var buttonPrevious = document.querySelector('.reviews__slide-button--previous');
if (reviews && reviewsItems && reviewsButtons && buttonNext && buttonPrevious){
reviews.classList.remove('reviews--no-js');
//Кнопки вперед\назад
buttonNext.addEventListener('click', function(evt){
	evt.preventDefault();
	for (var i=0; i < reviewsItems.length -1 ; i++){
		if (reviewsItems[i].classList.contains('reviews__item--current')){
			reviewsItems[i].classList.remove('reviews__item--current');
			reviewsButtons[i].classList.remove('slide-radio__button--current');
			reviewsButtons[i + 1].classList.add('slide-radio__button--current');
			reviewsItems[i + 1].classList.add('reviews__item--current');
			
			if (!(reviewsItems[i + 2])) {
				buttonNext.classList.add('reviews__slide-button--disabled');
			} else {
				buttonNext.classList.remove('reviews__slide-button--disabled');
			}
			if (!(reviewsItems[i])) {
				buttonPrevious.classList.add('reviews__slide-button--disabled');
			} else {
				buttonPrevious.classList.remove('reviews__slide-button--disabled');
			}
			break;
		}
		
	}
});
buttonPrevious.addEventListener('click', function(evt){
	evt.preventDefault();
	for (var j = 0; j < reviewsItems.length ; j++){
		if (reviewsItems[j].classList.contains('reviews__item--current') && j > 0){
			reviewsItems[j].classList.remove('reviews__item--current');
			reviewsButtons[j].classList.remove('slide-radio__button--current');
			reviewsButtons[j - 1].classList.add('slide-radio__button--current');
			reviewsItems[j - 1].classList.add('reviews__item--current');
			if (!(reviewsItems[j])) {
				buttonNext.classList.add('reviews__slide-button--disabled');
			} else {
				buttonNext.classList.remove('reviews__slide-button--disabled');
			}
			console.log(j)
			if (!(reviewsItems[j-2])) {
				buttonPrevious.classList.add('reviews__slide-button--disabled');
			} else {
				buttonPrevious.classList.remove('reviews__slide-button--disabled');
			}

			break;
		}
	}
});
//Радиокнопки
for (var i = 0; i < reviewsButtons.length; i++) {
	reviewsButtons[i].dataset.dt = i;
	reviewsButtons[i].addEventListener('click', function (evt) {
		evt.preventDefault();
		for (var j = 0; j < reviewsItems.length; j++) {
			reviewsItems[j].classList.remove('reviews__item--current');
			reviewsButtons[j].classList.remove('slide-radio__button--current');
		}
		this.classList.add('slide-radio__button--current');
		reviewsItems[this.dataset.dt].classList.add('reviews__item--current');

		if (this.dataset.dt == reviewsItems.length-1){
			buttonNext.classList.add('reviews__slide-button--disabled');
		} else {
			buttonNext.classList.remove('reviews__slide-button--disabled');
		}

		if (this.dataset.dt == 0){
			buttonPrevious.classList.add('reviews__slide-button--disabled');
		} else {
			buttonPrevious.classList.remove('reviews__slide-button--disabled');
		}
	});
}
}
//ПопАп
var popup = document.querySelector('.modal-login');
var popupShow = document.querySelector('.user-list__link--entry');
var popupClose = popup.querySelector('.modal-login__close');
if (popup && popupShow && popupClose) {
	popup.classList.remove('modal-login--no-js');
	popupShow.addEventListener('click', function(evt){
		evt.preventDefault();
		popup.classList.add('modal-login--modal-show');
	});
	popupClose.addEventListener('click', function(evt){
		evt.preventDefault();
		popup.classList.remove('modal-login--modal-show');
	});
}