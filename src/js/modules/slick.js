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

  $('.cases-slider').slick({
    infinite: true,
    dots:false,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
    touchMove: true,
    swipe: true,
    touchThreshold: 100,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".cases-slider").on("wheel", function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  });



  $('.project-slider').slick({
    infinite: true,
    dots:false,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    touchMove: true,
    swipe: true,
    touchThreshold: 100,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 981,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 681,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 426,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".project-slider").on("wheel", function(e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickPrev");
    } else {
      $(this).slick("slickNext");
    }
  });

  // end Slick slider

};