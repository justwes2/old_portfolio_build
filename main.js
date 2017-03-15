$(document).ready(function() {
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() >282) {
      $('.topbar').addClass("navbar-fixed");
      $('header').append("<div class='placeholder'></div>")
    }
    if ($(window).scrollTop() <283) {
      $('.topbar').removeClass("navbar-fixed");
    }
  })
})
