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
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ],
  });

  $('.products-slider').slick('setPosition');


});

