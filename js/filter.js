export function setupFilters() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productItems = document.querySelectorAll(".product-item");

    const categoryMap = {
        "Амінокислоти": "AMIN.O. Energy",
        "Карнітин": "iCarnitine",
        "Гейнер": "Гейнер",
        "Батончики": "батончик"
    };

    function filterProducts(category) {
        const keyword = categoryMap[category];
        productItems.forEach(item => {
            const description = item.querySelector(".product-description").textContent;
            item.classList.toggle("hidden", !description.includes(keyword));
        });
    }

    const defaultCategory = "Амінокислоти";
    const defaultButton = Array.from(filterButtons).find(button => button.textContent.trim() === defaultCategory);
    if (defaultButton) {
        defaultButton.classList.add("active");
        filterProducts(defaultCategory);
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            filterProducts(button.textContent.trim());
        });
    });
}
