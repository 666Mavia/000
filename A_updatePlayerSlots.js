function updatePlayerSlots(){
// Actualiza las imágenes de los jugadores
const player1Slot=document.getElementById('player1Slot');
const player2Slot=document.getElementById('player2Slot');
player1Slot.style.backgroundImage=window.selectedPlayers[0]?`url(${window.selectedPlayers[0].icon})`:'none';
player2Slot.style.backgroundImage=window.selectedPlayers[1]?`url(${window.selectedPlayers[1].icon})`:'none';
// Actualiza los nombres de los jugadores
const player1Name = document.getElementById('player1Slot_nombre');
const player2Name = document.getElementById('player2Slot_nombre');
player1Name.textContent = window.selectedPlayers[0] ? window.selectedPlayers[0].name : '';
player2Name.textContent = window.selectedPlayers[1] ? window.selectedPlayers[1].name : '';
}