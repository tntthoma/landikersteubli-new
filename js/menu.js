// ==========================================
// Menu Category Navigation
// ==========================================

const menuNavButtons = document.querySelectorAll('.menu-nav-btn');
const menuCategories = document.querySelectorAll('.menu-category');

menuNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        // Update active button
        menuNavButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update active category
        menuCategories.forEach(cat => cat.classList.remove('active'));
        const targetCategory = document.getElementById(category);
        if (targetCategory) {
            targetCategory.classList.add('active');
        }

        // Scroll to menu section smoothly
        const menuSection = document.querySelector('.menu-section');
        const navbar = document.getElementById('navbar');
        const offset = navbar.offsetHeight + 20;

        window.scrollTo({
            top: menuSection.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Save and restore active category from URL hash
function initCategoryFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const button = document.querySelector(`.menu-nav-btn[data-category="${hash}"]`);
        if (button) {
            button.click();
        }
    }
}

// Update URL hash when category changes
menuNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        history.pushState(null, null, `#${category}`);
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', initCategoryFromHash);
