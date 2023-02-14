$(function() {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnprev"> <img src="../img/arrow-left.svg" alt="Стрелка влево"> </button> ',
    nextArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnnext"> <img src="../img/arrow-right.svg" alt="Стрелка вправо"> </button> ',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          // variableWidth: true,
        }
      }
    ],
  });

});