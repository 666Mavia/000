// Variables iniciales
var a1,a2,a3,a4,a5;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
var y,z;
////////////////////////
var checkUpdate_forzado=0;
var checkUpdate_ok=0;
var lines_total='';
//let update='';
////////////////////////


// Función para actualizar las variables dinámicamente
async function updateVariable(key,value){
switch(key){
case 'a1':a1=value;break;
case 'b1':b1=value;break;
case 'c1':c1=parseInt(value);break;
case 'a2':a2=value;break;
case 'b2':b2=value;break;
case 'c2':c2=parseInt(value);break;
case 'a3':a3=value;break;
case 'b3':b3=value;break;
case 'c3':c3=parseInt(value);break;
case 'a4':a4=value;break;
case 'b4':b4=value;break;
case 'c4':c4=parseInt(value);break;
case 'a5':a5=value;break;
case 'b5':b5=value;break;
case 'c5':c5=parseInt(value);break;
case 'y':y=parseInt(value);break;
case 'z':z=parseInt(value);break;
}
}


//Función para procesar los datos del archivo de texto
async function processLine(line){
const[key,value]=line.split('=').map(item=>item.trim());
if(key&&value!==undefined){
updateVariable(key,value);//Actualiza las variables correspondientes
}
}


//Funcion para crear la lista de jugadores
async function updatePlayerList(){
const players=document.querySelectorAll('.player');
const url0='https://prod-mavia-avatars.s3.us-west-1.amazonaws.com/';
const url1='/avatar.jpeg';
players.forEach(player=>{
const playerId=player.getAttribute('data-id');
const playerImage=player.querySelector('img');
const playerName=player.querySelector('span[id$="_nombre"]');
const playerGanadas=player.querySelector('span[id$="_ganadas"]');
const playerPerdidas=player.querySelector('span[id$="_perdidas"]');
const playerPromedio=player.querySelector('span[id$="_promedio"]');
switch(playerId){
case '1':
if(c1==0){
playerImage.src='user1.png';
}else{
playerImage.src=url0+b1+url1;
}
playerName.textContent=a1;
//playerGanadas.textContent=`W: ${c1}`;
//playerPerdidas.textContent=`L: ${c1}`;
//playerPromedio.textContent=`%: ${c1}`;
break;
case '2':
if(c2==0){
playerImage.src='user1.png';
}else{
playerImage.src=url0+b2+url1;
}
playerName.textContent=a2;
break;
case '3':
if(c3==0){
playerImage.src='user1.png';
}else{
playerImage.src=url0+b3+url1;
}
playerName.textContent=a3;
break;
case '4':
if(c4==0){
playerImage.src='user1.png';
}else{
playerImage.src=url0+b4+url1;
}
playerName.textContent=a4;
break;
case '5':
if(c5==0){
playerImage.src='user1.png';
}else{
playerImage.src=url0+b5+url1;
}
playerName.textContent=a5;
break;
// Puedes agregar más casos si tienes más jugadores
}
});
}


//Funcion para leer el archivo con los datos de los jugadores
async function readFile(){
//document.getElementById('id_log').innerHTML='[readFile] A';
//fetch('players_top10.data').then(response =>response.text()).then(data => {
const data=await window.google_getData();
const lines=data.split('\n');
lines.forEach((line,index)=>{
processLine(line);
});
updatePlayerList();
//}).catch(error => console.error('Error al leer el archivo:', error));
}

//Funcion para leer el archivo que nos avisa si se actualizaron los datos de los jugadores
async function checkUpdate(){
if(checkUpdate_ok==1){
try{
//const response=await fetch('players_top10.update', { cache: "no-store" });
//const texto=await response.text();
const update=await window.google_getUpdate();
//variableDinamica=texto.trim(); // Asignar el contenido a la variable
if(update=='1'){
checkUpdate_forzado=0;
checkUpdate_ok=0;
readFile();
window.checkUpdate_run(1);
window.setBarraDeProgresoHistorial();
}else{
if(checkUpdate_forzado==1){
checkUpdate_forzado=0;
checkUpdate_ok=0;
readFile();
}
}
}catch(error){}
}
}


//Funcion para iniciar el buckle en segundo plano.
async function checkUpdate_run(pcheckUpdate_forzado){
checkUpdate_forzado=pcheckUpdate_forzado;
checkUpdate_ok=1;
setInterval(checkUpdate,10000);// Se actualizará cada 5 segundos
}

