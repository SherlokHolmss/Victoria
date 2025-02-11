export function setupSlider() {
    const slider = document.querySelector(".gallery-list");
    const prevBtn = document.querySelector(".gallery-prev");
    const nextBtn = document.querySelector(".gallery-next");
    const step = 325;

    if (!slider || !prevBtn || !nextBtn) return;

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -step, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: step, behavior: "smooth" });
    });
}
