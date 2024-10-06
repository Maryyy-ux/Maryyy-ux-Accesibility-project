
// Obtén el botón de alternar contraste
const contrastToggleButton = document.getElementById('contrast-toggle');

// Añade un manejador de eventos al hacer clic en el botón
contrastToggleButton.addEventListener('click', function () {
    // Alterna la clase 'high-contrast' en el body
    document.body.classList.toggle('high-contrast');

    // Actualiza el atributo aria-pressed para accesibilidad
    const isPressed = contrastToggleButton.getAttribute('aria-pressed') === 'true';
    contrastToggleButton.setAttribute('aria-pressed', !isPressed);

    // Guarda la preferencia del usuario en localStorage
    if (document.body.classList.contains('high-contrast')) {
        localStorage.setItem('contrastMode', 'enabled');
    } else {
        localStorage.removeItem('contrastMode');
    }
});

// Al cargar la página, revisa si el usuario tiene una preferencia de modo de alto contraste guardada
if (localStorage.getItem('contrastMode') === 'enabled') {
    document.body.classList.add('high-contrast');
    contrastToggleButton.setAttribute('aria-pressed', 'true');
}
// Detectar si se presiona Enter o Espacio en el botón de contraste
contrastToggleButton.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        contrastToggleButton.click();  // Activa el botón al presionar Enter o Espacio
    }
});


