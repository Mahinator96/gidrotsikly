$(function() {

  $('.search__tabs-item').on('click', function(e){
    e.preventDefault();

    let id = $(this).attr('href');

    $('.search__tabs-item').removeClass('search__tabs-item--active');
    $('.search__content-item').removeClass('search__content-item--active'); 

    $(this).addClass('search__tabs-item--active');
    $(id).addClass('search__content-item--active');
  });
});