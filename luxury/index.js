$(document).ready(function () {
    AOS.init({
        disable: 'mobile'
    })
    fixedHeader()
    $(window).scroll(function () {
        fixedHeader()
    });

    function fixedHeader() {
        if (window.pageYOffset > 0) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    }

    // menu 
    if ($(window).width() < 1024) {
        $(".burger, .overlay, .header__menu a").click(function () {
            toggleMenu()
        });
    }

    function toggleMenu() {
        $(".burger").toggleClass("active")
        $(".header__menu").toggleClass("active")
        $(".overlay").toggleClass("active")
        $("body").toggleClass("menu-is-open")
    }
});