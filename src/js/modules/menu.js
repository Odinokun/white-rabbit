module.exports = function () {

  // begin menu

  $('.header__burger').on('click', function () {
    $('.header__menu').addClass('active');

    $('.header-menu__item').addClass("animated fadeInUp");
    $('.header-menu__brief-btn').addClass("animated fadeInUp");
  });

  $('.header-menu__close').on('click', function () {
    $('.header__menu').removeClass('active');

    $('.header-menu__item').removeClass("animated fadeInUp");
    $('.header-menu__brief-btn').removeClass("animated fadeInUp");
  })




  // end menu

};