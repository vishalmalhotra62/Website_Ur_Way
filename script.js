$(document).ready(function () {
  var num = 50; //number of pixels before modifying styles

  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > num) {
      $(".header").addClass("bac");
    } else {
      $(".header").removeClass("bac");
    }
  });

  var f = false;
  $(".navbar-toggler").click(function () {
    if (f) {
      $(".navbar-toggler").html('<img src="media/menu.png" alt="">');
      f = false;
    } else {
      $(".navbar-toggler").html('<img src="media/menu close.png" alt="">');
      f = true;
    }
  });

  $(".gbpb").click(function () {
    $(".menu_").toggle();
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    // center: true,
    stagePadding: 10,
    responsive: {
      0: {
        items: 1,
        center: true,
        stagePadding: 30,
        margin: -15,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".apibutton").click(function () {
    $(".applied").toggle();
    $(".fils").toggle();
  });

  $(".fb").click(function () {
    $(".filters").toggle();
    $(".fils").show();
    $(".applied").hide();
  });
});
