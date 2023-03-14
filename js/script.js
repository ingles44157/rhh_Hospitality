$(document).ready(function() {
    $('.banner-slider').slick({
        draggable: true,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: true,
        dots: false,
        fade: true,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        pauseOnHover: false
    });

    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        // touchThreshold: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    });

    var navclick = document.getElementsByClassName("toggle-spanBtn");
    for (var i = 0; i < navclick.length; i++) {
        navclick[i].onclick = function() {
            document.getElementById('menuToggle').classList.toggle("myactive");
        }
    }

    $(function() {
        $("html").on("click", function(e) {
            let $t = $(e.target),
                $myLinks = $("#menu"),
                $toggleMenu = $("#menuToggle");
            if ($t.is($myLinks) || $myLinks.has($t).length) {
                //clicked in the menu. do nothing
            } else if ($t.is($toggleMenu) || $toggleMenu.has($t).length) {
                $myLinks.removeClass("open");
                $toggleMenu.removeClass("spantoggle");
                // $toggleMenu.removeClass("myactive");
            } else {
                $myLinks.addClass("open");
                $toggleMenu.addClass("spantoggle");
                $toggleMenu.removeClass("myactive");
            }
        })
    });

    $('.product_img').izoomify();
});

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 450) {
        $("#header").addClass("active_header");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header").removeClass("active_header");
    }
});


$(".upper-icon").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 150) {
        $('.upper-icon').fadeIn();
    } else {
        $('.upper-icon').fadeOut();
    }
});

function openNav() {
    document.getElementById("proImg").style.display = "block";
}

function closeNav() {
    document.getElementById("proImg").style.display = "none";
}

function proDetalis() {
    document.getElementById("proDetail").style.display = "block";
}

function closePro() {
    document.getElementById("proDetail").style.display = "none";
}