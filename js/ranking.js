document.addEventListener('DOMContentLoaded', () => {
    // Obtener el ranking desde el localStorage (si no existe, será un array vacío)
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];

    // Seleccionamos el cuerpo de la tabla donde se insertarán las filas
    const tableBody = document.querySelector('#rankingTable tbody');

    // Limpiar la tabla antes de llenarla
    tableBody.innerHTML = '';

    // Iterar sobre los elementos del ranking y agregar filas a la tabla
    ranking.forEach((item) => {
        const row = document.createElement('tr'); // Crear una nueva fila

        // Insertar las celdas con los datos correspondientes
        row.innerHTML = `
            <td>${item.alias}</td>
            <td>${item.kfPoints}</td>
            <td>${item.tiempo}</td>
            <td>${item.dificultad}</td>
        `;
        
        // Añadir la fila a la tabla
        tableBody.appendChild(row);
    });
});

function volverInicio() {
    // Redirigir a la página de inicio
    window.location.href = '../inicioKefrokGames.html'; // Ajusta la ruta según tu proyecto
}