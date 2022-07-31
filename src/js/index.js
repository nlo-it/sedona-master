'use strict';

svg4everybody();

(function () {
  var FORM_OPENED = 'form-search--opened';
  var FORM_SHOW = 'form-search--visible';
  var FORM_HIDE = 'form-search--hidden';

  var FORM_SEARCH = '.form-search';
  var BUTTON_SEARCH = '.search-hotel__button';

  var formSearch = document.querySelector(FORM_SEARCH);
  var buttonSearchHotel = document.querySelector(BUTTON_SEARCH);

  try {
    if (!formSearch) {
      throw new UserException(FORM_SEARCH);
    }

    formSearch.classList.remove(FORM_OPENED);
    formSearch.classList.add(FORM_HIDE);

    if (!buttonSearchHotel) {
      throw new UserException(BUTTON_SEARCH);
    }

    buttonSearchHotel.addEventListener('click', function (event) {
      event.preventDefault();

      formSearch.classList.toggle(FORM_HIDE);
      formSearch.classList.toggle(FORM_SHOW);
    });
  } catch (e) {
    console.log(e.name + ': ' + e.message);
  }

  function UserException(message) {
    this.message = message + ' does not exists.';
    this.name = 'UserException';
  }
})();

// Google карта
function initMap() {
  var latLng = new google.maps.LatLng(34.868633, -111.761734);

  var mapOptions = {
    center: latLng,
    zoom: 9,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scrollwheel: false,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    map: map,
    position: latLng
  });
}
