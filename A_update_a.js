//TODO ACTUALIZACION AUTOMATICA
let lastModified = null;

// Función para obtener la fecha de la última modificación del archivo
function fetchLastModified() {
    return fetch('/players_top10.js', { method: 'HEAD' }) // Usar método HEAD para obtener solo los encabezados
        .then(response => response.headers.get('Last-Modified'));
}

// Función para cargar y evaluar el archivo players_top10.js
function fetchPlayers() {
    return fetch('/players_top10.js')
        .then(response => response.text())
        .then(script => {
        // Evalúa el script para obtener la nueva lista de jugadores
        eval(script);
        updatePlayerList(); // Función que actualiza la lista de jugadores
    });
}

// Función para comprobar si el archivo ha sido modificado
function checkForUpdates() {
    fetchLastModified()
        .then(lastModifiedTime => {
        if (!lastModified || lastModifiedTime !== lastModified) {
            lastModified = lastModifiedTime;
            return fetchPlayers();
        }
    })
        .catch(error => console.error('Error checking for updates:', error));
}

// Verifica actualizaciones cada 10 segundos
setInterval(checkForUpdates, 10000);

// Función para actualizar la lista de jugadores
function updatePlayerList() {
    // Aquí deberías actualizar la lista de jugadores con los datos
    // que has obtenido del archivo players_top10.js

    const playerDiv = this.parentElement;
    const playerIcon = playerDiv.querySelector('img').src;
    const playerId = playerDiv.getAttribute('data-id');
    const playerName = playerDiv.querySelector('span').textContent;
    if(this.checked){
        if(window.selectedPlayers.length<2){
            window.selectedPlayers.push({ id: playerId, name: playerName, icon: playerIcon });
            window.updatePlayerSlots();
        }else{
            this.checked = false;
        }
    }else{
        window.selectedPlayers = window.selectedPlayers.filter(player => player.id !== playerId);
        window.updatePlayerSlots();
    }
}

