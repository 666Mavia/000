function handlePlayerSelection(checkbox,checked){
const playerDiv=checkbox.parentElement;
const playerIcon=playerDiv.querySelector('img').src;
const playerId=playerDiv.getAttribute('data-id');
const playerName=playerDiv.querySelector('span').textContent;
if(checked){
if(window.selectedPlayers.length<2){
window.selectedPlayers.push({id:playerId,name:playerName,icon:playerIcon});
window.updatePlayerSlots();
}else{
checkbox.checked=false;
}
}else{
window.selectedPlayers=window.selectedPlayers.filter(player=>player.id!==playerId);
window.updatePlayerSlots();
}
}
