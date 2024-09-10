function updatePlayerSlots(){
// Actualiza las imágenes de los jugadores
const player1Slot=document.getElementById('player1Slot');
const player2Slot=document.getElementById('player2Slot');
player1Slot.style.backgroundImage=selectedPlayers[0]?`url(${selectedPlayers[0].icon})`:'none';
player2Slot.style.backgroundImage=selectedPlayers[1]?`url(${selectedPlayers[1].icon})`:'none';
// Actualiza los nombres de los jugadores
const player1Name = document.getElementById('player1Slot_nombre');
const player2Name = document.getElementById('player2Slot_nombre');
player1Name.textContent = selectedPlayers[0] ? selectedPlayers[0].name : '';
player2Name.textContent = selectedPlayers[1] ? selectedPlayers[1].name : '';

}