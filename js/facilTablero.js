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
// Pares de países y ciudades con cartas especiales
const paises_ciudades = [
    { pais: 'Polonia', imagePais: '../js/Paises/polonia.jpg', ciudad: 'Varsovia', imageCiudad: '../js/Paises/varsovia.jpg' },
    { pais: 'Belgica', imagePais: '../js/Paises/belgica.jpg', ciudad: 'Bruselas', imageCiudad: '../js/Paises/bruselas.jpg' },
    { pais: 'Rumania', imagePais: '../js/Paises/rumania.jpg', ciudad: 'Bucarest', imageCiudad: '../js/Paises/bucarest.jpg' },
    { pais: 'China', imagePais: '../js/Paises/china.jpg', ciudad: 'Pekin', imageCiudad: '../js/Paises/pekin.jpg' },
    { pais: 'Australia', imagePais: '../js/Paises/australia.jpg', ciudad: 'Canberra', imageCiudad: '../js/Paises/canberra.jpg' },
    { pais: 'Hungría', imagePais: '../js/Paises/hungria.jpg', ciudad: 'Budapest', imageCiudad: '../js/Paises/budapest.jpg' },
    { pais: 'Bolivia', imagePais: '../js/Paises/bolivia.jpg', ciudad: 'La paz', imageCiudad: '../js/Paises/lapaz.jpg' },
    { pais: 'Albania', imagePais: '../js/Paises/albania.jpg', ciudad: 'Tirana', imageCiudad: '../js/Paises/tirana.jpg' },
    { pais: 'Argentina', imagePais: '../js/Paises/argentina.jpg', ciudad: 'Buenos aires', imageCiudad: '../js/Paises/buenosaires.jpg' },
    { pais: 'Brasil', imagePais: '../js/Paises/brasil.jpg', ciudad: 'Brasilia', imageCiudad: '../js/Paises/brasilia.jpg' },
    { pais: 'Cabo verde', imagePais: '../js/Paises/caboverde.jpg', ciudad: 'Praia', imageCiudad: '../js/Paises/praia.jpg' },
    { pais: 'Serbia', imagePais: '../js/Paises/serbia.jpg', ciudad: 'Belgrado', imageCiudad: '../js/Paises/belgrado.jpg' },
    { pais: 'Francia', imagePais: '../js/Paises/francia.jpg', ciudad: 'Paris', imageCiudad: '../js/Paises/paris.jpg' },
    { pais: 'India', imagePais: '../js/Paises/india.jpg', ciudad: 'Nueva Delhi', imageCiudad: '../js/Paises/nuevadelhi.jpg' },
    { pais: 'Singapur', imagePais: '../js/Paises/singapur.jpg', ciudad: 'Singapur', imageCiudad: '../js/Paises/singapuur.jpg' },
    { pais: 'Vietham', imagePais: '../js/Paises/vietham.jpg', ciudad: 'Hanoi', imageCiudad: '../js/Paises/hanoi.jpg' },
    { pais: 'Lituania', imagePais: '../js/Paises/lituania.jpg', ciudad: 'Vilna', imageCiudad: '../js/Paises/vilna.jpg' },
    { pais: 'Ghana', imagePais: '../js/Paises/ghana.jpg', ciudad: 'Acra', imageCiudad: '../js/Paises/acra.jpg' },
    { pais: 'Granada', imagePais: '../js/Paises/granada.jpg', ciudad: 'Saint George', imageCiudad: '../js/Paises/saintgeorge.jpg' },
    { pais: 'Niger', imagePais: '../js/Paises/niger.jpg', ciudad: 'Niamey', imageCiudad: '../js/Paises/niamey.jpg' },
    { pais: 'Nigeria', imagePais: '../js/Paises/nigeria.jpg', ciudad: 'Abuya', imageCiudad: '../js/Paises/abuya.jpg' },
    { pais: 'Nicaragua', imagePais: '../js/Paises/nicaragua.jpg', ciudad: 'Managua', imageCiudad: '../js/Paises/managua.jpg' },
    { pais: 'Nueva Zelanda', imagePais: '../js/Paises/nuevazelanda.jpg', ciudad: 'Wellington', imageCiudad: '../js/Paises/wellington.jpg' },
    { pais: 'Panama', imagePais: '../js/Paises/panama.jpg', ciudad: 'Panamá', imageCiudad: '../js/Paises/panamá.jpg' },
    { pais: 'Somalia', imagePais: '../js/Paises/somalia.jpg', ciudad: 'Mogadisicio', imageCiudad: '../js/Paises/mogadisicio.jpg' },
    { pais: 'Sri lanka', imagePais: '../js/Paises/srilanka.jpg', ciudad: 'Colombo', imageCiudad: '../js/Paises/colombo.jpg' },
    { pais: 'Uruguay', imagePais: '../js/Paises/uruguay.jpg', ciudad: 'Montevideo', imageCiudad: '../js/Paises/montevideo.jpg' },
    { pais: 'Togo', imagePais: '../js/Paises/togo.jpg', ciudad: 'Lome', imageCiudad: '../js/Paises/lome.jpg' },
    { pais: 'Kuwait', imagePais: '../js/Paises/kuwait.jpg', ciudad: 'Kuwait', imageCiudad: '../js/Paises/kuwait1.jpg' },
    { pais: 'Mongolia', imagePais: '../js/Paises/mongolia.jpg', ciudad: 'Ulan Bator', imageCiudad: '../js/Paises/ulanbator.jpg' },
    { pais: 'Tailandia', imagePais: '../js/Paises/tailandia.jpg', ciudad: 'Bangrok', imageCiudad: '../js/Paises/bangrok.jpg' },
    { pais: 'Kenia', imagePais: '../js/Paises/kenia.jpg', ciudad: 'Nairobi', imageCiudad: '../js/Paises/nairobi.jpg' },
    { pais: 'Laos', imagePais: '../js/Paises/laos.jpg', ciudad: 'Vientian', imageCiudad: '../js/Paises/vientian.jpg' },
    { pais: 'Liberia', imagePais: '../js/Paises/liberia.jpg', ciudad: 'Monrovia', imageCiudad: '../js/Paises/monrovia.jpg' },
    { pais: 'Malta', imagePais: '../js/Paises/malta.jpg', ciudad: 'La valeta', imageCiudad: '../js/Paises/lavaleta.jpg' },
    { pais: 'Honduras', imagePais: '../js/Paises/honduras.jpg', ciudad: 'Tegucigalpa', imageCiudad: '../js/Paises/tegucigalpa.jpg' },
    { pais: 'Mozambique', imagePais: '../js/Paises/mozambique.jpg', ciudad: 'Maputo', imageCiudad: '../js/Paises/maputo.jpg' },
    { pais: 'Mexico', imagePais: '../js/Paises/mexico.jpg', ciudad: 'Ciudad de méxico', imageCiudad: '../js/Paises/ciudaddeméxico.jpg' },
    { pais: 'Arabia Saudita', imagePais: '../js/Paises/arabiasaudita.jpg', ciudad: 'Riad', imageCiudad: '../js/Paises/riad.jpg' },
    { pais: 'Fiyi', imagePais: '../js/Paises/fiyi.jpg', ciudad: 'Suva', imageCiudad: '../js/Paises/suva.jpg' },
    { pais: 'Palaos', imagePais: '../js/Paises/palaos.jpg', ciudad: 'Ngerulmud', imageCiudad: '../js/Paises/ngerulmud.jpg' }
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

    // Seleccionar 12 pares únicos de países/ciudades
    while (cartasSeleccionadas.length < 12 * 2) {
        const index = Math.floor(Math.random() * paises_ciudades.length);
        if (!indicesUsados.has(index)) {
            indicesUsados.add(index);
            const item = paises_ciudades[index];
            cartasSeleccionadas.push({ tipo: 'pais', pais: item.pais, image: item.imagePais });
            cartasSeleccionadas.push({ tipo: 'ciudad', ciudad: item.ciudad, image: item.imageCiudad });
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
        cartaDiv.innerHTML = `<img src="../js/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
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
        (cartaSeleccionada.carta.tipo === 'pais' && segundaCarta.tipo === 'ciudad' &&
            paises_ciudades.some(
                (pair) => pair.pais === cartaSeleccionada.carta.pais && pair.ciudad === segundaCarta.ciudad
            )) ||
        (cartaSeleccionada.carta.tipo === 'ciudad' && segundaCarta.tipo === 'pais' &&
            paises_ciudades.some(
                (pair) => pair.ciudad === cartaSeleccionada.carta.ciudad && pair.pais === segundaCarta.pais
            ))
    );

    if (esParCorrecto) {
        // Son un par correcto
        pares++;
        puntuaje += 20; // Puntuar 3 puntos por par correcto
        mostrarPuntuaje.innerHTML = `Puntuaje: ${puntuaje}`;

        verificarFinJuego();
        
        // Restablecer la carta seleccionada
        cartaSeleccionada = null;

        // Desbloquear la selección de cartas
        bloqueada = false;
    } else {
        // No son un par, voltear las cartas de vuelta después de un retraso
        setTimeout(() => {
            cartaSeleccionada.cartaDiv.innerHTML = `<img src="../js/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
            segundaCartaDiv.innerHTML = `<img src="../js/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
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
        (primera.tipo === 'pais' && segunda.tipo === 'ciudad' &&
            paises_ciudades.some(pair => pair.pais === primera.pais && pair.ciudad === segunda.ciudad)) ||
        (primera.tipo === 'ciudad' && segunda.tipo === 'pais' &&
            paises_ciudades.some(pair => pair.ciudad === primera.ciudad && pair.pais === segunda.pais))
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
                    carta.innerHTML = `<img src="../js/Trasera/detrasMundo.jpg" alt="Carta volteada">`;
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

function obtenerPuntuacion(){
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