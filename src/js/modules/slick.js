module.exports = function () {

  // begin Slick slider

  $('#index-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed:5000,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('#index-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-circle, .index-footer__item').removeClass('active');
    $('.slider-circle--0' + nextSlide).addClass('active');
    $('.index-footer__item--0' + nextSlide).addClass('active');

  });

  // end Slick slider

};