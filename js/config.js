document.addEventListener('DOMContentLoaded', () => {
    // Obtén el control de volumen y la etiqueta que muestra el valor
    const volumenInput = document.getElementById('volumen');
    const volumenValor = document.getElementById('volumen-valor');

    // Obtén el reproductor de música
    const reproductor = document.getElementById('reproductor');

    // Verifica si hay un volumen guardado en el localStorage
    const volumenGuardado = localStorage.getItem('volumen');
    if (volumenGuardado) {
        // Convierte el volumen guardado a un valor decimal entre 0 y 1
        reproductor.volume = parseFloat(volumenGuardado);
        volumenInput.value = volumenGuardado * 100;  // Convierte el valor de vuelta a un rango 0-100 para el slider
        volumenValor.textContent = (volumenGuardado * 100).toFixed(0);  // Muestra el valor en porcentaje
    }

    // Al cambiar el volumen, actualiza tanto el reproductor como el valor mostrado
    volumenInput.addEventListener('input', () => {
        const nuevoVolumen = volumenInput.value / 100; // Convierte el valor del control a un rango entre 0 y 1
        reproductor.volume = nuevoVolumen; // Ajusta el volumen del reproductor
        volumenValor.textContent = volumenInput.value; // Muestra el valor actualizado

        // Guarda el volumen en el localStorage para que persista entre páginas
        localStorage.setItem('volumen', nuevoVolumen);
    });
    // Control de Brillo
    const brilloInput = document.getElementById('brillo');
    const brilloValor = document.getElementById('brillo-valor');
    const brilloGuardado = localStorage.getItem('brillo');

    if (brilloGuardado) {
        document.body.style.filter = `brightness(${brilloGuardado}%)`;
        brilloInput.value = brilloGuardado;
        brilloValor.textContent = brilloGuardado;
    }

    brilloInput.addEventListener('input', () => {
        const nuevoBrillo = brilloInput.value;
        document.body.style.filter = `brightness(${nuevoBrillo}%)`;
        brilloValor.textContent = nuevoBrillo;
        localStorage.setItem('brillo', nuevoBrillo);
    });
    // Control de Modo Oscuro
    const modoOscuroCheckbox = document.getElementById('modo-oscuro');
    const modoOscuroEstado = document.getElementById('modo-oscuro-estado');
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');

    if (modoOscuroGuardado === 'true') {
        document.body.classList.add('dark-mode');
        modoOscuroCheckbox.checked = true;
        modoOscuroEstado.textContent = 'Activado';
    }

    modoOscuroCheckbox.addEventListener('change', () => {
        const modoOscuroActivado = modoOscuroCheckbox.checked;
        document.body.classList.toggle('dark-mode', modoOscuroActivado);
        modoOscuroEstado.textContent = modoOscuroActivado ? 'Activado' : 'Desactivado';
        localStorage.setItem('modoOscuro', modoOscuroActivado);
    });
    
    // Control WiFi
    const wifiCheckbox = document.getElementById('wifi');
    const wifiEstado = document.getElementById('wifi-estado');

    // Verifica si hay un estado guardado en localStorage
    const wifiGuardado = localStorage.getItem('wifi');
    if (wifiGuardado !== null) {
        const wifiActivo = wifiGuardado === 'true'; // Convierte el string en booleano
        wifiCheckbox.checked = wifiActivo;
        wifiEstado.textContent = wifiActivo ? 'Activado' : 'Desactivado';
    }

    // Cambia el estado del WiFi
    wifiCheckbox.addEventListener('change', () => {
        const wifiActivo = wifiCheckbox.checked;
        wifiEstado.textContent = wifiActivo ? 'Activado' : 'Desactivado';

        // Guarda el estado en localStorage
        localStorage.setItem('wifi', wifiActivo);
    });
});





// Función para volver al inicio
function volverInicio() {
    history.back(); // Lleva al usuario a la página anterior
}
