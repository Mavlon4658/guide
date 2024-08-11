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
    allowTouchMove: false,
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
    mainBtnNext2 = document.querySelectorAll('.main_swp .hand_wrap button'),
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
    mainBtnNext2.forEach(el => {
        el.onclick = () => {
            swp1.slideNext();
            swp2.slideNext();
            swp3.slideNext();
            mainSwpText.textContent = swp2.realIndex + 1;
        }
    })
}