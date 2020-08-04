module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!

  //main
  $('.header, .index-footer').addClass("animated fadeIn");

  //index
  $('.index__content-wrap').addClass("animated fadeInUp");
  $('.index__items').addClass("animated fadeInUp");

  //contacts
  $('.contacts-content__title').addClass("animated fadeInUp");
  $('.contacts-content__text').addClass("animated fadeInUp");

  $('.contacts-content__right').addClass("animated fadeIn");

  //error
  $('.error-content__title').addClass("animated fadeInUp");
  $('.error-content__text').addClass("animated fadeInUp");

  $('.error-content__right').addClass("animated fadeIn");

  //project
  $('.project-top__text-inn').addClass("animated fadeInUp");

  $('.project-top__anim-icon').addClass("animated fadeIn");
  $('.project-top__descr').addClass("animated fadeIn");

  //clients
  $(".clients-content__item").css('opacity', 0);

  function fadeInUp(block) {
    let windowHeight = $(window).height();

    block.each(function() {
      let self = $(this),
        height = self.offset().top + self.height();
      if ($(document).scrollTop() + windowHeight >= height - 100) {
        self.addClass('animated');
        self.addClass('fadeInUp');
      } else {
        self.removeClass('animated');
        self.removeClass('fadeInUp');
      }
    });
  }

  $(document).ready(function() {
    fadeInUp($('.clients-content__item'));
  });

  $(document).on('scroll', function() {
    fadeInUp($('.clients-content__item'));
  });


  // $(document).ready(function() {
  //   let windowHeight = $(window).height();
  //   $(document).on('scroll', function() {
  //     $('.clients-content__item').each(function() {
  //       let self = $(this),
  //         height = self.offset().top + self.height();
  //       if ($(document).scrollTop() + windowHeight >= height) {
  //         self.addClass('fadeInUp');
  //       }
  //     });
  //   });
  // });
  // end Animate CSS + WayPoints javaScript Plugin

};