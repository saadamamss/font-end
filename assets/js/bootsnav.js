// ------------------------------------------------------------------------------ //
//
// Template name : Bootsnav - Multi Purpose Header
// Categorie : Bootstrap Menu in CSS
// Author : adamnurdin01
// Version : v.1.2
// Created : 2016-06-02
// Last update : 2016-10-19
//
// ------------------------------------------------------------------------------ //

(function ($) {
  "use strict";

  var bootsnav = {
    initialize: function () {
      this.event();
 
      this.navbarSticky();
      this.navbarScrollspy();
    },
    event: function () {
      // ------------------------------------------------------------------------------ //
      // Variable
      // ------------------------------------------------------------------------------ //
      var getNav = $("nav.navbar.bootsnav");

      // ------------------------------------------------------------------------------ //
      // Navbar Sticky
      // ------------------------------------------------------------------------------ //
      var navSticky = getNav.hasClass("navbar-sticky");
      if (navSticky) {
        // Wraped navigation
        getNav.wrap("<div class='wrap-sticky'></div>");
      }




 


      // ------------------------------------------------------------------------------ //
      // Wrapper
      // ------------------------------------------------------------------------------ //
      $("body").wrapInner("<div class='wrapper'></div>");
    },

    // ------------------------------------------------------------------------------ //
    // Change dropdown to hover on dekstop
    // ------------------------------------------------------------------------------ //


    // ------------------------------------------------------------------------------ //
    // Navbar Sticky
    // ------------------------------------------------------------------------------ //
    navbarSticky: function () {
      var getNav = $("nav.navbar.bootsnav"),
        navSticky = getNav.hasClass("navbar-sticky");

      if (navSticky) {
        // Set Height Navigation
        var getHeight = $("header").height();
        $(".wrap-sticky").height(getHeight);

        // Windown on scroll
        var getOffset = $(".wrap-sticky").offset().top;
        $(window).on("scroll", function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > getOffset) {
            getNav.addClass("sticked");
          } else {
            getNav.removeClass("sticked");
          }
        });
      }
    },

    // ------------------------------------------------------------------------------ //
    // Navbar Scrollspy
    // ------------------------------------------------------------------------------ //
    navbarScrollspy: function () {
      var navScrollSpy = $(".navbar-scrollspy"),
        $body = $("body"),
        getNav = $("nav.navbar.bootsnav"),
        offset = getNav.outerHeight();

      if (navScrollSpy.length) {
        //$body.scrollspy({ target: ".navbar", offset: offset });

        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: "#navbar-header",
        });

        // Animation Scrollspy
        $(".scroll").on("click", function (event) {
          event.preventDefault();

          // Active link
          $(".scroll").removeClass("active");
          $(this).addClass("active");

          // Remove navbar collapse
          $(".navbar-collapse").removeClass("in");

          // Toggle Bars
          $(".navbar-toggle").each(function () {
            $(".fa", this).removeClass("fa-times");
            $(".fa", this).addClass("fa-bars");
          });

          // Scroll
          var scrollTop = $(window).scrollTop(),
            $anchor = $(this).find("a"),
            $section = $($anchor.attr("href")).offset().top,
            $window = $(window).width(),
            $minusDesktop = getNav.data("minus-value-desktop"),
            $minusMobile = getNav.data("minus-value-mobile"),
            $speed = 0;

          if ($window > 992) {
            var $position = $section - $minusDesktop;
            $speed = getNav.data("speed");
          } else {
            var $position = $section - $minusMobile;
            $speed = 0;
          }

          $("html, body").stop().animate(
            {
              scrollTop: $position,
            },
            $speed
          );
        });

        // Activate Navigation
        var fixSpy = function () {
          var data = $body.data("bs.scrollspy");
          if (data) {
            offset = getNav.outerHeight();
            data.options.offset = offset;
            $body.data("bs.scrollspy", data);
            $body.scrollspy("refresh");
          }
        };

        // Activate Navigation on resize
        var resizeTimer;
        $(window).on("resize", function () {
          clearTimeout(resizeTimer);
          var resizeTimer = setTimeout(fixSpy, 200);
        });
      }
    },
  };

  // Initialize
  $(document).ready(function () {
    bootsnav.initialize();
  });

  // Reset on resize
  $(window).on("resize", function () {
    setTimeout(function () {
      bootsnav.navbarSticky();
    }, 500);

    // Toggle Bars
    $(".navbar-toggle").each(function () {
      $(".fa", this).removeClass("fa-times");
      $(".fa", this).addClass("fa-bars");
      $(this).removeClass("fixed");
    });
    $(".navbar-collapse").removeClass("in");
    $(".navbar-collapse").removeClass("on");
    $(".navbar-collapse").removeClass("bounceIn");
  });
})(jQuery);
