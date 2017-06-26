var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

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

  return false;

}

function step2() {

  var pop = document.querySelector('.contact‐form__popup-error');
  pop.classList.remove('contact‐form__popup--opened');
  pop.classList.add('contact‐form__popup--closed');

  pop = document.querySelector('.contact‐form__popup-ok');

  pop.classList.remove('contact‐form__popup--closed');
  pop.classList.add('contact‐form__popup--opened');

  return true;

}

function initMap() {
  var uluru = { lat: 34.8543734, lng: -111.8651767 };
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 7,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
