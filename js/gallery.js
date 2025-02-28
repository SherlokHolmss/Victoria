
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".gallery-list");
    const prevBtn = document.querySelector(".gallery-prev");
    const nextBtn = document.querySelector(".gallery-next");
    const step = 325; 
    prevBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -step, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        slider.scrollBy({ left: step, behavior: "smooth" });
    });
});