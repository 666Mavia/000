//Funcion secreta A para actualizar la lista de jugadores
document.getElementById('secret_key_a').addEventListener('click', function () {
window.updatePlayerList(false);
});


//Esta funcion es llamada al cambiar un checkbox y actualiza.
document.querySelectorAll('.select-player').forEach(checkbox=>{
checkbox.addEventListener('change',function(){
window.handlePlayerSelection(this,this.checked);
});
});

//Función para abrir la ventana del historial
document.getElementById('viewHistory').addEventListener('click', function () {
//window.open('historial.html', '_blank');
window.location.replace('historial.html');
});

document.getElementById('finalize').addEventListener('click', function () {
if(window.opener){
window.close();
}else{
alert("Por favor, cierra la ventana manualmente.");
}
});


// Variables globales
//let selectedPlayers = [];




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
alert('Debes seleccionar dos jugadores primero.');
return;
}
// Abrir el modal de apuesta
window.openBetModal();
});




document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');

    // Verificar si el usuario ya se ha logueado previamente
    const savedUser = localStorage.getItem('loggedInUser');
    if (savedUser) {
        //loginModal.style.display = 'none'; // Ocultar el login modal
    }

    // Evento de envío del formulario de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        //if (username && password) {
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
        //} else {
        //    alert('Por favor ingresa los datos correctamente.');
        //}
    });
});





///////////////////////////
var player_1_img;
var player_2_img;
var player_3_img;
var player_4_img;
var player_5_img;
//////////////////////
var elem_player_1;
var elem_player_2;
var elem_player_3;
var elem_player_4;
var elem_player_5;
//////////////////
const url0='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/';
const url1='/avatar.jpeg';
///////////////////////
class LoadImages{
////////////////////////////////////////////////////////
constructor(){
////////////////////////////////////////////////////////
if(window.c1==1){
player_1_img=url0+window.b1+url1;
elem_player_1=document.getElementById('player_1_img');
elem_player_1.src=player_1_img;
}
////////////////////////////////////////////////////////
if(window.c2==1){
player_2_img=url0+window.b2+url1;
elem_player_2=document.getElementById('player_2_img');
elem_player_2.src=player_2_img;
}
//////////////////////////////////////////////
if(window.c3==1){
player_3_img=url0+window.b3+url1;
elem_player_3=document.getElementById('player_3_img');
elem_player_3.src=player_3_img;
}
//////////////////////////////////////////////
if(window.c4==1){
player_4_img=url0+window.b4+url1;
elem_player_4=document.getElementById('player_4_img');
elem_player_4.src=player_4_img;
}
//////////////////////////////////////////////
if(window.c5==1){
player_5_img=url0+window.b5+url1;
elem_player_5=document.getElementById('player_5_img');
elem_player_5.src=player_5_img;
}
//////////////////////////////////////////////
document.getElementById('player_1_nombre').innerHTML=window.a1;
document.getElementById('player_2_nombre').innerHTML=window.a2;
document.getElementById('player_3_nombre').innerHTML=window.a3;
document.getElementById('player_4_nombre').innerHTML=window.a4;
document.getElementById('player_5_nombre').innerHTML=window.a5;
///////////////////////////////////////////////
}
}
///////////////////////////////
new LoadImages();









//Incluir otro archivo HTML en un archivo HTML
//<div id="includedContent"></div>
//$(function(){
//    $("#includedContent").load("b.html");
//});
