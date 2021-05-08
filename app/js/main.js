$(function () {
    $(".menu a").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 700, 'linear');

    });

    $('.work__inner').slick({
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>'
    });
});


const navbarIcon = document.querySelector('.navbar-icon');
const sidebarShow = document.querySelector('.menu');
const menuListLink = document.querySelectorAll('.menu__list-link');


const toggleNavbarIcon = () => {
    navbarIcon.classList.toggle('active');
}
const showMenu = () => {
    sidebarShow.classList.toggle('menu-show');
}

menuListLink.forEach(element => {
    element.addEventListener('click', toggleNavbarIcon)
    element.addEventListener('click', showMenu);
    console.log(element);
});


navbarIcon.addEventListener('click', toggleNavbarIcon);
navbarIcon.addEventListener('click', showMenu);
