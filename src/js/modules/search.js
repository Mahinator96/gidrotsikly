$(function() {

  $('.tab').on('click', function(e){
    e.preventDefault();

    let id = $(this).attr('href');

    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active'); 

    $(this).addClass('tab--active');
    $(id).addClass('tabs-content--active');
  });
});