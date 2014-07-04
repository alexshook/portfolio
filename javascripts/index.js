$().ready(function() {

  $(window).bind('scroll', function() {

    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $('.nav').removeClass('nav-opacity', 1000).removeClass('nav-right', 1000).removeClass('navbar', 1000);
      $('.nav').addClass('fixed', 1000).addClass('navbar-fixed-wrapper', 1000);
      $('.nav-li-wrapper').removeClass('nav-right', 1000).addClass('nav-fixed', 1000);
      $('#nav-name').removeClass('hidden', 1000);
    } else {
      $('.nav').removeClass('fixed', 1000).removeClass('nav-fixed', 1000).removeClass('navbar-fixed-wrapper', 1000);
      $('.nav').addClass('nav-opacity', 1000).addClass('navbar', 1000);
      $('.nav-li-wrapper').addClass('nav-right', 1000).removeClass('nav-fixed', 1000);
       $('#nav-name').addClass('hidden', 1000);
    }
  }); // end window.bind scroll


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
