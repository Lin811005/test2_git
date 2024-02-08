
AOS.init();
window.addEventListener('resize', function (event) {
    refreshAos()

}, true);
let refreshAos = function () {
    setTimeout(function () { AOS.init(); }, 300);
}



$('.menu-toggle').click(function () {
    $('.haeder-mobile').toggleClass('active')
    $('body').toggleClass('freeze')
})
$('.mobile-menu-mask').click(function () {
    $('.haeder-mobile').removeClass('active')
    $('body').removeClass('freeze')
})
let mobileMenuControler = function (id) {
    let y = $('#' + id).get(0).offsetTop;
    window.scrollTo(0, y);
    $('.haeder-mobile').removeClass('active')
    $('body').removeClass('freeze')
}

let backToTop = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




function handleScroll() {
    const scrollAt = window.scrollY + 48;
    let block2v = $('#block2v').get(0).offsetTop;
    let block3v = $('#block-3-video')
    let block5 = $('#block5').get(0).offsetTop;
    let block6 = $('#block6').get(0).offsetTop;
    let block62 = $('#block6-2').get(0).offsetTop;
    let block62h = $('#block6-2').get(0).clientHeight / 4;
    let block8 = $('#block8').get(0).offsetTop;
    let block9 = $('#block9').get(0).offsetTop;
    let block3S = $('.block3-swiper');
    if ($('.block3-swiper').hasClass('aos-animate')) {
        swiper.loop = true
    } else {
        swiper.loop = false

    }
    
    // console.log(block2v + block3v.clientHeight)
 
    let prePlayLength = $(window).height();
    if (scrollAt + prePlayLength > block2v && scrollAt < block2v + block3v.get(0).clientHeight) {
        block3v.get(0).play()
    } else {
        block3v.get(0).pause()
    }

    if (scrollAt + prePlayLength > block5 && scrollAt < block5 + $('#block5').get(0).clientHeight) {
        $('#block-5-video').get(0).play()
        $('#block-5m-video').get(0).play()
    } else {
        $('#block-5-video').get(0).currentTime = 0;
        $('#block-5m-video').get(0).currentTime = 0;
        // $('#block-5-video').get(0).pause()
    }

    if (scrollAt + prePlayLength > block6 && scrollAt < block6 + $('#block6').get(0).clientHeight) {
        $('#block-6-video').get(0).play()
    } else {
        $('#block-6-video').get(0).pause()
    }

    // if (scrollAt + prePlayLength > block9 && scrollAt < block9 + $('#block9').get(0).clientHeight) {
    //     $('#block-9-2-video').get(0).play()
    //     $('#block-9-2m-video').get(0).play()
    //     $('#block-9-3-video').get(0).play()
    //     $('#block-9-3m-video').get(0).play()
    // } else {
    //     $('#block-9-2-video').get(0).pause()
    //     $('#block-9-2m-video').get(0).pause()
    //     $('#block-9-3-video').get(0).pause()
    //     $('#block-9-3m-video').get(0).pause()
    // }
}

$(window).scroll(handleScroll);
let video32 = document.getElementById('block-3-2-video');
var swiper = new Swiper(".block3-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    autoplay: {
        delay: 6100, 
        disableOnInteraction: false,
    },
    on: {
        slideChange: function () {
            
            video32.pause();
            video32.currentTime = 0;
            video32.play();
        },
    }
})



var swiper3 = new Swiper(".block3-spot-swiper", {
    loop: false,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            for (let i = 0; i < 3; i++) {
                $('.slide-btn').eq(i).removeClass('active')
            }
            $('.slide-btn').eq(swiper3.activeIndex).addClass('active')
        },
    }
})

function changeSlide(id) {
    let n = id - 1
    swiper3.slideTo(n, 400, true)
    for (let i = 0; i < 3; i++) {
        $('.slide-btn').eq(i).removeClass('active')
    }
    $('.slide-btn').eq(n).addClass('active')
}
$(window).on("load", function () {
    $('.loading').remove()

});


(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "2/29/",
        dday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > dday) {
        dday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(dday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("days").innerText = 0,
                    document.getElementById("hours").innerText = 0,
                    document.getElementById("minutes").innerText = 0,
                    document.getElementById("seconds").innerText = 0;
                clearInterval(x);
            }
            //seconds
        }, 0)
}());


