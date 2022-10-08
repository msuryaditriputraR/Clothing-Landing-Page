/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            spaceBetween: 72,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link");
        } else {
            sectionClass.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");

    scrollUp.classList[this.scrollY >= 200 ? "add" : "remove"]("show-scroll");
}

window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
