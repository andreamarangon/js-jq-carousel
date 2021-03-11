$(document).ready(function(){
  avanti();
  indietro();
});


function avanti(){
  var nextFoto = $('.next .fa-angle-right');
  nextFoto.click(function(){
    var active = $('.active')
    active.removeClass('active').next().addClass('active');
  });

};

function indietro(){
  var prevFoto = $('.prev .fa-angle-left');
  prevFoto.click(function(){
    var active = $('.active')
    active.removeClass('active').prev().addClass('active');

  });

};
