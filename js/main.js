let swp = new Swiper('.modal .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    // initialSlide: 1,
    pagination: {
        el: ".swp_navigation",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            let num1 = current < 10 ? `0${current}` : current;
            let num2 = total < 10 ? `0${total}` : total;
            return num1 + '/' + num2; 
        }
    },
})

let nextBtn = document.querySelectorAll('.btn_right'),
    prevBtn = document.querySelectorAll('.btn_left');

nextBtn[0].onclick = () => {
    swp.slideTo(1);
}

prevBtn[1].onclick = () => {
    swp.slideTo(0);
}