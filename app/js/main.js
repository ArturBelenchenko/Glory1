$(function () {
    /** Click on menu button */
    $('.menu').on('click', 'a', function (event) {
        event.preventDefault();

        const id = $(this).attr('href');
        const top = $(id).offset().top;

        // scroll to element
        $('body, html').animate({ scrollTop: top }, 700, 'linear');
    });

    /** Slider initialization */
    $('.work__inner').slick({
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>'
    });
});

/** Vanila JS Scripts */
const navbarIcon = document.querySelector('.navbar-icon');
const sidebarShow = document.querySelector('.menu');
const menuListLink = document.querySelectorAll('.menu__list-link');

const toggleNavbarIcon = () => {
    navbarIcon.classList.toggle('active');
}
const toggleMenu = () => {
    sidebarShow.classList.toggle('menu-show');
}

const handleMenu = () => {
  toggleNavbarIcon();
  toggleMenu();
}

menuListLink.forEach(element => {
    element.addEventListener('click', handleMenu)
});

navbarIcon.addEventListener('click', handleMenu);
