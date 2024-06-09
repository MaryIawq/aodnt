import SliderCarousel from "../../js/sliderCarousel.js";

new SliderCarousel(
    '.scroll-gallery-item', 
    '.scroll-container', 
    '.scroll-content', 
    '#scroll-slider'
).initialize();

new SliderCarousel(
    '.scroll-gallery-item', 
    '.news-container', 
    '.news-list', 
    '#scroll-slider-news'
).initialize();

new SliderCarousel(
    '.scroll-gallery-item', 
    '.scroll-container-gallery', 
    '.scroll-content-gallery', 
    '#scroll-slider-gallery'
).initialize();