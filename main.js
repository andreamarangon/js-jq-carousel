$(document).ready(function(){
  avanti();
  indietro();
});


//prendo l'evento del tasto premuto su tastiera
$(document).keyup(function (e) {
  //verifito tasto premuto
  if (e.keyCode == '39') {
    //scorro a destra
    var active = $('.active');
    if ((active).hasClass('last')) {
      $(active).removeClass('active');
      $('.first').addClass('active');
    } else {
      active.removeClass('active').next().addClass('active');
    };
  };
  //verifito tasto premuto
  if (e.keyCode == '37') {
    //scorro a sinistra
    var active = $('.active');
    if ((active).hasClass('first')) {
      $(active).removeClass('active');
      $('.last').addClass('active');
    } else {
      active.removeClass('active').prev().addClass('active');
    };
  };
});
//al click sul dot viene visualizzata l'immagine corrispondente
$('.fa-circle').click(function (){
  var dotPos = $('.fa-circle').index(this);
  var images = $('.slider-wrapper .images img');
  //rimuovo active
  $('.fa-circle').removeClass('active');
  images.removeClass('active');
  //metto active
  $(this).addClass('active');
  images.eq(dotPos).addClass('active');
});

//FUNCTION
function avanti(){
  var nextFoto = $('.next .fa-angle-right');
  nextFoto.click(function(){
    var active = $('.active');
    if ((active).hasClass('last')) {
      $(active).removeClass('active');
      $('.first').addClass('active');
    } else {
      active.removeClass('active').next().addClass('active');
    };
  });
};


function indietro(){
  var prevFoto = $('.prev .fa-angle-left');
  prevFoto.click(function(){
    var active = $('.active');
    if ((active).hasClass('first')) {
      $(active).removeClass('active');
      $('.last').addClass('active');
    } else {
      active.removeClass('active').prev().addClass('active');
    };
  });
};
