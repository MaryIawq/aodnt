export default class SliderCarousel {
    constructor(galleryItemClassName, scrollContainerSelector, scrollContentSelector, sliderSelector) {
        this.galleryItems = document.querySelectorAll(galleryItemClassName);
        this.scrollContainer = document.querySelector(scrollContainerSelector);
        this.scrollContent = document.querySelector(scrollContentSelector);
        this.slider = document.querySelector(sliderSelector);

        this.initialize();
    }

    initialize() {
        this.initializeCarousel();
        this.setupGalleryEvents();
    }

    initializeCarousel() {
        const updateScroll = () => {
            const maxScrollLeft = this.scrollContent.scrollWidth - this.scrollContainer.clientWidth;
            const scrollLeft = (this.slider.value / 100) * maxScrollLeft;
            this.scrollContainer.scrollLeft = scrollLeft;
        };

        this.slider.addEventListener('input', updateScroll);
        window.addEventListener('resize', updateScroll);
        updateScroll();
    }

    setupGalleryEvents() {
        this.galleryItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.galleryItems.forEach(otherItem => {
                    otherItem.classList.add('grayscale');
                });

                item.classList.remove('grayscale');
                item.classList.add('active');
            });

            item.addEventListener('mouseleave', () => {
                this.galleryItems.forEach(otherItem => {
                    otherItem.classList.remove('grayscale', 'active');
                });
            });
        });
    }
}