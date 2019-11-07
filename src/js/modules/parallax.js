module.exports = function() {

  // begin parallax
  $(window).scroll(function(){
    $('.project-top__bg').css('background-position','center calc(50% + '+($(window).scrollTop()*0.5)+'px');
    $(".project-top__text").css("transform", "translateY(" + $(window).scrollTop() * 0.3 + "px)");
  });
  // end parallax

};