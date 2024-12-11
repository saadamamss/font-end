$(document).ready(function () {
  "use strict";

  /*==================================
* Author        : "ThemeSine"
* Template Name : Furniture E- commarce HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. owl carousel
3. welcome animation support
4. cart close
======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 30) {
      $("header").css({
        background: "#fff",
        "box-shadow": "0px 3px 3px 1px rgba(0,0,0,0.2)",
      });
      $(".menu").removeClass("animated fadeInDown");
    } else {
      $("header").css({ background: "#f8f9fd", "box-shadow": "none" });
      $(".menu").addClass("animated fadeInDown");
    }

    if ($(this).scrollTop() > 600) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  // 2. owl carousel

  // i. client (carousel)

  $("#client").owlCarousel({
    items: 5,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      415: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });

  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });

  // ii.  testimonial-carousel

  $("#collection-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    mouseDrag: true,
    nav: false,
    smartSpeed: 1000,
    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOutLeft",
    // navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });
  //
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: false,
    mouseDrag: true,
    nav: false,
    smartSpeed: 1000,
    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOutLeft",
  }); /*
  $(".owl-carousel").on("changed.owl.carousel", function () {
    $(".desc h1,.desc span,.desc p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".desc a").removeClass("animated fadeInDown").css({ opacity: "0" });

    $(".desc h1,.desc span,.desc p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".desc a").addClass("animated fadeInDown").css({ opacity: "0" });
  });
  */

  // 3. welcome animation support

  $(window).load(function () {
    $(".desc h1,.desc span,.desc p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".desc a").removeClass("animated fadeInDown").css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".desc h1,.desc span,.desc p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".desc a").addClass("animated fadeInDown").css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".welcome-hero-txt h4,.welcome-hero-txt h2,.welcome-hero-txt p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-txt button")
      .removeClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".welcome-hero-txt h4,.welcome-hero-txt h2,.welcome-hero-txt p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-txt button")
      .addClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  // 4. cart-close
  $(".cart-close").click(function () {
    $(this).parents(".single-cart-list").fadeOut();
  });

  $(document).on("click", ".opensidenav", () => {
    //$(".menu").addClass("activenav animated fadeInUp");
    $(".menu").addClass("activenav");
    $(".opensidenav").addClass("closesidenav");
    $(".closesidenav").removeClass("opensidenav");
  });

  $(document).on("click", ".closesidenav", () => {
    //$(".menu").addClass("activenav animated fadeInUp");
    $(".menu").removeClass("activenav");
    $(".closesidenav").addClass("opensidenav");
    $(".opensidenav").removeClass("closesidenav");
  });
});
