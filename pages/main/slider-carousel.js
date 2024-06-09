
document.addEventListener('DOMContentLoaded', function () {
    function initializeCarousel(scrollContainerSelector, scrollContentSelector, sliderSelector) {
        const scrollContainer = document.querySelector(scrollContainerSelector);
        const scrollContent = document.querySelector(scrollContentSelector);
        const slider = document.querySelector(sliderSelector);

        function updateScroll() {
            const maxScrollLeft = scrollContent.scrollWidth - scrollContainer.clientWidth;
            const scrollLeft = (slider.value / 100) * maxScrollLeft;
            scrollContainer.scrollLeft = scrollLeft;
        }
        slider.addEventListener('input', updateScroll);
        window.addEventListener('resize', updateScroll);
        updateScroll();
    }

    initializeCarousel('.scroll-container', '.scroll-content', '#scroll-slider');
    initializeCarousel('.news-container', '.news-list', '#scroll-slider-news');
    initializeCarousel('.scroll-container-gallery', '.scroll-content-gallery', '#scroll-slider-gallery');
});

const galleryItems = document.querySelectorAll('.scroll-gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        galleryItems.forEach(otherItem => {
            otherItem.classList.add('grayscale');
        });

        item.classList.remove('grayscale');
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        galleryItems.forEach(otherItem => {
            otherItem.classList.remove('grayscale', 'active');
        });
    });
});
