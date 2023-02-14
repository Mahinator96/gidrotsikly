$(function() {

  $('.menu__btn').on('click', function(e) {
    // e.preventDefault();
    $('.menu-mobile, .menu__btn').toggleClass('active');
  });

});