$(document).ready(() => {
    if($('.bunner-carousel').length > 0){
    const bunner = $('.bunner-carousel');
    bunner.owlCarousel({
        dots: false,
        nav: false,
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        smartSpeed: 500,

    });
    $(".carousel-control-prev").click(function () {
        $(".owl-carousel").owlCarousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $(".owl-carousel").owlCarousel("next");
    });

    bunner.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h2').removeClass('animated slideInUp');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated slideInUp');
    });
    }
});


/************************************************************************/

$(document).on("click", ".close-sidenav", function () {
    $(".sidemenu").css("left", "-300px");
});
$(document).on("click", ".opensidenav", function () {
    $(".sidemenu").css("left", "0px");
});


$(document).on("click", ".search-submit", function (e) {


    if ($(this).hasClass("searchactive")) {


    } else {
        e.preventDefault();
        $(".searchfield").addClass("searchactive");
        $(this).addClass("searchactive");
        
        if($(window).innerWidth() < 400){
        $(".logo").css({opacity: "0"});    
        }
        
    }

});
/*
$(document).on("click" ,".remove-cart-item",function(){
    console.log($(this).parent().parent().remove());
});
*/

$("body").on("click", function (e) {
    if (!$(e.target).hasClass("searchactive")) {
        $(".searchfield").removeClass("searchactive");
        $(".search-submit").removeClass("searchactive");
        $(".logo").css({opacity: "1"});
    }
});



