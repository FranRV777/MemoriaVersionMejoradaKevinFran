// Variables del juego
var temporizador = false;
var cartasDestapadas = 0;
var pares = 0;
var timerInicial = 360;
var timer = timerInicial;
var puntuaje = 0;
var movimientos = 0;
var cartas = [];


// Referencias del DOM
const mostrarTiempo = document.getElementById('restante');
const mostrarPuntuaje = document.getElementById('puntuaje');
const mostrarMovimientos = document.getElementById('movimientos');
const tablero = document.getElementById('tablero');
// Pares de animales y nombres con cartas especiales
const animales_nombres = [
    { animal: 'Abeja', imageAnimal: '../js/Animales/AbejaI.jpg', nombre: 'Abeja', imageNombre: '../js/Animales/AbejaN.jpg' },
    { animal: 'Ardilla', imageAnimal: '../js/Animales/ArdillaI.jpg', nombre: 'Ardilla', imageNombre: '../js/Animales/ArdillaN.jpg' },
    { animal: 'Axolote', imageAnimal: '../js/Animales/AxoloteI.jpg', nombre: 'Axolote', imageNombre: '../js/Animales/AxoloteN.jpg' },
    { animal: 'Buitre', imageAnimal: '../js/Animales/BuitreI.jpg', nombre: 'Buitre', imageNombre: '../js/Animales/BuitreN.jpg' },
    { animal: 'Cangrejo', imageAnimal: '../js/Animales/CangrejoI.jpg', nombre: 'Cangrejo', imageNombre: '../js/Animales/CangrejoN.jpg' },
    { animal: 'Capibara', imageAnimal: '../js/Animales/CapibaraI.jpg', nombre: 'Capibara', imageNombre: '../js/Animales/CapibaraN.jpg' },
    { animal: 'Cebra', imageAnimal: '../js/Animales/CebraI.jpg', nombre: 'Cebra', imageNombre: '../js/Animales/CebraN.jpg' },
    { animal: 'Cerdo', imageAnimal: '../js/Animales/CerdoI.jpg', nombre: 'Cerdo', imageNombre: '../js/Animales/CerdoN.jpg' },
    { animal: 'Chimpance', imageAnimal: '../js/Animales/ChimpanceI.jpg', nombre: 'Chimpance', imageNombre: '../js/Animales/ChimpanceN.jpg' },
    { animal: 'CobraReal', imageAnimal: '../js/Animales/CobraRealI.jpg', nombre: 'CobraReal', imageNombre: '../js/Animales/CobraRealN.jpg' },
    { animal: 'Cocodrilo', imageAnimal: '../js/Animales/CocodriloI.jpg', nombre: 'Cocodrilo', imageNombre: '../js/Animales/CocodriloN.jpg' },
    { animal: 'Delfin', imageAnimal: '../js/Animales/DelfinI.jpg', nombre: 'Delfin', imageNombre: '../js/Animales/DelfinN.jpg' },
    { animal: 'Erizo', imageAnimal: '../js/Animales/ErizoI.jpg', nombre: 'Erizo', imageNombre: '../js/Animales/ErizoN.jpg' },
    { animal: 'Escorpion', imageAnimal: '../js/Animales/EscorpionI.jpg', nombre: 'Escorpion', imageNombre: '../js/Animales/EscorpionN.jpg' },
    { animal: 'FlamencoRosa', imageAnimal: '../js/Animales/FlamencoRosaI.jpg', nombre: 'FlamencoRosa', imageNombre: '../js/Animales/FlamencoRosaN.jpg' },
    { animal: 'Gallina', imageAnimal: '../js/Animales/GallinaI.jpg', nombre: 'Gallina', imageNombre: '../js/Animales/GallinaN.jpg' },
    { animal: 'Hiena', imageAnimal: '../js/Animales/HienaI.jpg', nombre: 'Hiena', imageNombre: '../js/Animales/HienaN.jpg' },
    { animal: 'Hipopotamo', imageAnimal: '../js/Animales/HipopotamoI.jpg', nombre: 'Hipopotamo', imageNombre: '../js/Animales/HipopotamoN.jpg' },
    { animal: 'Jirafa', imageAnimal: '../js/Animales/JirafaI.jpg', nombre: 'Jirafa', imageNombre: '../js/Animales/JirafaN.jpg' },
    { animal: 'Koala', imageAnimal: '../js/Animales/KoalaI.jpg', nombre: 'Koala', imageNombre: '../js/Animales/KoalaN.jpg' },
    { animal: 'Lama', imageAnimal: '../js/Animales/LamaI.jpg', nombre: 'Lama', imageNombre: '../js/Animales/LamaN.jpg' },
    { animal: 'Lemures', imageAnimal: '../js/Animales/LemuresI.jpg', nombre: 'Lemures', imageNombre: '../js/Animales/LemuresN.jpg' },
    { animal: 'Leon', imageAnimal: '../js/Animales/LeonI.jpg', nombre: 'Leon', imageNombre: '../js/Animales/LeonN.jpg' },
    { animal: 'Lince', imageAnimal: '../js/Animales/LinceI.jpg', nombre: 'Lince', imageNombre: '../js/Animales/LinceN.jpg' },
    { animal: 'Mariposa', imageAnimal: '../js/Animales/MariposaI.jpg', nombre: 'Mariposa', imageNombre: '../js/Animales/MariposaN.jpg' },
    { animal: 'Medusa', imageAnimal: '../js/Animales/MedusaI.jpg', nombre: 'Medusa', imageNombre: '../js/Animales/MedusaN.jpg' },
    { animal: 'Morsa', imageAnimal: '../js/Animales/MorsaI.jpg', nombre: 'Morsa', imageNombre: '../js/Animales/MorsaN.jpg' },
    { animal: 'Mosquito', imageAnimal: '../js/Animales/MosquitoI.jpg', nombre: 'Mosquito', imageNombre: '../js/Animales/MosquitoN.jpg' },
    { animal: 'OsoGrizzly', imageAnimal: '../js/Animales/OsoGrizzlyI.jpg', nombre: 'OsoGrizzly', imageNombre: '../js/Animales/OsoGrizzlyN.jpg' },
    { animal: 'OsoPanda', imageAnimal: '../js/Animales/OsoPandaI.jpg', nombre: 'OsoPanda', imageNombre: '../js/Animales/OsoPandaN.jpg' },
    { animal: 'Oveja', imageAnimal: '../js/Animales/OvejaI.jpg', nombre: 'Oveja', imageNombre: '../js/Animales/OvejaN.jpg' },
    { animal: 'PandaRojo', imageAnimal: '../js/Animales/PandaRojoI.jpg', nombre: 'PandaRojo', imageNombre: '../js/Animales/PandaRojoN.jpg' },
    { animal: 'Pato', imageAnimal: '../js/Animales/PatoI.jpg', nombre: 'Pato', imageNombre: '../js/Animales/PatoN.jpg' },
    { animal: 'Pinguino', imageAnimal: '../js/Animales/PinguinoI.jpg', nombre: 'Pinguino', imageNombre: '../js/Animales/PinguinoN.jpg' },
    { animal: 'Rinoceronte', imageAnimal: '../js/Animales/RinoceronteI.jpg', nombre: 'Rinoceronte', imageNombre: '../js/Animales/RinoceronteN.jpg' },
    { animal: 'Sapo', imageAnimal: '../js/Animales/SapoI.jpg', nombre: 'Sapo', imageNombre: '../js/Animales/SapoN.jpg' },
    { animal: 'Tiburon', imageAnimal: '../js/Animales/TiburonI.jpg', nombre: 'Tiburon', imageNombre: '../js/Animales/TiburonN.jpg' },
    { animal: 'Tigre', imageAnimal: '../js/Animales/TigreI.jpg', nombre: 'Tigre', imageNombre: '../js/Animales/TigreN.jpg' },
    { animal: 'Topo', imageAnimal: '../js/Animales/TopoI.jpg', nombre: 'Topo', imageNombre: '../js/Animales/TopoN.jpg' },
    { animal: 'T-rex', imageAnimal: '../js/Animales/T_rexI.jpg', nombre: 'T-rex', imageNombre: '../js/Animales/T_rexN.jpg' },
];

