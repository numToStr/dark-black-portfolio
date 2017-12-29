// common ui variables ===========
var navLinksArray = ['home', 'about', 'projects', 'gallery', 'contact'];
var authorName = "Vikas Raj";
var authorDesc = "Front End Web Developer";
// common ui variables == ends ==============
var curtainHideTimeout;
var curtain = $('.menu-curtain');
var curtainList = $('.menu-curtain-list-item');
var holder = document.getElementById('holder');
var panels = $('.panel');
var dots = $('.navigation-dots');
var projDots = $('.project-navigation-dots');
var projItems = $('.project-items');
var curIndex = 0, projCurIndex = 0;
var canScroll = true, scrollController = null, scrollTimeoutDuration = 800;
var curtainNavLinks = '';

// for (const link of navLinksArray) {
//     curtainNavLinks += `<li class="menu-curtain-list-item my-3">
//                             <a class="text-black transition line-effect d-inline-flex justify-content-center" href="#0">`;
//     for (const word of link) {
//         curtainNavLinks += `<p class="m-1">${word}</p>`;
//     }
//     curtainNavLinks += `</a>
//                             </li>`;
// }

particlesJS('particles-js', {
    "particles": {
        "number": {
        "value": 80,
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
        "value": 0.5,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 5,
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
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
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
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
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
            "distance": 200
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true,
    "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
});

$('.hamburger-menu').click(function (e) {
    $(this).toggleClass('become-cross');

    if (curtain.hasClass('menu-curtain-open')) {
        curtain.removeClass('menu-curtain-open').addClass('menu-curtain-close');
        curtainHideTimeout = setTimeout(function () {
            $('.menu-curtain-list').addClass('d-none');
        }, 400);
        curtainList.removeClass('menu-curtain-list-item-go-down').addClass('menu-curtain-list-item-go-up');
    } else {
        curtain.removeClass('menu-curtain-close').addClass('menu-curtain-open');
        clearTimeout(curtainHideTimeout);
        $('.menu-curtain-list').removeClass('d-none');
        curtainList.removeClass('menu-curtain-list-item-go-up').addClass('menu-curtain-list-item-go-down');
    }
})

$(window).on('mousewheel DOMMouseScroll', function (e) {
    // if you scroll up original value will be negative and scroll down will be positive,
    var delta = -e.originalEvent.wheelDelta;
    if (delta > 40 && canScroll) { // scroll up
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(() => {
            canScroll = true;
        }, scrollTimeoutDuration);
        
        if (curIndex < (panels.length - 1)) {
            curIndex+=1;
            console.log('up : ', curIndex);
            dotsFade(curIndex);
            panelsFade(curIndex);
        // } else {
        //     curIndex = 0;
        //     dotsFade(curIndex);
        //     panelsFade(curIndex);
        }
    } else if (delta < -40 && canScroll) { // scroll down
        canScroll = false;
        clearTimeout(scrollController);
        scrollController = setTimeout(() => {
            canScroll = true;
        }, scrollTimeoutDuration);
        
        if (curIndex >= 1) {
            curIndex-=1;
            console.log('down : ', curIndex);
            dotsFade(curIndex);
            panelsFade(curIndex);
        }
    }
});

// initialize hammer instance with element
var hammer = new Hammer(holder);
// create events instances
var swipe = new Hammer.Swipe();
// adding events to the hammer instance
hammer.add([swipe]);

hammer.on("swipeup", e => e);
hammer.on("swipedown", e => e);

// console.log(panels.height() + panels.offset().top)

dots.click(function () {
    var dotsIndex = dots.index($(this));
    curIndex = dotsIndex;
    dotsFade(curIndex);
    panelsFade(curIndex);
})

function panelsFade(index) {
    panels.removeClass('is-show');
    panels.eq(index).addClass('is-show');
}
function dotsFade(index) {
    dots.removeClass('active');
    dots.eq(index).addClass('active');
}

projDots.click(function () {
    var projDotindex = projDots.index($(this));
    projCurIndex = projDotindex;
    projDotsFade(projCurIndex);
    projItemsFade(projCurIndex);
})

$('.projects-controller-right').click(function () {
    if (projCurIndex < (projDots.length - 1)) {
        projCurIndex+=1;
        projDotsFade(projCurIndex);
        projItemsFade(projCurIndex);
    }
})
$('.projects-controller-left').click(function () {
    if (projCurIndex > 0) {
        projCurIndex-=1;
        projDotsFade(projCurIndex);
        projItemsFade(projCurIndex);
    }
})

function projDotsFade(index) {
    projDots.removeClass('active');
    projDots.eq(index).addClass('active');
}
function projItemsFade(index) {
    projItems.removeClass('is-show');
    projItems.eq(index).addClass('is-show');
}