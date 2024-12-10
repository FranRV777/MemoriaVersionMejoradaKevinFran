document.addEventListener('DOMContentLoaded', () => {
    // Obtén el reproductor de música
    const reproductor = document.getElementById('reproductor');

    // Verifica si hay un volumen guardado en el localStorage
    const volumenGuardado = localStorage.getItem('volumen');
    if (volumenGuardado) {
        // Convierte el volumen guardado a un valor decimal entre 0 y 1
        reproductor.volume = parseFloat(volumenGuardado);
    } else {
        // Si no hay volumen guardado, establece un valor por defecto
        reproductor.volume = 0.5;
    }

    // Control de Brillo
    const brilloGuardado = localStorage.getItem('brillo');
    if (brilloGuardado) {
        document.body.style.filter = `brightness(${brilloGuardado}%)`;
    } else {
        document.body.style.filter = `brightness(100%)`; // Valor por defecto
    }
    //Control de modo oscuro
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    if (modoOscuroGuardado === 'true') {
        document.body.classList.add('dark-mode');
    }
});


