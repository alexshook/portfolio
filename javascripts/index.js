$().ready(function() {
  var calculateHeight = $(window).height() / 5;
  var navHeight = $(window).height() - calculateHeight;

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - calculateHeight;
    if ($(window).scrollTop() > navHeight) {
      $('.nav').removeClass('nav-opacity').removeClass('nav-links').removeClass('navbar');
      $('.nav').addClass('fixed').addClass('navbar-fixed-wrapper');
      $('.nav-li-wrapper').removeClass('nav-links').addClass('nav-fixed');
    } else {
      $('.nav').removeClass('fixed').removeClass('nav-fixed').removeClass('navbar-fixed-wrapper');
      $('.nav').addClass('nav-opacity').addClass('navbar');
      $('.nav-li-wrapper').addClass('nav-links').removeClass('nav-fixed');
    }
    if ( ($(window).scrollTop() > navHeight) && ($(window).width() < 1199) ) {
      $('.nav').addClass('hidden');
    } else {
      $('.nav').removeClass('hidden');
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
