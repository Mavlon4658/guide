let swp = new Swiper('.main-modal .swiper', {
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

let modal = document.querySelector('.main-modal'),
    modalOpen = document.querySelectorAll('.main-modal__open'),
    modalClose = document.querySelector('.main-modal_head__btn');

if (modal) {
    modalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            modal.classList.add('active');
        }
    })

    modalClose.onclick = e => {
        e.preventDefault();
        modal.classList.remove('active');
        modal.classList.add('end-active');
        setTimeout(() => {
            modal.classList.remove('end-active');
        }, 300);
    }
}