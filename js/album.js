(function() {
  'use strict';

  $('.photos')
  .find('li')
  .on('click', function zoom(event) {
    var zoomImg = $(this).toggleClass('zoomed');
    $('main').toggleClass('zooming');
    $(this).append($('nav'));
  });

  $('nav')
  .find('button')
  .on('click', function previous (event) {
    event.stopPropagation();

    var currentImg = $(this).closest('li');
    var prvImg = $(this).closest('li').prev();
    var nextImg = $(this).closest('li').next();

    if ($(this).is('.previous')) {
      prvImg.append($('nav'));
      prvImg.toggleClass('zoomed');
      currentImg.removeClass('zoomed');
    }
    else {
      nextImg.append($('nav'));
      nextImg.toggleClass('zoomed');
      currentImg.removeClass('zoomed');
    }

  });



})();
