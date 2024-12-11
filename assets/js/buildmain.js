$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
      $("header").css({
        "box-shadow": "0px 3px 3px 1px rgba(0,0,0,0.2)",
      });
      $(".mynav").removeClass("animated fadeInDown");
    } else {
      $("header").css({ "box-shadow": "none" });
      $(".mynav").addClass("animated fadeInDown");
    }

    /********************************************* */
  });

  // $(document).on("click", ".openside", function () {
  //   $(".menu").addClass("activesidenav");
  //   $(".listbtn").removeClass("openside");
  //   $(".listbtn").addClass("closeside");
  // });

  // $(document).on("click", ".closeside", function () {
  //   $(".menu").removeClass("activesidenav");
  //   $(".listbtn").removeClass("closeside");
  //   $(".listbtn").addClass("openside");
  // });
});

window.addEventListener("scroll", thereveal);
var reveals = document.querySelectorAll(".reveals");

function thereveal() {
  
  reveals.forEach((reveal) => {
    var windowheight = window.innerHeight;
    var revealtop = reveal.getBoundingClientRect().top;
    var revealbottom = reveal.getBoundingClientRect().bottom;
    var revealpoint = 100;

    //&& revealbottom > windowheight - revealpoint
    /*
        if (revealtop < windowheight - revealpoint) {
            reveal.classList.add("animated");
            reveal.classList.add("fadeInUp");
            reveal.style.opacity = "1";
        } else {
            reveal.classList.remove("animated");
            reveal.classList.remove("fadeInUp");
            reveal.style.opacity = "0";
        }

        if (revealbottom < 75) {
            reveal.style.opacity = "0";
            reveal.classList.remove("animated");
            reveal.classList.remove("fadeInUp");
        }
*/

    if (revealtop < 0.75 * windowheight && revealbottom > 200) {
      reveal.classList.add("fadeInUp");
      reveal.classList.remove("fadeOutUp");
      //reveal.style.opacity = "1";
    }

    if (revealtop > windowheight || revealbottom < 0) {
      //reveal.classList.remove("animated");
      reveal.classList.remove("fadeInUp");
      reveal.classList.add("fadeOutUp");
      //reveal.style.opacity = "1";
    }
  });
}
