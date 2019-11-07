$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-JS
  require('./modules/noJs')();

  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Scroll2Ancor
  require('./modules/scroll2ancor')();

  // begin Slick slider
  require('./modules/slick')();

  // begin menu
  require('./modules/menu')();

  // begin Popup
  // require('./modules/popup')();

  // begin Parallax
  require('./modules/parallax')();

  // begin Animate.css
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  require('./modules/waypoints')();
  require('./modules/animateCss')();

  // begin Fancybox3
  // require('./modules/fancybox')();

});