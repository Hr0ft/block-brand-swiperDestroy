let swiper = new Swiper('.swiper-container', {
                  
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    observer:true,
    slideToClickedSlide:true,
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 16,
    grabCursor: true,
});


const {body} = document;
const swipers = document.querySelectorAll('.swiper-container');
// console.log(body);

    swipers.forEach( function() {
        if(body.offsetWidth >= 768) { 
            swiper.destroy();
        }
    });

let change = document.querySelector('.btn__open');
let openItem = document.querySelector('.brand__slider');

    change.addEventListener('click', function() {
        let changeText = document.getElementById('btn__open');
        if (changeText.innerHTML == 'Показать все' ) {
            changeText.innerHTML = 'Скрыть';
            openItem.style.height = 'auto';
            change.classList.add('open__button--reverse')
        }
        else {
            changeText.innerHTML = 'Показать все';
            openItem.style.height = '200px';
            change.classList.remove('open__button--reverse');
        }
    });    