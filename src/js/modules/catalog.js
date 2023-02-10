$(function(){

  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra-title').on('click', function(){
    $(this).parent().toggleClass('active');
    $(this).next('.aside-filter__content, .filter__extra-content').slideToggle(300);
  });

  $(".js-range-slider").ionRangeSlider({
    
  });

  $('.jq-selectbox__select').on('click', function (){
    $(this).toggleClass('active');
  });

  $('.catalog__filter-btngrid').on('click', function (){
    $('.catalog__filter-btnlist').removeClass('active');
    $(this).addClass('active');

    $('.products-item__wrapper').removeClass('products-item__wrapper--list');
  });

  $('.catalog__filter-btnlist').on('click', function (){
    $('.catalog__filter-btngrid').removeClass('active');
    $(this).addClass('active');

    $('.products-item__wrapper').addClass('products-item__wrapper--list');
  });

  let contentCheckBtn = document.querySelector('.aside-filter__item.btn-checked').querySelectorAll('.aside-filter__content-box');
  $(contentCheckBtn).on('click', function (){
    $(this).toggleClass('checked');
  });
});