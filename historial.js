// Botón para regresar a la ventana principal
document.getElementById('back').addEventListener('click', function () {
const caso=2;
const a1=window.a1;const b1=window.b1;const c1=window.c1;
const a2=window.a2;const b2=window.b2;const c2=window.c2;
const a3=window.a3;const b3=window.b3;const c3=window.c3;
const a4=window.a4;const b4=window.b4;const c4=window.c4;
const a5=window.a5;const b5=window.b5;const c5=window.c5;
const y=window.y;const z=window.z;
window.location.replace(`index.html?
caso=${encodeURIComponent(caso)}&
a1=${encodeURIComponent(a1)}&
a2=${encodeURIComponent(a2)}&
a3=${encodeURIComponent(a3)}&
a4=${encodeURIComponent(a4)}&
a5=${encodeURIComponent(a5)}&
b1=${encodeURIComponent(b1)}&
b2=${encodeURIComponent(b2)}&
b3=${encodeURIComponent(b3)}&
b4=${encodeURIComponent(b4)}&
b5=${encodeURIComponent(b5)}&
c1=${encodeURIComponent(c1)}&
c2=${encodeURIComponent(c2)}&
c3=${encodeURIComponent(c3)}&
c4=${encodeURIComponent(c4)}&
c5=${encodeURIComponent(c5)}&
y=${encodeURIComponent(y)}&
z=${encodeURIComponent(z)}
`);
});

// Botón para eliminar el historial
document.getElementById('clear-history').addEventListener('click', function () {
borrar_historial();
});

// Cargar el historial desde localStorage
document.addEventListener('DOMContentLoaded', function () {
const historyList=document.querySelector('.history-list');
const history = JSON.parse(localStorage.getItem('playerHistory')) || [];
if(history.length === 0) {
historyList.innerHTML = '<p>No hay historial guardado.</p>';
}else{
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

window.addEventListener('load',function(){
// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const caso = params.get('caso'); // 'param' es el nombre del parámetro que pasaste
//params.set('caso',null);
//// Si deseas actualizar la URL en el navegador
//window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
if(caso==null){}
if(caso==3){
//window.A_update_a_final();
window.a1=params.get('a1');window.b1=params.get('b1');window.c1=params.get('c1');
window.a2=params.get('a2');window.b2=params.get('b2');window.c2=params.get('c2');
window.a3=params.get('a3');window.b3=params.get('b3');window.c3=params.get('c3');
window.a4=params.get('a4');window.b4=params.get('b4');window.c4=params.get('c4');
window.a5=params.get('a5');window.b5=params.get('b5');window.c5=params.get('c5');
window.y=params.get('y');window.z=params.get('z');
document.getElementById('id_log').innerHTML='script.load:'+window.a1;
}
});


function borrar_historial(){
// Eliminar el historial de localStorage
localStorage.removeItem('playerHistory');
// Limpiar la lista en la interfaz
const historyList = document.querySelector('.history-list');
historyList.innerHTML = '<p>No hay historial guardado.</p>';
alert("Historial eliminado correctamente.");
}

