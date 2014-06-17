$().ready(function() {

 $(window).bind('scroll', function() {
   var navHeight = $(window).height() - 70;
     if ($(window).scrollTop() > navHeight) {
       $('.nav').removeClass('nav-opacity').removeClass('nav-right').removeClass('navbar');
       $('.nav').addClass('fixed').addClass('navbar-fixed-wrapper');
       $('.nav-li-wrapper').removeClass('nav-right').addClass('nav-fixed');
       $('#nav-name').removeClass('hidden');
     }
     else {
      $('.nav').removeClass('fixed').removeClass('nav-fixed').removeClass('navbar-fixed-wrapper');
      $('.nav').addClass('nav-opacity').addClass('navbar');
      $('.nav-li-wrapper').addClass('nav-right').removeClass('nav-fixed');
       $('#nav-name').addClass('hidden');
     }
  });


  $('.down').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 1000);
  });

  $('#nav-name').click(function(e) {
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
