const slider = document.querySelector(".splide");

let splide = new Splide(slider, {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    start  : 3,
    gap: "20px",
    breakpoints: {
        1024: {
            perPage: 2,
            gap: '15px'
        },
        768: {
            perPage: 1, 
            gap: '10px'
        }
    }
});
splide.mount();

