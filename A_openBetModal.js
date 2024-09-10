// Función para abrir el modal
function openBetModal(){
const modal=document.getElementById('bet-modal');
modal.style.display='block';
// Llenar el selector con los jugadores seleccionados
const winnerSelect=document.getElementById('winner');
winnerSelect.innerHTML=`
<option value="${selectedPlayers[0].name}">${selectedPlayers[0].name}</option>
<option value="${selectedPlayers[1].name}">${selectedPlayers[1].name}</option>
`;
}