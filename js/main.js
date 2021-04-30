$(document).ready(function () {


    // twitter slider js

    $('.twitter_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700
    });


    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // sticky to js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });


    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // particle js

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 160,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    $("#particles-js").css({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%"
    });

    // preloader js

    $(window).on("load", function () {
        $("#preload").delay(4000).fadeOut(500);
    });

    // responsive menu js

    $(".openNav").click(function () {
        $(".mobile_menu .overlay").css({
            top: "0",
            opacity: "1"
        });
    });
    
    $(".mobile_menu .closeNav").click(function () {
        $(".mobile_menu .overlay").css({
            top: "100%",
            opacity: "0"
        });
    });
    
    $(".navbar-brand h2").click(function(){
        $(".mobile_menu .overlay").css({
            top: "100%",
            opacity: "0"
        });
    });
    
    $(".mobile_menu .overlay .overlay_bottom ul li a").click(function(){
        $(".mobile_menu .overlay").css({
            top: "100%",
            opacity: "0"
        });
    });



});

// image filtering js

var mixer = mixitup('.cont');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