var cartasEspeciales = [
    { tipo: 'joker', imageEspecial: '../js/CartasEspeciales/joker.jpg' },
    { tipo: 'estrella', imageEspecial: '../js/CartasEspeciales/estrella.jpg' },
    { tipo: 'bankDevil', imageEspecial: '../js/CartasEspeciales/bankdevil.jpg' },
    { tipo: 'peste', imageEspecial: '../js/CartasEspeciales/peste.jpg' },
    { tipo: 'browser', imageEspecial: '../js/CartasEspeciales/browser.jpg' },
    { tipo: 'minibrowser', imageEspecial: '../js/CartasEspeciales/minibrowser.jpg' },
    { tipo: 'flor', imageEspecial: '../js/CartasEspeciales/flor.jpg' },
    { tipo: 'champiñon', imageEspecial: '../js/CartasEspeciales/champiñon.jpg' }
];


// Función para generar las cartas aleatorias
function generarCartasAleatorias() {
    const cartasSeleccionadas = [];
    const indicesUsados = new Set();

    // Seleccionar 12 pares únicos de países/nombreses
    while (cartasSeleccionadas.length < 12 * 2) {
        const index = Math.floor(Math.random() * animales_nombres.length);
        if (!indicesUsados.has(index)) {
            indicesUsados.add(index);
            const item = animales_nombres[index];
            cartasSeleccionadas.push({ tipo: 'animal', animal: item.animal, image: item.imageAnimal });
            cartasSeleccionadas.push({ tipo: 'nombre', nombre: item.nombre, image: item.imageNombre });
        }
    }

    // Agregar 4 cartas especiales
    for (let i = 0; i < 4; i++) {
        const especial = cartasEspeciales[Math.floor(Math.random() * cartasEspeciales.length)];
        cartasSeleccionadas.push({ tipo: 'especial', especial: especial.tipo, image: especial.imageEspecial });
    }

    // Mezclar las cartas y devolverlas
    return mezclarArray(cartasSeleccionadas);
}

