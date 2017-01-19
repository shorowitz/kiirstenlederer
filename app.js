$(document).ready(function() {
  console.log('script is linked')
  // if ( $(window).width() < 800 || window.Touch) {
  //                     var $sensitivity = 10;
  //                 } else{
  //                     var $sensitivity = 100;
  //                 };

    $('#fullpage').fullpage({
        anchors:['home', 'bio', 'skills', 'testimonials', 'contact'],
        slidesNavigation: true,
        menu: '#myMenu',
        scrollBar: true,
        autoScrolling: false
    });
  });
