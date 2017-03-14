(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector:' + selector);
    }

    FormHandler.prototype.addSubmitHandler = function (fn) {
      console.log('Setting submit handler for form');
      this.$formElement.on('submit', function (event) {
        event.preventDefault();
        $('[data-achiev-form]').toggle();

        var data = {};
        $(this).serializeArray().forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        });
        console.log(data);

        // Gold Challenge
        if (data['size'] == 'trenta' && data['flavor'] && data['strength'] == 100) {
          var modal = $('#achievement');
          modal.modal();
          if (data['emailAddress']) {
            $('[data-achiev-form]').toggle();
          }
        }

        fn(data);
        this.reset();
        this.elements[0].focus();

      });
    };
  }
  App.FormHandler = FormHandler;
  window.App = App;
})(window);
