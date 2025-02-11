import { setupFilters } from "./filter.js";
import { setupSlider } from "./slider.js";
import { setupModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
    setupFilters();
    setupSlider();
    setupModal();
});
