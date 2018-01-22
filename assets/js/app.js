// common ui letiables ===========

const glitchEffect = true;
const authorName = "Vikas Raj";
const authorDesc = "Front End Web Developer";
const navLinksArray = ['home', 'about', 'projects', 'gallery', 'contact'];
const socialLinksArray = [
    {
        name: 'facebook',
        link: 'https://facebook.com/vkaasraj',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg>'
    },
    {
        name: 'instagram',
        link: 'https://instagram.com/vkasraj',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
    },
    {
        name: 'github',
        link: 'https://github.com/vkasraj',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
    },
    {
        name: 'linkedin',
        link: 'https://linkedin.com',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/></svg>',
    }
]
const projectsArray = [
    {
        desc: 'front end code editor built with Vue.js',
        img: './assets/images/decode.png',
        link: 'https://vkasraj.github.io/decode',
        code: 'https://github.com/vkasraj/decode'
    },
    {
        desc: 'single page parallax portfolio',
        img: './assets/images/landing.png',
        link: 'https://vkasraj.github.io/dark-black-portfolio',
        code: 'https://github.com/vkasraj/dark-black-portfolio'
    },
    {
        desc: 'landing page with form',
        img: './assets/images/landing-form.png',
        link: 'https://vkasraj.github.io/landing-form',
        code: 'https://github.com/vkasraj/landing-form'
    },
    {
        desc: 'split design landing page',
        img: './assets/images/split-landing.png',
        link: 'https://vkasraj.github.io/split-landing',
        code: 'https://github.com/vkasraj/split-landing'
    }
]

const panels = $('.panel');
let curIndex = 0, projCurIndex = 0;
let canScroll = true, scrollController = null, scrollTimeoutDuration = 800;

// common ui letiables == ends ==============

let tempAuthorName = '';
if (glitchEffect) {
    for (let $i = 0; $i < 3; $i++) {
        let glitchColor = $i === 0 ? 'glitch-effect-blue' : ( $i === 1 ? 'glitch-effect-red' : 'glitch-effect-neutral' );
        tempAuthorName += '<p class="m-0 line-height-0 '+glitchColor+'">';
        for (const authorLetter of authorName) {
            if (authorLetter === ' ') {
                tempAuthorName += '<span class="mx-1 mx-md-3 px-sm-1"></span>';
            } else {
                tempAuthorName += '<span class="mx-1 mx-md-2 px-sm-1">'+authorLetter+'</span>';
            }
        }
        tempAuthorName += '</p>';
    }
} else {
    tempAuthorName += '<p class="m-0 line-height-0">';
    for (const authorLetter of authorName) {
        if (authorLetter === ' ') {
            tempAuthorName += '<span class="mx-1 mx-md-3 px-sm-1"></span>';
        } else {
            tempAuthorName += '<span class="mx-1 mx-md-2 px-1">'+authorLetter+'</span>';
        }
    }
    tempAuthorName += '</p>';
}
$('.author-title').html(tempAuthorName);
$('.author-description').html(authorDesc);

let socialLinks = '';
for (const socialLink of socialLinksArray) {
    socialLinks += `<li class="social-link-item mr-4 mr-md-0 mt-md-5 text-center pointer">
                        <a href="${socialLink.link}" target="_blank">
                            ${socialLink.icon}
                        </a>
                    </li>`;
}
$('.social-links').html(socialLinks);

let curtainNavLinks = '';
for (const link of navLinksArray) {
    curtainNavLinks += `<li class="menu-curtain-list-item my-3">
                            <a class="text-black transition line-effect d-inline-flex justify-content-center" href="#0">`;
    for (const linkLetter of link) {
        curtainNavLinks += `<p class="m-1">${linkLetter}</p>`;
    }
    curtainNavLinks += `</a>
                            </li>`;
}
$('.menu-curtain-list').html(curtainNavLinks);

let projects = '';
projectsArray.forEach((project, $i) => {
    projects += `<div class="project-items transition dark position-absolute ${$i === 0 ? 'is-show': ''}" style="background: url(${project['img']}) no-repeat center; background-size: contain;">
                    <div class="project-info-wrapper position-absolute w-100" style="bottom:5%;">
                        ${
                            project['desc'] ? 
                            `<div class="project-text text-center text-uppercase letter-spacing-2 py-half py-md-2">
                                <small>${project['desc']}</small>
                            </div>` : ''
                        }
                        <div class="project-links text-center d-flex justify-content-center mt-4 mt-md-5">
                            ${
                                project['link'] ? 
                                `<a href="${project['link']}" target="_blank">
                                    <div class="project-link-item mx-2 mx-md-3 white rounded-circle d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/></svg>
                                    </div>
                                </a>` : ''
                            }
                            ${
                                project['code'] ? 
                                `<a href="${project['code']}" target="_blank">
                                    <div class="project-link-item mx-2 mx-md-3 white rounded-circle d-flex align-items-center justify-content-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" viewBox="0 0 640 512"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"/></svg>
                                    </div>
                                </a>` : ''
                            }
                        </div>
                    </div>    
                </div>`;
});
$('.projects-container').html(projects);

