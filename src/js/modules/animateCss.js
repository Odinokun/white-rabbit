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
  // $(".index__content-wrap, .index__items").waypoint(function() {
  //   $(this).addClass("animated fadeInUp");
  // }, {
  //   offset: "100%"
  // });


  // end Animate CSS + WayPoints javaScript Plugin

};