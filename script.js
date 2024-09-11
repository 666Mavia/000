//Funcion secreta A para actualizar la lista de jugadores
document.getElementById('secret_key_a').addEventListener('click', function () {
window.updatePlayerList();
});


//Esta funcion es llamada al cambiar un checkbox y actualiza.
document.querySelectorAll('.select-player').forEach(checkbox=>{
checkbox.addEventListener('change',function(){
window.handlePlayerSelection(this,this.checked);
});
});


//Función para abrir la ventana del historial
document.getElementById('viewHistory').addEventListener('click', function () {
setBarraDeProgreso(0);
});


document.getElementById('finalize').addEventListener('click', function () {
    if(window.opener){
        window.close();
    } else {
        // Mostramos el diálogo modal
document.getElementById('dialogoModal').style.display = 'flex';
}
});

// Función para el botón Aceptar
document.getElementById('aceptar').addEventListener('click', function() {
console.log('Apuestas enviadas al servidor.');
document.getElementById('dialogoModal').style.display = 'none';
// Aquí puedes agregar la lógica para enviar los datos
});

// Función para el botón Cancelar
document.getElementById('cancelar').addEventListener('click', function() {
document.getElementById('dialogoModal').style.display = 'none';
window.borrar_historial();
});




// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
document.getElementById('bet-modal').style.display = 'none';
});


// Evento para confirmar la apuesta
document.getElementById('bet-form').addEventListener('submit', function(e) {
e.preventDefault();
const winner = document.getElementById('winner').value;
const betAmount = document.getElementById('bet-amount').value;
window.betData = {
winner: winner,
betAmount: betAmount
};
// Cierra el modal
document.getElementById('bet-modal').style.display = 'none';
// Guarda la pareja con la apuesta
window.savePlayerPair();
});


// Evento para guardar la pareja seleccionada
document.getElementById('saveSelection').addEventListener('click', function() {
if(window.selectedPlayers.length < 2) {
document.getElementById('dialogoModal_AlertaSave').style.display = 'flex';
return;
}
// Abrir el modal de apuesta
window.openBetModal();
});
// Función para el botón Aceptar
document.getElementById('aceptar_AlertaSave').addEventListener('click', function() {
document.getElementById('dialogoModal_AlertaSave').style.display = 'none';
});



document.addEventListener('DOMContentLoaded', function() {
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
//Verificar si el usuario ya se ha logueado previamente
const savedUser = localStorage.getItem('loggedInUser');
if(savedUser) {
loginModal.style.display = 'none'; // Ocultar el login modal
}
//Evento de envío del formulario de login
loginForm.addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
if (username && password) {
// Guardar usuario en localStorage
const userData = {
username: username,
password: password
};
localStorage.setItem('loggedInUser', JSON.stringify(userData));
// Ocultar el login modal y mostrar la web
loginModal.style.display = 'none';
// Aquí puedes continuar cargando la página principal
alert('Login exitoso');
} else {
alert('Por favor ingresa los datos correctamente.');
}
});
});


//document.querySelector('form').addEventListener('submit', function(event) {
//event.preventDefault(); // Previene el envío y el refresco
//});


window.addEventListener('load',function(){
loadPaginaIndex();
});


function loadPaginaIndex(){
// Obtener parámetros de la URL
const params=new URLSearchParams(window.location.search);
const caso=params.get('caso'); // 'param' es el nombre del parámetro que pasaste
document.getElementById('id_log').innerHTML=`Valor del parámetro: ${caso}`;
if(caso==null||caso==0){
document.getElementById('id_log').innerHTML='caso:'+caso;
window.A_update_a_inicio(1);
}
if(caso==2){
window.a1=params.get('a1');window.b1=params.get('b1');window.c1=params.get('c1');
window.a2=params.get('a2');window.b2=params.get('b2');window.c2=params.get('c2');
window.a3=params.get('a3');window.b3=params.get('b3');window.c3=params.get('c3');
window.a4=params.get('a4');window.b4=params.get('b4');window.c4=params.get('c4');
window.a5=params.get('a5');window.b5=params.get('b5');window.c5=params.get('c5');
window.y=params.get('y');window.z=params.get('z');
document.getElementById('id_log').innerHTML='script.load:'+window.a1;
updatePlayerList(caso);
window.A_update_a_inicio(0);
}
if(caso==1){}
setBarraDeProgreso(-1);
}


function setHistorial(){
const caso=3;
const a1=window.a1;const b1=window.b1;const c1=window.c1;
const a2=window.a2;const b2=window.b2;const c2=window.c2;
const a3=window.a3;const b3=window.b3;const c3=window.c3;
const a4=window.a4;const b4=window.b4;const c4=window.c4;
const a5=window.a5;const b5=window.b5;const c5=window.c5;
const y=window.y;const z=window.z;
window.location.replace(`historial.html?
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
tiempoRestante=15;
}

let intervalo;
let progreso;
let tiempoRestante;
function setBarraDeProgreso(caso){
tiempoRestante = 20;
progreso = 0;
intervalo = setInterval(function() {
if(window.A_update_a_leerArchivo_conteo > 3) {
if(caso==0){setHistorial();}
clearInterval(intervalo);
document.getElementById("miModal").style.display = "none";
} else if (tiempoRestante > 0) {
progreso = ((20 - tiempoRestante + 1) / 20) * 100;
document.getElementById("progresoTexto").style.width = progreso + '%';
document.getElementById("progresoTexto").innerHTML = Math.floor(progreso) + '%';
tiempoRestante--;
} else {
if(caso==0){setHistorial();}
clearInterval(intervalo);
document.getElementById("miModal").style.display = "none";
}
},1000);
document.getElementById("miModal").style.display = "flex";
}


function reiniciarProgreso() {
clearInterval(intervalo); // Detenemos cualquier intervalo activo
tiempoRestante = 20; // Reiniciamos el tiempo restante
progreso = 0; // Reiniciamos el progreso visual
document.getElementById("progresoTexto").style.width = '0%';
document.getElementById("progresoTexto").innerHTML = '0%';
setBarraDeProgreso(-1)// Volvemos a iniciar el progreso
}


//Incluir otro archivo HTML en un archivo HTML
//<div id="includedContent"></div>
//$(function(){
//    $("#includedContent").load("b.html");
//});
