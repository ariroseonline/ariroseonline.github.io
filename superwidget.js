// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require handlebars
//= require vendor/ember
//= require_self
//= require GWIdget



GWIdget = Ember.Application.create({
  LOG_TRANSITIONS: true, 


  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true

});

$(function () {

  if (window.WATCHITXD) {

    $(window).load(function(){

      console.log('attempt to send message to parent frame');
      WATCHITXD.send_message_to_parent('watchit-frame-loaded', {
        key: 'value'
      });

      //Wait for images to load before reporting height to parent frame
      WATCHITXD.send_message_to_parent('watchit-frame-resize', {
        frameId: window.name,
        widgetHeight: $(document).height()
      });
    })

  }

});

