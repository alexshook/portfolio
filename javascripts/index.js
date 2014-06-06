$().ready(function() {

  $('#name').click(function(e) {
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

});
