(function() {
'use strict';

$('.photos')
  .find('li')
    .on('click', function zoom(event) {
      var zoomImg = $(this).toggleClass('zoomed');
      $('main').toggleClass('zooming');
      $(this).append($('nav'));
    })




})();
