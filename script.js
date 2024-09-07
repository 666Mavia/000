let selectedPlayers = [];

// Maneja la selección de los jugadores
document.querySelectorAll('.select-player').forEach(checkbox => {

    checkbox.addEventListener('change', function () {

        const playerDiv = this.parentElement;
        const playerIcon = playerDiv.querySelector('img').src;
        const playerId = playerDiv.getAttribute('data-id');
        const playerName = playerDiv.querySelector('span').textContent;




        if (this.checked) {
            if (selectedPlayers.length < 2) {
                selectedPlayers.push({ id: playerId, name: playerName, icon: playerIcon });
                updatePlayerSlots();
            } else {
                this.checked = false;
            }
        } else {
            selectedPlayers = selectedPlayers.filter(player => player.id !== playerId);
            updatePlayerSlots();
        }
    });
});

function updatePlayerSlots() {
    const player1Slot = document.getElementById('player1Slot');
    const player2Slot = document.getElementById('player2Slot');

    player1Slot.style.backgroundImage = selectedPlayers[0] ? `url(${selectedPlayers[0].icon})` : 'none';
    player2Slot.style.backgroundImage = selectedPlayers[1] ? `url(${selectedPlayers[1].icon})` : 'none';
}


// Función para abrir la ventana del historial
document.getElementById('viewHistory').addEventListener('click', function () {
    window.open('historial.html', '_blank');
});

document.getElementById('finalize').addEventListener('click', function () {
    if (window.opener) {
        window.close();
    } else {
        alert("Por favor, cierra la ventana manualmente.");
    }
});






// Variables globales
//let selectedPlayers = [];
let betData = {};

// Función para abrir el modal
function openBetModal() {
    const modal = document.getElementById('bet-modal');
    modal.style.display = 'block';

    // Llenar el selector con los jugadores seleccionados
    const winnerSelect = document.getElementById('winner');
    winnerSelect.innerHTML = `
    <option value="${selectedPlayers[0].name}">${selectedPlayers[0].name}</option>
    <option value="${selectedPlayers[1].name}">${selectedPlayers[1].name}</option>
  `;
}

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('bet-modal').style.display = 'none';
});

// Evento para confirmar la apuesta
document.getElementById('bet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const winner = document.getElementById('winner').value;
    const betAmount = document.getElementById('bet-amount').value;

    betData = {
        winner: winner,
        betAmount: betAmount
    };

    // Cierra el modal
    document.getElementById('bet-modal').style.display = 'none';

    // Guarda la pareja con la apuesta
    savePlayerPair();
});

// Función para guardar la pareja y la apuesta
function savePlayerPair() {
    const player1 = selectedPlayers[0];
    const player2 = selectedPlayers[1];
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    const pair = {
        players: [player1, player2],
        winner: betData.winner,
        betAmount: betData.betAmount,
    user: loggedInUser.username // Guardar el usuario logueado
    };

    // Guarda en el historial (localStorage)
    let history = JSON.parse(localStorage.getItem('playerHistory')) || [];
    history.push(pair);
    localStorage.setItem('playerHistory', JSON.stringify(history));

    alert('Pareja guardada con la apuesta!');
}

// Evento para guardar la pareja seleccionada
document.getElementById('saveSelection').addEventListener('click', function() {
    if (selectedPlayers.length < 2) {
        alert('Debes seleccionar dos jugadores primero.');
        return;
    }

    // Abrir el modal de apuesta
    openBetModal();
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
///////////////////////
class LoadImages{
    constructor(){
        ////////////////////////////////////////////////////////
        var player_1_id='4b73046d-c461-48e2-9831-612fb8485f8b';
        var player_2_id='040b284d-ea59-45b8-904c-cba86cd119b6';
        var player_3_id='a2353be2-605e-4481-8fff-8daa15f1a762';
        var player_4_id='279022d4-3ca8-4da0-9cf4-d384d5cccad8';
        var player_5_id='bfd99f2d-64af-4849-97a3-a614cc93ccc0';
        /////////////////////////////////////////////////////////
        var player_1_nombre='@666|BOGG';
        var player_2_nombre='Groth';
        var player_3_nombre='Axe Billionaire';
        var player_4_nombre='MobR';
        var player_5_nombre='Opto | BOGG 🇵🇭';
        ////////////////////////////////////////////////////////
        player_1_img='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/'+player_1_id+'/avatar.jpeg';
        player_2_img='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/'+player_2_id+'/avatar.jpeg';
        player_3_img='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/'+player_3_id+'/avatar.jpeg';
        player_4_img='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/'+player_4_id+'/avatar.jpeg';
        player_5_img='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/'+player_5_id+'/avatar.jpeg';
        //////////////////////////////////////////////
        elem_player_1=document.getElementById('player_1_img');
        elem_player_1.src=player_1_img;
        elem_player_2=document.getElementById('player_2_img');
        elem_player_2.src=player_2_img;
        elem_player_3=document.getElementById('player_3_img');
        elem_player_3.src=player_3_img;
        elem_player_4=document.getElementById('player_4_img');
        elem_player_4.src=player_4_img;
        elem_player_5=document.getElementById('player_5_img');
        elem_player_5.src=player_5_img;
        ////////////////////////////////////////
        document.getElementById('player_1_nombre').innerHTML=player_1_nombre;
        document.getElementById('player_2_nombre').innerHTML=player_2_nombre;
        document.getElementById('player_3_nombre').innerHTML=player_3_nombre;
        document.getElementById('player_4_nombre').innerHTML=player_4_nombre;
        document.getElementById('player_5_nombre').innerHTML=player_5_nombre;
        ///////////////////////////////////////////////
    }
}
///////////////////////////////
new LoadImages();




