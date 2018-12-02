/*new AnimOnScroll( document.getElementById( 'grid' ), {
  minDuration : 0.4,
  maxDuration : 0.7,
  viewportFactor : 0.2
} );
*/

$(document).ready(function(){
  $('.myslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});
