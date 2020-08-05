module.exports = function () {

  // begin parallax
  $(window).scroll(function () {
    $('.project-top__bg').css('background-position', 'center calc(50% + ' + ($(window).scrollTop() * 0.5) + 'px');
    $(".project-top__text").css("transform", "translateY(" + $(window).scrollTop() * 0.3 + "px)");
  });


  //основа кода для parallax взята отсюда
  //https://www.youtube.com/watch?v=kupwmF72Plo&feature=em-uploademail
  const animItems = document.querySelectorAll('.blog-content__preview-img');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {

      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = -1;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          let startPos = window.pageYOffset - animItemOffset;
          animItem.style.transform = "scale(1.1) translateY(" + startPos * 0.09 + "px)";
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll();
  }

  // end parallax

};