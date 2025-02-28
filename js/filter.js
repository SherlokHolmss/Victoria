// export function setupFilters() {
//     const filterButtons = document.querySelectorAll(".filter-button");
//     const productItems = document.querySelectorAll(".product-item");

//     const categoryMap = {
//         "Амінокислоти": "AMIN.O. Energy",
//         "Карнітин": "iCarnitine",
//         "Гейнер": "Гейнер",
//         "Батончики": "батончик"
//     };

//     function filterProducts(category) {
//         const keyword = categoryMap[category];
//         productItems.forEach(item => {
//             const description = item.querySelector(".product-description").textContent;
//             item.classList.toggle("hidden", !description.includes(keyword));
//         });
//     }

//     const defaultCategory = "Амінокислоти";
//     const defaultButton = Array.from(filterButtons).find(button => button.textContent.trim() === defaultCategory);
//     if (defaultButton) {
//         defaultButton.classList.add("active");
//         filterProducts(defaultCategory);
//     }

//     filterButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             filterButtons.forEach(btn => btn.classList.remove("active"));
//             button.classList.add("active");
//             filterProducts(button.textContent.trim());
//         });
//     });
// }
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const productItems = document.querySelectorAll(".product-item");
    
    const categoryMap = {
        "Амінокислоти": "AMIN.O. Energy",
        "Карнітин": "iCarnitine",
        "Гейнер": "Гейнер",
        "Батончики": "батончик"
    };
    // оххх зря ти сюда поліііііізззззз
    function filterProducts(category) {
        const keyword = categoryMap[category];
        
        productItems.forEach(item => {
            const description = item.querySelector(".product-title").textContent;
            if (description.includes(keyword)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
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

            if (screen.width < 768) {
                const mobMenu = document.querySelector(".sport-bar-mobile");

                mobMenu.classList.toggle("not-open");
                document.querySelector("body").classList.toggle("modal-on");
                window.scrollTo(0, 0);

                document.querySelector(".sport-bar-mobile-title").textContent = button.textContent.trim();
            }
        });
    });

    document.querySelector(".sport-bar-mobile-close").addEventListener("click", () => {
        const mobMenu = document.querySelector(".sport-bar-mobile");

        mobMenu.classList.toggle("not-open");
        document.querySelector("body").classList.toggle("modal-on");
    });
});