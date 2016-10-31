(function() {
'use strict';

$('.photos')
  .find('li')
    .on('click', function zoom(event) {
      var zoomImg = $(this).addClass('zoomed');
      console.log(this)
      $('main').addClass('zooming');
    })




})();
