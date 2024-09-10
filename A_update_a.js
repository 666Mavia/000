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
        updatePlayerList(true); // Función que actualiza la lista de jugadores
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

function updatePlayerList(recargar_web){
const playerListElement=document.querySelector('#player-list'); // Asegúrate de tener un contenedor para la lista de jugadores
playerListElement.innerHTML=''; // Limpiar la lista actual
window.selectedPlayers.forEach(player=>{
const playerItem=document.createElement('div');
playerItem.classList.add('player-item');
playerItem.innerHTML=`
<img src="${player.icon}" alt="${player.name}">
<span>${player.name}</span>
`;
playerListElement.appendChild(playerItem);
if(recargar_web){
window.location.reload(true);
alert('Web Actualizada!'); 
}
});
}

