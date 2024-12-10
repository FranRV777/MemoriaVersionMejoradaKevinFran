function guardarDatos() {
    const alias = document.getElementById('alias').value;
    if (alias) {
        // Guardar los datos en el almacenamiento local (localStorage)
        localStorage.setItem('alias', alias);

        // Ocultar el formulario y mostrar los rectángulos de dificultad
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('rectangles-container').style.display = 'flex';
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

function volverInicio() {
    // Llevar al usuario a la página anterior
    window.location.href = '../inicioKefrokGames.html';
}

// Función para manejar el clic en los rectángulos de dificultad
function seleccionarDificultad(dificultad) {
    const alias = localStorage.getItem('alias');

    // Guardamos la dificultad seleccionada en el almacenamiento local
    localStorage.setItem('dificultad', dificultad);

    // Redirigimos a la página correspondiente según la dificultad seleccionada
    if (dificultad === 'facil') {
        window.location.href = "facilTablero.html";
    } else if (dificultad === 'medio') {
        window.location.href = "medioTablero.html";
    } else if (dificultad === 'dificil') {
        window.location.href = "dificilTablero.html";
    } else if (dificultad === 'extremo') {
        window.location.href = "extremoTablero.html";
    } else {
        console.error('Dificultad no válida: ', dificultad);
    }
}

