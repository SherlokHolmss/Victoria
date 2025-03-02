import { setupFilters } from "./filter.js";
import { setupModal } from "./modal.js";
import { setupDescription } from "./toggleDescription.js";
import { setupSlider } from "./gallery.js";

document.addEventListener("DOMContentLoaded", () => {
    setupFilters();
    setupModal();
    setupDescription();
    setupSlider();
});
