$(document).ready(function() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 890) {
      $('.navbar').addClass('fixed-top');
    }
    if ($(window).scrollTop() < 891) {
      $('.navbar').removeClass('fixed-top');
    }
  }) 
})