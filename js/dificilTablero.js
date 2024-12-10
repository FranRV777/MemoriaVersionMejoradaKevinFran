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
const club_nombre = [
    { club: 'Atletico de Madrid', imageClub: '../js/Clubes/AtletiESC.jpg', nombre: 'Atletico de Madrid', imageNombre: '../js/Clubes/Atleti.jpg' },
    { club: 'Barca', imageClub: '../js/Clubes/BarcaESC.jpg', nombre: 'Barca', imageNombre: '../js/Clubes/Barca.jpg' },
    { club: 'Motor Lublin', imageClub: '../js/Clubes/MotorLublinESC.jpg', nombre: 'Motor Lublin', imageNombre: '../js/Clubes/MotorLublin.jpg' },
    { club: 'Real Madrid', imageClub: '../js/Clubes/RealMadridESC.jpg', nombre: 'Real Madrid', imageNombre: '../js/Clubes/RealMadrid.jpg' },
    { club: 'Salzburg', imageClub: '../js/Clubes/SalzburgESC.jpg', nombre: 'Salzburg', imageNombre: '../js/Clubes/Salzburg.jpg' },
    { club: 'Slava', imageClub: '../js/Clubes/SlavaESC.jpg', nombre: 'Slava', imageNombre: '../js/Clubes/Slava.jpg' },
    { club: 'Orlando Pirates', imageClub: '../js/Clubes/OrlandoPirates.jpg', nombre: 'Orlando Pirates', imageNombre: '../js/Clubes/OrlandoPirates.jpg' },
    { club: 'Al Ahly', imageClub: '../js/Clubes/AlAhlyESC.jpg', nombre: 'Al Ahly', imageNombre: '../js/Clubes/AlAhly.jpg' },
    { club: 'Alianza Lima', imageClub: '../js/Clubes/AlianzaLimaESC.jpg', nombre: 'Alianza Lima', imageNombre: '../js/Clubes/AlianzaLima.jpg' },
    { club: 'Boca', imageClub: '../js/Clubes/BocaESC.jpg', nombre: 'Boca', imageNombre: '../js/Clubes/Boca.jpg' },
    { club: 'Cam', imageClub: '../js/Clubes/CAMESC.jpg', nombre: 'Cam', imageNombre: '../js/Clubes/CAM.jpg' },
    { club: 'Dragon', imageClub: '../js/Clubes/DragonESC.jpg', nombre: 'Dragon', imageNombre: '../js/Clubes/Dragon.jpg' },
    { club: 'Flamengo', imageClub: '../js/Clubes/FlamengoESC.jpg', nombre: 'Flamengo', imageNombre: '../js/Clubes/Flamengo.jpg' },
    { club: 'Fluminense', imageClub: '../js/Clubes/FluminenseESC.jpg', nombre: 'Fluminense', imageNombre: '../js/Clubes/Fluminense.jpg' },
    { club: 'Galaxy', imageClub: '../js/Clubes/GalaxyESC.jpg', nombre: 'Galaxy', imageNombre: '../js/Clubes/Galaxy.jpg' },
    { club: 'Leipzig', imageClub: '../js/Clubes/LeipzigESC.jpg', nombre: 'Leipzig', imageNombre: '../js/Clubes/Leipzig.jpg' },
    { club: 'Mazembe', imageClub: '../js/Clubes/MazambeESC.jpg', nombre: 'Mazembe', imageNombre: '../js/Clubes/Mazambe.jpg' },
    { club: 'Miami', imageClub: '../js/Clubes/MiamiESC.jpg', nombre: 'Miami', imageNombre: '../js/Clubes/Miami.jpg' },
    { club: 'Newell\'s', imageClub: '../js/Clubes/NewellsESC.jpg', nombre: 'Newell\'s', imageNombre: '../js/Clubes/Newells.jpg' },
    { club: 'Palmeiras', imageClub: '../js/Clubes/PalmeirasESC.jpg', nombre: 'Palmeiras', imageNombre: '../js/Clubes/Palmeiras.jpg' },
    { club: 'Peñarol', imageClub: '../js/Clubes/PeñarolESC.jpg', nombre: 'Peñarol', imageNombre: '../js/Clubes/Peñarol.jpg' },
    { club: 'Racing Club', imageClub: '../js/Clubes/RacingClubESC.jpg', nombre: 'Racing Club', imageNombre: '../js/Clubes/RacingClub.jpg' },
    { club: 'Raja', imageClub: '../js/Clubes/RajaESC.jpg', nombre: 'Raja', imageNombre: '../js/Clubes/Raja.jpg' },
    { club: 'Red Bull Brasil', imageClub: '../js/Clubes/RedBullBrasilESC.jpg', nombre: 'Red Bull Brasil', imageNombre: '../js/Clubes/RedBullBrasil.jpg' },
    { club: 'Red Bulls NY', imageClub: '../js/Clubes/RedBullsNYESC.jpg', nombre: 'Red Bulls NY', imageNombre: '../js/Clubes/RedBullsNY.jpg' },
    { club: 'River', imageClub: '../js/Clubes/RiverESC.jpg', nombre: 'River', imageNombre: '../js/Clubes/River.jpg' },
    { club: 'Santos', imageClub: '../js/Clubes/SantosESC.jpg', nombre: 'Santos', imageNombre: '../js/Clubes/Santos.jpg' },
    { club: 'Simba', imageClub: '../js/Clubes/SimbaESC.jpg', nombre: 'Simba', imageNombre: '../js/Clubes/Simba.jpg' },
    { club: 'Al Hilal', imageClub: '../js/Clubes/AlHilalESC.jpg', nombre: 'Al Hilal', imageNombre: '../js/Clubes/AlHilal.jpg' },
    { club: 'Al Nassr', imageClub: '../js/Clubes/AlNassrESC.jpg', nombre: 'Al Nassr', imageNombre: '../js/Clubes/AlNassr.jpg' },
    { club: 'América', imageClub: '../js/Clubes/AmericasESC.jpg', nombre: 'América', imageNombre: '../js/Clubes/Americas.jpg' },
    { club: 'Auckland City', imageClub: '../js/Clubes/AucklandCityESC.jpg', nombre: 'Auckland City', imageNombre: '../js/Clubes/AucklandCity.jpg' },
    { club: 'Cruz Azul', imageClub: '../js/Clubes/CruzAzulESC.jpg', nombre: 'Cruz Azul', imageNombre: '../js/Clubes/CruzAzul.jpg' },
    { club: 'Hien Sport', imageClub: '../js/Clubes/HienSportESC.jpg', nombre: 'Hien Sport', imageNombre: '../js/Clubes/HienSport.jpg' },
    { club: 'Kashima', imageClub: '../js/Clubes/kashimaESC.jpg', nombre: 'Kashima', imageNombre: '../js/Clubes/kashima.jpg' },
    { club: 'Kossa', imageClub: '../js/Clubes/KossaESC.jpg', nombre: 'Kossa', imageNombre: '../js/Clubes/Kossa.jpg' },
    { club: 'Los Angeles', imageClub: '../js/Clubes/LosAngelesESC.jpg', nombre: 'Los Angeles', imageNombre: '../js/Clubes/LosAngeles.jpg' },
    { club: 'Maccabi', imageClub: '../js/Clubes/MaccabiESC.jpg', nombre: 'Maccabi', imageNombre: '../js/Clubes/Maccabi.jpg' },
    { club: 'Vissel Kobe', imageClub: '../js/Clubes/VisselKobeESC.jpg', nombre: 'Vissel Kobe', imageNombre: '../js/Clubes/VisselKobe.jpg' },
];

