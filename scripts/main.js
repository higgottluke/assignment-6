
(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);

})(window);

// Silver Challenge
var $slider = $('#strengthLevel');
var valueIndicator = document.querySelector('#rating');

if ($slider) {
  $slider.on('input', function () {
    valueIndicator.innerHTML = $slider[0].value;
    if ($slider[0].value >= 85) {
      valueIndicator.setAttribute('class', 'red');
    }
    else if ($slider[0].value <= 15) {
      valueIndicator.setAttribute('class', 'green');
    }
    else {
      valueIndicator.setAttribute('class', 'yellow');
    }
  });
}