// Función para mezclar el array
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar los elementos
    }
    return array;
}

// Función para crear el tablero de cartas
function crearTablero() {
    tablero.innerHTML = ''; // Limpiar el tablero
    cartas.forEach((carta, index) => {
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('carta');
        cartaDiv.setAttribute('id', `carta-${index}`);
        cartaDiv.addEventListener('click', () => manejarSeleccionCarta(carta, cartaDiv));

        // Mostrar la carta volteada por defecto
        cartaDiv.innerHTML = `<img src="../js/Trasera/animales.jpg" alt="Carta volteada">`;
        tablero.appendChild(cartaDiv);
    });
    iniciarTemporizador(); // Aseguramos que el temporizador se inicie cuando se crea el tablero
}

// Inicializar las cartas y el tablero
cartas = generarCartasAleatorias(); // Generar cartas aleatorias
crearTablero(); // Crear el tablero


let cartaSeleccionada = null; // Variable para la primera carta seleccionada
let bloqueada = false; // Bloquear la selección de cartas mientras se comparan


// Función para manejar la selección de cartas
function manejarSeleccionCarta(carta, cartaDiv) {
    // No hacer nada si la carta ya está destapada o si hay un proceso de comparación en curso
    if (cartaDiv.classList.contains('destapada') || bloqueada) {
        return;
    }

    // Voltear la carta
    cartaDiv.innerHTML = `<img src="${carta.image}" alt="${carta.tipo}">`;
    cartaDiv.classList.add('destapada');
    cartasDestapadas++;

    // Si la carta es especial, manejarla de inmediato
    if (carta.tipo === 'especial') {
        manejarCartaEspecial(carta);
        return;
    }

    // Si no hay ninguna carta seleccionada, guardar la primera carta seleccionada
    if (cartaSeleccionada === null) {
        cartaSeleccionada = { cartaDiv, carta };
        return;
    }

    // Si ya hay una carta seleccionada, proceder con la segunda
    let segundaCartaDiv = cartaDiv;
    let segundaCarta = carta;

    // Contabilizar el movimiento
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    // Bloquear la selección de nuevas cartas mientras se comparan
    bloqueada = true;

    // Verificar si son un par correcto
    const esParCorrecto = (
        (cartaSeleccionada.carta.tipo === 'animal' && segundaCarta.tipo === 'nombre' &&
            animales_nombres.some(
                (pair) => pair.animal === cartaSeleccionada.carta.animal && pair.nombre === segundaCarta.nombre
            )) ||
        (cartaSeleccionada.carta.tipo === 'nombre' && segundaCarta.tipo === 'animal' &&
            animales_nombres.some(
                (pair) => pair.nombre === cartaSeleccionada.carta.nombre && pair.animal === segundaCarta.animal
            ))
    );

    if (esParCorrecto) {
        // Son un par correcto
        pares++;
        puntuaje += 3; // Puntuar 3 puntos por par correcto
        mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;

        verificarFinJuego();

        // Restablecer la carta seleccionada
        cartaSeleccionada = null;

        // Desbloquear la selección de cartas
        bloqueada = false;
    } else {
        // No son un par, voltear las cartas de vuelta después de un retraso
        setTimeout(() => {
            cartaSeleccionada.cartaDiv.innerHTML = `<img src="../js/Trasera/animales.jpg"  alt="Carta volteada">`;
            segundaCartaDiv.innerHTML = `<img src="../js/Trasera/animales.jpg"  alt="Carta volteada">`;
            cartaSeleccionada.cartaDiv.classList.remove('destapada');
            segundaCartaDiv.classList.remove('destapada');

            // Restablecer la carta seleccionada
            cartaSeleccionada = null;

            // Desbloquear la selección de cartas
            bloqueada = false;
        }, 1000);
    }


}

