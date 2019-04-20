$(document).ready(function() {

  $(window).scroll(function () {
    if ($(window).scrollTop() > 890) {
      $('.navbar').addClass('fixed-top');
    };

    if ($(window).scrollTop() < 891) {
      $('.navbar').removeClass('fixed-top');
    };
  }); 

});

$(".navbar-dark ul li a[href^='#']").on('click', function(e) {
  
  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function(){
    window.location.hash = hash;
  });

});

$("#section-parallax .col-sm-8 a[href^='#']").on('click', function (e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function () {
    window.location.hash = hash;
  });

});


$(".footer .scroll-to-top-button a[href^='#']").on('click', function (e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function () {
    window.location.hash = hash;
  });

});

// ANIMATIONS FOR FEATURES SECTION

$('.js-wp-1').waypoint(function(direction) {

  $('.js-wp-1').addClass('animated fadeInDown');
}, {
  offset: '70%'
});

$('.js-wp-2').waypoint(function (direction) {

  $('.js-wp-2').addClass('animated fadeInLeft');
}, {
    offset: '70%'
});

$('.js-wp-3').waypoint(function (direction) {

  $('.js-wp-3').addClass('animated fadeInUp');
}, {
    offset: '70%'
});

$('.js-wp-4').waypoint(function (direction) {

  $('.js-wp-4').addClass('animated fadeInRight');
}, {
    offset: '70%'
});

// ANIMATIONS FOR TIMELINE SECTION

$('.js-wp-timeline-title').waypoint(function (direction) {

  $('.js-wp-timeline-title').addClass('animated fadeInDownBig');
}, {
    offset: '70%'
  });

$('.js-wp-timeline-circles').waypoint(function (direction) {

  $('.js-wp-timeline-circles').addClass('animated fadeInUpBig');
}, {
    offset: '70%'
});

$('.js-wp-timeline-panel-left').waypoint(function (direction) {

  $('.js-wp-timeline-panel-left').addClass('animated fadeInLeftBig');
}, {
    offset: '70%'
});

$('.js-wp-timeline-panel-right').waypoint(function (direction) {

  $('.js-wp-timeline-panel-right').addClass('animated fadeInRight');
}, {
    offset: '70%'
});

// ANIMATIONS FOR PARALLAX SECTION

$('.js-wp-parallax').waypoint(function (direction) {

  $('.js-wp-parallax').addClass('animated zoomIn');
}, {
    offset: '70%'
});

// ANIMATIONS FOR CARDS SECTION

$('.js-wp-cards-title').waypoint(function (direction) {

  $('.js-wp-cards-title').addClass('animated bounceIn');
}, {
    offset: '70%'
});

$('.js-wp-card-left').waypoint(function (direction) {

  $('.js-wp-card-left').addClass('animated bounceInLeft');
}, {
    offset: '70%'
});

$('.js-wp-card-middle').waypoint(function (direction) {

  $('.js-wp-card-middle').addClass('animated bounceInUp');
}, {
    offset: '70%'
});

$('.js-wp-card-right').waypoint(function (direction) {

  $('.js-wp-card-right').addClass('animated bounceInRight');
}, {
    offset: '70%'
});

// ANIMATIONS FOR NUMBERS SECTION

$('.js-wp-numbers-title').waypoint(function (direction) {

  $('.js-wp-numbers-title').addClass('animated jackInTheBox');
}, {
    offset: '70%'
});

$('.js-wp-numbers-1').waypoint(function (direction) {

  $('.js-wp-numbers-1').addClass('animated rollIn');
}, {
    offset: '70%'
});

$('.js-wp-numbers-3').waypoint(function (direction) {

  $('.js-wp-numbers-3').addClass('animated rollIn');
}, {
    offset: '70%'
});

$('.js-wp-numbers-2').waypoint(function (direction) {

  $('.js-wp-numbers-2').addClass('animated rollIn');
}, {
    offset: '70%'
});

$('.js-wp-numbers-4').waypoint(function (direction) {

  $('.js-wp-numbers-4').addClass('animated rollIn');
}, {
    offset: '70%'
});

// ANIMATIONS FOR TESTIMONIALS SECTION

$('.js-wp-testimonials-title').waypoint(function (direction) {

  $('.js-wp-testimonials-title').addClass('animated lightSpeedIn');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-img1').waypoint(function (direction) {

  $('.js-wp-testimonial-img1').addClass('animated pulse');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-img2').waypoint(function (direction) {

  $('.js-wp-testimonial-img2').addClass('animated pulse');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-img3').waypoint(function (direction) {

  $('.js-wp-testimonial-img3').addClass('animated pulse');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-1').waypoint(function (direction) {

  $('.js-wp-testimonial-1').addClass('animated tada');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-2').waypoint(function (direction) {

  $('.js-wp-testimonial-2').addClass('animated tada');
}, {
    offset: '70%'
});

$('.js-wp-testimonial-3').waypoint(function (direction) {

  $('.js-wp-testimonial-3').addClass('animated tada');
}, {
    offset: '70%'
});