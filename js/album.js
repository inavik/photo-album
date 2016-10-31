(function() {
'use strict';

$('.photos')
  .find('li')
    .on('click', function zoom(event) {
      var zoomImg = $(this).toggleClass('zoomed');
      console.log(this)
      $('main').toggleClass('zooming');
    })




})();
