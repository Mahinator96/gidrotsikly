$(function(){

  $('.products-item__favorite').on('click', function(e) {
    e.preventDefault();

    
    $(this).toggleClass('products-item__favorite--active');
  });

  $('.products-slider').slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: ' <button class="product__slider-btn product__slider-btnprev"> <img src="../img/arrow__black-left.svg" alt="Стрелка влево"> </button> ',
    nextArrow: ' <button class="product__slider-btn product__slider-btnnext"> <img src="../img/arrow__black-right.svg" alt="Стрелка вправо"> </button> ',
  });

});

