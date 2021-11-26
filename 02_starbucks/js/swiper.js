var swiper = new Swiper(".prom_swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});