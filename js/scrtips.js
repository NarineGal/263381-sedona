var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function step1() {

  var pop = document.querySelector('.contact‐form__popup-error');

  pop.classList.remove('contact‐form__popup--closed');
  pop.classList.add('contact‐form__popup--opened');

}

function step2() {

  var pop = document.querySelector('.contact‐form__popup-error');
  pop.classList.remove('contact‐form__popup--opened');
  pop.classList.add('contact‐form__popup--closed');

  pop = document.querySelector('.contact‐form__popup-ok');

  pop.classList.remove('contact‐form__popup--closed');
  pop.classList.add('contact‐form__popup--opened');

}

function step3() {

  document.getElementById('xxx').click();

}
