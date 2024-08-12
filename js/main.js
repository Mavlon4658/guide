let swp1 = new Swiper('.swp-1', {
    slidesPerview: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    effect: 'fade',
    loop: true,
})

let swp2 = new Swiper('.swp-2', {
    slidesPerview: 1,
    spaceBetween: 0,
    loop: true,
})

let swp3 = new Swiper('.swp-3', {
    slidesPerview: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
})

let mainBtnPrev = document.querySelectorAll('.main_swp .swp_btns button')[0],
    mainBtnNext = document.querySelectorAll('.main_swp .swp_btns button')[1],
    mainSwpText = document.querySelectorAll('.main_swp .swp_navigation p')[0],
    mainSwpLength = document.querySelectorAll('.main_swp .swp_navigation p')[1];

if (mainBtnNext) {
    mainSwpLength.textContent = swp2.slides.length;
    mainBtnNext.onclick = () => {
        swp1.slideNext();
        swp2.slideNext();
        swp3.slideNext();
        mainSwpText.textContent = swp2.realIndex + 1;
    }
    mainBtnPrev.onclick = () => {
        swp1.slidePrev();
        swp2.slidePrev();
        swp3.slidePrev();
        mainSwpText.textContent = swp2.realIndex + 1;
    }

    swp2.on('slideChange', function (e) {
        swp1.slideTo(swp2.realIndex);
        swp3.slideTo(swp2.realIndex);
        mainSwpText.textContent = swp2.realIndex + 1;
    });
}