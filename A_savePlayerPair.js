// Función para guardar la pareja y la apuesta
function savePlayerPair(){
const player1=selectedPlayers[0];
const player2=selectedPlayers[1];
const loggedInUser=JSON.parse(localStorage.getItem('loggedInUser'));
const pair={
players:[player1,player2],
winner:betData.winner,
betAmount:betData.betAmount,
user:loggedInUser.username//Guardar el usuario logueado
};
//Guarda en el historial (localStorage)
let history=JSON.parse(localStorage.getItem('playerHistory'))||[];
history.push(pair);
localStorage.setItem('playerHistory',JSON.stringify(history));
alert('Pareja guardada con la apuesta!');
}