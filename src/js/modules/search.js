$(function() {

  $('.tab').on('click', function(e){
    e.preventDefault();

    let id = $(this).attr('href') || $(this).attr('data-area');

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active'); 

    $(this).addClass('tab--active');
    $(id).addClass('tabs-content--active');
  });
});