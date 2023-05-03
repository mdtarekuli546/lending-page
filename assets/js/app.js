$(function(){
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop: 0})
    });
    $(window).scroll(function(){
        var scrolltop = $(this).scrollTop();

        if(scrolltop > 400) {
            $('.navbar').addClass('navbar_bg');
        } else {
            $('.navbar').removeClass('navbar_bg');
        }
        if (scrolltop > 600) {
            $('.back_to_top').show(500)
        } else {
            $('.back_to_top').hide(500)
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });
    var mixingKorbo=mixitup('.lap-boxes');


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        center:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
               
            },
            1000:{
                items:3,
              
            }
        }
    })
});




// Countdown Start
(() => {
    // Specify the deadline date
    const deadlineDate = new Date('March 23, 2023 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();
// Countdown End

// WOW JS
new WOW().init();
// WOW JS


// Venobox Start
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Venobox End

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
});



