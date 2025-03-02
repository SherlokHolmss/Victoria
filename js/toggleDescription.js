export function setupDescription() {
    function toggleDescription(button) {
        const productItem = button.closest('.product-item');
        const title = productItem.querySelector('.product-title');
        const description = productItem.querySelector('.product-description');
        productItem.querySelectorAll('*').forEach(el => {
            if (el !== title && el !== description) {
                el.style.display = 'none';
            }
        });
        description.style.display = 'block';
    }

    function resetView(productItem) {
        productItem.querySelectorAll('*').forEach(el => {
            if (!el.classList.contains('product-description')) {
                el.style.display = '';
            }
        });
        
        productItem.querySelector('.product-description').style.display = 'none';
    }
    
    
    document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toggleDescription(button);
        });
    });
    
    
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', () => resetView(item));
    });
    
    
    window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.product-description').forEach(description => {
            description.style.display = 'none';
        });
    });    
}
