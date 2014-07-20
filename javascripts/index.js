$().ready(function() {

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 50;
    if ($(window).scrollTop() > navHeight) {
      $('.nav').removeClass('nav-opacity').removeClass('nav-links').removeClass('navbar');
      $('.nav').addClass('fixed').addClass('navbar-fixed-wrapper');
      $('.nav-li-wrapper').removeClass('nav-links').addClass('nav-fixed');
    } else {
      $('.nav').removeClass('fixed').removeClass('nav-fixed').removeClass('navbar-fixed-wrapper');
      $('.nav').addClass('nav-opacity').addClass('navbar');
      $('.nav-li-wrapper').addClass('nav-links').removeClass('nav-fixed');
    }
  });

  $('.down').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#about').offset().top
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

  $('#nav-press').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#press').offset().top
    }, 1000);
  });

});