function verificarFinJuego() {
    if (pares === 12) { // Suponiendo que el juego termina al encontrar 12 pares correctos
        clearInterval(temporizador); // Detener el temporizador
        alert('¡Felicidades, has completado el juego!');

        // Ocultar tablero
        tablero.style.display = 'none';
        mostrarOpcionesFinalizar()
        // Mostrar opciones finales
        document.getElementById('ocpionesFinalizar').style.display = 'block';
    }

    if (timer <= 0) { // Si el tiempo se acaba
        clearInterval(temporizador); // Detener el temporizador
        alert('¡El tiempo ha terminado!');

        // Ocultar tablero
        tablero.style.display = 'none';

        // Mostrar opciones finales
        document.getElementById('ocpionesFinalizar').style.display = 'block';
    }
}


function verificarParCorrecto(primera, segunda) {
    return (
        (primera.tipo === 'animales' && segunda.tipo === 'nombres' &&
            animales_nombres.some(pair => pair.animales === primera.animales && pair.nombres === segunda.nombres)) ||
        (primera.tipo === 'nombres' && segunda.tipo === 'animales' &&
            animales_nombres.some(pair => pair.nombres === primera.nombres && pair.animales === segunda.animales))
    );
}

// Función para manejar cartas especiales
function manejarCartaEspecial(carta) {
    switch (carta.especial) {
        case 'joker':
            alert('¡Carta Joker! Se reinicia el tablero.');
            cartas = generarCartasAleatorias(); // Generar un nuevo conjunto de cartas
            crearTablero();
            clearInterval(temporizador); // Detener el temporizador
            timer = timerInicial; // Restablecer el tiempo
            mostrarTiempo.innerText = `Tiempo: ${timer}s`; // Actualizar el tiempo en el DOM
            iniciarTemporizador(); // Iniciar el temporizador de nuevo
            break;
        case 'estrella':
            alert('¡Carta Estrella! Todas las cartas serán visibles durante 3 segundos.');

            // Seleccionar todas las cartas que están en el tablero
            let todasLasCartas = document.querySelectorAll('.carta');

            // Voltear todas las cartas (hacerlas visibles)
            todasLasCartas.forEach(carta => {
                // Voltear la carta mostrando su imagen correspondiente
                const cartaId = carta.id.replace('carta-', ''); // Obtener el id de la carta
                const cartaData = cartas[cartaId]; // Obtener los datos de la carta desde el arreglo
                carta.innerHTML = `<img src="${cartaData.image}" alt="${cartaData.tipo}">`; // Voltear la carta
                carta.classList.add('visible'); // Agregar la clase visible para indicar que la carta está volteada
            });

            // Después de 3 segundos, ocultar todas las cartas nuevamente
            setTimeout(() => {
                todasLasCartas.forEach(carta => {
                    // Volver a poner la carta volteada
                    carta.innerHTML = `<img src="../js/Trasera/animales.jpg"  alt="Carta volteada">`;
                    carta.classList.remove('visible'); // Eliminar la clase visible
                });
            }, 3000); // 3 segundos
            break;
        case 'bankDevil':
            alert('¡Carta Bank Devil! Pierdes 10 puntos.');
            puntuaje -= 10;
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;
        case 'peste':
            alert('¡Carta Peste! Pierdes 5 puntos.');
            puntuaje -= 5;
            mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
            break;
        case 'champiñon':
            timer += 10; // Suma 10 segundos
            mostrarTiempo.innerText = timer;
            alert('¡El Champiñón ha sumado 10 segundos a tu tiempo!');
            break;
        case 'browser':
            timer = Math.max(0, timer - 20); // Resta 20 segundos, sin bajar de 0
            mostrarTiempo.innerText = timer;
            alert('¡El Browser ha restado 20 segundos de tu tiempo!');
            break;
        case 'minibrowser':
            timer = Math.max(0, timer - 10); // Resta 10 segundos, sin bajar de 0
            mostrarTiempo.innerText = timer;
            alert('¡El MiniBrowser ha restado 10 segundos de tu tiempo!');
            break;
        case 'flor':
            timer += 20; // Suma 20 segundos
            mostrarTiempo.innerText = `Tiempo: ${timer}s`; // Actualizar el tiempo en el DOM
            alert('¡La Flor ha sumado 20 segundos a tu tiempo!');
            break;
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Restablecer las variables
    cartasDestapadas = 0;
    pares = 0;
    puntuaje = 0;
    movimientos = 0;
    timer = timerInicial;
    mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    mostrarTiempo.innerText = `Tiempo: ${timer}s`;
    cartas = generarCartasAleatorias(); // Generar nuevas cartas aleatorias
    crearTablero(); // Crear el nuevo tablero
    ocultarOpciones(); // Ocultar las opciones de finalizar juego
}

// Función para iniciar el temporizador
function iniciarTemporizador() {
    mostrarTiempo.innerText = `Tiempo: ${timer}s`;
    temporizador = setInterval(() => {
        if (timer > 0) {
            timer--;
            mostrarTiempo.innerText = `Tiempo: ${timer}s`;
        } else {
            clearInterval(temporizador); // Detener el temporizador cuando llegue a 0
            // Ocultar el tablero y mostrar las opciones finales
            tablero.style.display = 'none';
            mostrarOpcionesFinalizar();
        }
    }, 1000);
}

// Función para mostrar las opciones al finalizar el juego
function mostrarOpcionesFinalizar() {
    // Ocultar el tablero del juego
    const tablero = document.getElementById('tablero'); // Asegúrate de que este ID coincida con el del tablero
    tablero.style.display = 'none';

    // Mostrar las opciones finales
    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'block'; // Asegúrate de que el contenedor de opciones exista en el HTML
}

// Función para ocultar las opciones al reiniciar el juego
function ocultarOpciones() {
    const tablero = document.getElementById('tablero'); // Asegúrate de que este ID coincida con el del tablero
    tablero.style.display = 'block';

    const opcionesDiv = document.getElementById('opcionesFinalizar');
    opcionesDiv.style.display = 'none';
}

// Función para guardar la puntuación en el ranking
function guardarPuntuacionEnRanking() {
    const aliasJugador = localStorage.getItem('alias');
    if (aliasJugador) {
        const puntuacion = obtenerPuntuacion(); // Asegúrate de que esta función devuelva la puntuación correcta.
        const tiempo = mostrarTiempo ? mostrarTiempo.innerText : '00:00'; // Verifica que 'mostrarTiempo' esté definido.
        const dificultad = localStorage.getItem('dificultad') || 'Alta'; // Obtén la dificultad guardada en localStorage.

        const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

        console.log('Alias: ', aliasJugador);
        console.log('Puntuación: ', puntuacion);
        console.log('Tiempo: ', tiempo);
        console.log('Dificultad: ', dificultad);

        // Agregar al ranking
        ranking.push({ alias: aliasJugador, kfPoints: puntuacion, tiempo: tiempo, dificultad: dificultad });

        // Ordenar el ranking por puntuación de mayor a menor
        ranking.sort((a, b) => b.kfPoints - a.kfPoints);

        // Guardar el ranking actualizado en localStorage
        localStorage.setItem('ranking', JSON.stringify(ranking));

        alert('¡Puntuación guardada exitosamente en el ranking!');

        // Redirigir al ranking
        redirigirRanking();
    } else {
        alert('No se encontró el nombre del jugador. Por favor, inicia sesión primero.');
        redirigirJuegoNiveles();
    }
}

function obtenerPuntuacion() {
    return puntuaje;
}
// Función para redirigir al ranking
function redirigirRanking() {
    window.location.href = 'ranking.html'; // Redirigir al ranking
}

// Función para redirigir al juego de niveles
function redirigirJuegoNiveles() {
    window.location.href = 'formulario.html'; // Redirigir al formulario o a otro archivo de niveles
}

// Función para reiniciar el juego al final
function reiniciarJuegoFinal() {
    reiniciarJuego(); // Llamamos a la función de reinicio del juego
}

// Obtener referencia al botón de reiniciar
const botonReiniciar = document.getElementById('reiniciar');

// Función para manejar el reinicio
function manejarReiniciar() {
    location.reload(); // Recargar la página
}

// Añadir un event listener al botón de reiniciar
botonReiniciar.addEventListener('click', manejarReiniciar);

// Llamar a esta función para reiniciar el juego, por ejemplo, con un botón:

botonReiniciar = document.getElementById('reiniciar');
botonReiniciar.addEventListener('click', reiniciarJuego);

// Iniciar el juego
cartas = generarCartasAleatorias();
crearTablero();