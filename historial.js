// Botón para regresar a la ventana principal
document.getElementById('back').addEventListener('click', function () {
    window.close();
});

// Botón para eliminar el historial
document.getElementById('clear-history').addEventListener('click', function () {
    // Confirmación para eliminar el historial
    const confirmation = confirm("¿Estás seguro de que deseas eliminar el historial?");

    if (confirmation) {
        // Eliminar el historial de localStorage
        localStorage.removeItem('playerHistory');

        // Limpiar la lista en la interfaz
        const historyList = document.querySelector('.history-list');
        historyList.innerHTML = '<p>No hay historial guardado.</p>';

        alert("Historial eliminado correctamente.");
    }
});






// Cargar el historial desde localStorage
document.addEventListener('DOMContentLoaded', function () {
    const historyList = document.querySelector('.history-list');
    const history = JSON.parse(localStorage.getItem('playerHistory')) || [];

    if (history.length === 0) {
        historyList.innerHTML = '<p>No hay historial guardado.</p>';
    } else {
        history.forEach((entry, index) => {
            const player1 = entry.players[0];
            const player2 = entry.players[1];
            const winner = entry.winner;
            const betAmount = entry.betAmount;
            const user = entry.user;
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerHTML = `
        <p>Pareja ${index + 1}:</p>
        <div class="players">
          <div class="player">
            <img src="${player1.icon}" alt="${player1.name}">
            <span>${player1.name}</span>
          </div>
          <span>vs</span>
          <div class="player">
            <img src="${player2.icon}" alt="${player2.name}">
            <span>${player2.name}</span>
          </div>
        </div>
        <p>Ganador: ${winner}, Apuesta: ${betAmount} monedas</p>
        <p>Guardado por: ${user}</p>
      `;
            historyList.appendChild(historyItem);
        });
    }
});

