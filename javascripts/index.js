$().ready(function() {
 $(window).bind('scroll', function() {
   var winHeight = $(window).height();
   var h = $('.nav-li-wrapper').offset();
   var navLiHeight = h.top;
   var navHeight = winHeight - (navLiHeight - 125);
   if ($(window).scrollTop() > navHeight) {
     $('.nav').addClass('fixed');
     $('.nav-li-wrapper').addClass('nav-fixed');
     $('.name').addClass('hidden');
     if ($(window).width() < 750) {
      console.log($(window).width());
      $('.navbar').addClass('hidden');
     }
   }
   else {
    $('.nav').removeClass('fixed').removeClass('nav-fixed');
    $('.nav-li-wrapper').removeClass('nav-fixed');
    $('.name').removeClass('hidden');
    if ($(window).width() < 750)  {
      $('.navbar').removeClass('hidden');
    }
   }
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
