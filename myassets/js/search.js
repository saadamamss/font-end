$(document).ready(function () {
  var min_width = $(".navbar").data("min-w");
  var max_width = $(".navbar").data("max-w");

  $("#searchbtn").on("click", function () {
    if ($("header").hasClass("activesearch")) {
      $("#searchform").submit();
    } else {
      $("header").addClass("activesearch");
    }
  });

  $("#searchinput").on("input", function (e) {
    if ($("#searchinput").val().trim() == "") {
      $(this).removeClass("valid");
      return;
    }
    $(this).addClass("valid");
  });
  $("#searchform").on("submit", function (e) {
    if ($("#searchinput").val().trim() == "") {
      e.preventDefault();
      if ($(window).innerWidth() < min_width) {
        $("header").removeClass("activesearch");
      }
    }
  });

  $(window).on("load", function () {
    ssss();
  });
  $(window).on("resize", function () {
    ssss();
  });

  function ssss() {
    if ($(window).innerWidth() > min_width) {
      $("header").addClass("activesearch");
    }
    if (
      $(window).innerWidth() < min_width &&
      $(window).innerWidth() > max_width
    ) {
      $("header").removeClass("activesearch");
    }
  }
});
