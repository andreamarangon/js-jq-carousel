$(document).ready(function(){
  avanti();

});


function avanti(){
  var nextFoto = $('.next .fa-angle-right');
  var prevFoto = $('.prev .fa-angle-left');
  var active = $('.active')
  nextFoto.click(function(){
    active.removeClass('active').next().addClass('active');

  });

};
