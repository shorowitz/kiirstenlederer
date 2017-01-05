$(document).ready(function() {
  console.log('script is linked')
    $('#fullpage').fullpage({
        anchors:['home', 'bio', 'skills', 'testimonials', 'contact'],
        slidesNavigation: true,
        menu: '#myMenu',
        scrollBar: true,
    });
  });
