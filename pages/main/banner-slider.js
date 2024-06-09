document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.banner-slide');
    const navBtns = document.querySelectorAll('.banner-nav-btn');

    navBtns[0].classList.add('active');

    navBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const slideIndex = parseInt(btn.getAttribute('data-slide'));
            goToSlide(slideIndex);
            highlightActiveButton(slideIndex);
        });
    });

    function goToSlide(index) {
        slides.forEach(function (slide) {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function highlightActiveButton(index) {
        navBtns.forEach(function (btn, btnIndex) {
            if (btnIndex === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
});
