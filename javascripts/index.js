$().ready(function() {

 $(window).bind('scroll', function() {
   var navHeight = $(window).height() - 250;
     if ($(window).scrollTop() > navHeight) {
       $('.nav').addClass('fixed');
       $('.nav').removeClass('nav-opacity');
     }
     else {
       $('.nav').removeClass('fixed');
       $('.nav').addClass('nav-opacity');

     }
  });

  $('#name').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('.full-width').offset().top
    }, 1000);
  });

  $('#nav-about').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 1000);
  });

  $('#nav-projects').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 1000);
  });

  $('#nav-contact').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });

});