let projectNavigationDots = '';
for (let i = 0; i < projectsArray.length; i++) {
    projectNavigationDots += `<li class="list-inline-item transition pointer rounded-circle white mx-2 project-navigation-dots ${i === 0 ? 'active' : ''}"></li>`
}
$('.project-navigation').html(projectNavigationDots);

let navigationDots = '';
for (let i = 0; i < panels.length; i++) {
    let activeClass = i === 0 ? 'active' : '';
    navigationDots += '<li class="navigation-dots list-inline-item rounded-circle pointer mx-1 transition white-border '+activeClass+'"></li>';
}
$('.navigation-dots-list').html(navigationDots);

$('.proceed-btn').click(() => {
    if (curIndex < (navLinksArray.length-1)) {
        curIndex++;
        proceedBtn(curIndex);
        panelsFade(curIndex, curIndex-1);
        dotsFade(curIndex)
    }
})

window.onload = () => {
    setTimeout(() => {
        $('.preloader *').fadeOut(() => {
            $('.preloader').addClass('menu-curtain-close');
        });
    }, 1500);
};

let curtainHideTimeout;
let curtain = $('.menu-curtain');
let curtainList = $('.menu-curtain-list-item');
let holder = document.getElementById('holder');
let dots = $('.navigation-dots');
let projDots = $('.project-navigation-dots');
let projItems = $('.project-items');

$(document).ready(() => {

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
            curtainHideTimeout = setTimeout(() => {
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

    $(window).on('mousewheel DOMMouseScroll', e => {
        // if you scroll up original value will be negative and scroll down will be positive,
        let delta = -e.originalEvent.wheelDelta;
        if (delta > 40 && canScroll) { // scroll up
            canScroll = false;
            clearTimeout(scrollController);
            scrollController = setTimeout(() => {
                canScroll = true;
            }, scrollTimeoutDuration);
            
            if (curIndex < (panels.length - 1)) {
                curIndex+=1;
                console.log('up : ', curIndex);
                proceedBtn(curIndex);
                dotsFade(curIndex);
                panelsFade(curIndex, curIndex-1);
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
                proceedBtn(curIndex);
                dotsFade(curIndex);
                panelsFade(curIndex, curIndex+1);
            }
        }
    });

    // initialize hammer instance with element
    let hammer = new Hammer.Manager(holder, {
        domEvents: true,
        recognizers : [
            [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
        ]
    });

    hammer.on("swipeup", e => {
        console.log('swipeup')
    });
    hammer.on("swipedown", e => {
        console.log('swipedown')
    });

    // console.log(panels.height() + panels.offset().top)

    dots.click(function () {
        let dotsIndex = dots.index($(this));
        panelsFade(dotsIndex, curIndex);
        
        curIndex = dotsIndex;
        proceedBtn(curIndex);
        dotsFade(curIndex);
    })

    projDots.click(function () {
        let projDotindex = projDots.index($(this));
        projCurIndex = projDotindex;
        projDotsFade(projCurIndex);
        projItemsFade(projCurIndex);
    })

    $('.projects-controller-right').click(() => {
        if (projCurIndex < (projDots.length - 1)) {
            projCurIndex+=1;
            projDotsFade(projCurIndex);
            projItemsFade(projCurIndex);
        }
    })
    $('.projects-controller-left').click(() => {
        if (projCurIndex > 0) {
            projCurIndex-=1;
            projDotsFade(projCurIndex);
            projItemsFade(projCurIndex);
        }
    })
})

// functions ======================

function panelsFade(next,prev) {
    panels.eq(prev).removeClass('is-go-down-and-grow').addClass('is-panel-show is-shrink-and-go-up');
    panels.eq(next).removeClass('is-panel-show is-shrink-and-go-up').addClass('is-go-down-and-grow');
}
function dotsFade(index) {
    dots.removeClass('active');
    dots.eq(index).addClass('active');
}
function projDotsFade(index) {
    projDots.removeClass('active');
    projDots.eq(index).addClass('active');
}
function projItemsFade(index) {
    projItems.removeClass('is-show');
    projItems.eq(index).addClass('is-show');
}
function proceedBtn(index) {
    if (index < (navLinksArray.length-1)) {
        $('.proceed-btn-wrapper').animate({
            opacity : 1
        })
        $('.proceed-btn-text')
            .animate({ opacity : 0 }, function () {
                $(this).text(navLinksArray[index+1])
            })
            .animate({ opacity : 1 });
    } else {
        $('.proceed-btn-wrapper').animate({
            opacity : 0
        })
    }
}