let tripSelect1 = document.querySelector('.tirp_form__select_1'),
    tripSelect1Btn = document.querySelector('.tirp_form__select_1 .select_head button'),
    tripSelect1List = document.querySelectorAll('.tirp_form__select_1 .select_body li'),
    tripSelect1Body = document.querySelector('.tirp_form__select_1 .select_body');

if (tripSelect1Btn) {
    tripSelect1Btn.onclick = () => {
        tripSelect1Body.classList.toggle('active');
        tripSelect1Btn.classList.toggle('active');
    }

    tripSelect1List.forEach(el => {
        el.onclick = () => {
            document.querySelector('.tirp_form__select_1 .select_head input').value = el.textContent;
        }
    })
}

let tripSelect2 = document.querySelector('.tirp_form__select_2'),
    tripSelect2Btn = document.querySelector('.tirp_form__select_2 .select_head button'),
    tripSelect2Body = document.querySelector('.tirp_form__select_2 .select_body');

if (tripSelect2Btn) {
    tripSelect2Btn.onclick = () => {
        tripSelect2Body.classList.toggle('active');
        tripSelect2Btn.classList.toggle('active');
    }
}

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (input.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
    }

    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

document.querySelector('.tirp_form .btns .btn_primary').onclick = () => {
    document.querySelector('.tirp_form__select_2 .select_head input').value = 'От ' + priceInput[0].value + '-' + priceInput[1].value + ' руб.'
}

document.addEventListener('click', event => {
    if (tripSelect1) {
        const isClickInside = tripSelect1.contains(event.target)

        if (!isClickInside) {
            tripSelect1Btn.classList.remove('active');
            tripSelect1Body.classList.remove('active');
        }
    }

    if (tripSelect2) {
        const isClickInside2 = tripSelect2.contains(event.target)

        if (!isClickInside2) {
            tripSelect2Btn.classList.remove('active');
            tripSelect2Body.classList.remove('active');
        }
    }
})

let requestModal = document.querySelectorAll('.request_modal'),
    requestModalOpen1 = document.querySelector('.request_modal__open1'),
    requestModalOpen2 = document.querySelector('.request_modal__open2');

if (requestModal.length) {
    requestModalOpen1.onclick = () => {
        requestModal[0].classList.add('active');
    }

    requestModalOpen2.onclick = () => {
        requestModal[1].classList.add('active');
    }

    requestModal.forEach(el => {
        el.querySelector('.request_modal__close').onclick = () => {
            el.classList.remove('active');
        }
    })
}