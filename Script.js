// Toggle high contrast
const contrastToggleButton = document.getElementById('contrast-toggle');

contrastToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('high-contrast');
    const isPressed = contrastToggleButton.getAttribute('aria-pressed') === 'true';
    contrastToggleButton.setAttribute('aria-pressed', !isPressed);
    if (document.body.classList.contains('high-contrast')) {
        localStorage.setItem('contrastMode', 'enabled');
    } else {
        localStorage.removeItem('contrastMode');
    }
});

// On page load, check for saved high contrast preference
if (localStorage.getItem('contrastMode') === 'enabled') {
    document.body.classList.add('high-contrast');
    contrastToggleButton.setAttribute('aria-pressed', 'true');
}

// Adding keyboard navigation for services
document.querySelectorAll('.service-item').forEach(item => {
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            item.click();  // Simulate click
        }
    });
});