var cartasEspeciales = [
    { tipo: 'joker', imageEspecial: '../js/CartasEspeciales/joker.jpg' },
    { tipo: 'estrella', imageEspecial: '../js/CartasEspeciales/estrella.jpg' },
    { tipo: 'bankDevil', imageEspecial: '../js/CartasEspeciales/bankdevil.jpg' },
    { tipo: 'peste', imageEspecial: '../js/CartasEspeciales/peste.jpg' },
    { tipo: 'browser', imageEspecial: '../js/CartasEspeciales/browser.jpg' },
    { tipo: 'minibrowser', imageEspecial: '../js/CartasEspeciales/minibrowser.jpg' },
    { tipo: 'flor', imageEspecial: '../js/CartasEspeciales/flor.jpg' },
    { tipo: 'champiñon', imageEspecial: '../js/CartasEspeciales/champiñon.jpg' },
];


// Función para generar las cartas aleatorias
function generarCartasAleatorias() {
    const cartasSeleccionadas = [];
    const indicesUsados = new Set();

    // Seleccionar 12 pares únicos de clubes y nombres
    while (cartasSeleccionadas.length < 12 * 2) {
        const index = Math.floor(Math.random() * club_nombre.length);
        if (!indicesUsados.has(index)) {
            indicesUsados.add(index);
            const item = club_nombre[index];
            cartasSeleccionadas.push({ tipo: 'club', club: item.club, image: item.imageClub });
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
        cartaDiv.innerHTML = `<img src="../js/Trasera/cartas.jpg" alt="Carta volteada">`;
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
        (cartaSeleccionada.carta.tipo === 'club' && segundaCarta.tipo === 'nombre' &&
            club_nombre.some(
                (pair) => pair.club === cartaSeleccionada.carta.club && pair.nombre === segundaCarta.nombre
            )) ||
        (cartaSeleccionada.carta.tipo === 'nombre' && segundaCarta.tipo === 'club' &&
            club_nombre.some(
                (pair) => pair.nombre === cartaSeleccionada.carta.nombre && pair.club === segundaCarta.club
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
            cartaSeleccionada.cartaDiv.innerHTML = `<img src="../js/Trasera/cartas.jpg" alt="Carta volteada">`;
            segundaCartaDiv.innerHTML = `<img src="../js/Trasera/cartas.jpg" alt="Carta volteada">`;
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
        (primera.tipo === 'club' && segunda.tipo === 'nombre' &&
            clubes_nombrees.some(pair => pair.club === primera.club && pair.nombre === segunda.nombre)) ||
        (primera.tipo === 'nombre' && segunda.tipo === 'club' &&
            clubes_nombrees.some(pair => pair.nombre === primera.nombre && pair.club === segunda.club))
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
                    carta.innerHTML = `<img src="../js/Trasera/cartas.jpg" alt="Carta volteada">`;
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