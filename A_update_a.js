// Variables iniciales
var a1,a2,a3,a4,a5;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;
var y,z;
// Función para actualizar las variables dinámicamente
function updateVariable(key,value,caso){
//document.getElementById('id_log').innerHTML='updateVariable():'+caso;
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
case 'y':y6=parseInt(value);break;
case 'z':z6=parseInt(value);break;
}
}
//Función para procesar los datos del archivo de texto
function processLine(line,caso){
//document.getElementById('id_log').innerHTML='processLine():'+caso+':A';
const[key,value]=line.split('=').map(item=>item.trim());
//document.getElementById('id_log').innerHTML='processLine():'+caso+':B';
if(key&&value!==undefined){
//document.getElementById('id_log').innerHTML='processLine():'+caso+':C';
updateVariable(key,value,caso); // Actualiza las variables correspondientes
//document.getElementById('id_log').innerHTML='processLine():'+caso+':D';
}else{
//document.getElementById('id_log').innerHTML='processLine():'+caso+':E';
}
}
///////////////////////////////////////
function updatePlayerList(caso){
//document.getElementById('id_log').innerHTML='updatePlayerList():'+caso;
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
/////////////////////////////////////
function readFile(caso){
//document.getElementById('id_log').innerHTML='readFile():'+caso;
fetch('players_top10.data').then(response =>response.text()).then(data => {
const lines= data.split('\n');
lines.forEach((line,index)=>{
processLine(line,caso);
});
}).catch(error => console.error('Error al leer el archivo:', error));
updatePlayerList(caso);
}
///////////////////////////////////////
let variableDinamica=0;
var variableDinamica_forzada=0;
var A_update_a_leerArchivo_conteo=0;
/////////////////////////
async function leerArchivo(){
try{
A_update_a_leerArchivo_conteo++;
document.getElementById('id_log').innerHTML=
'A_update_a_leerArchivo_conteo:'+A_update_a_leerArchivo_conteo+'\n'+
'variableDinamica:'+variableDinamica+'\n'+
'variableDinamica_forzada:'+variableDinamica_forzada;
const response=await fetch('players_top10.update', { cache: "no-store" });
const texto=await response.text();
const variableDinamica_real=texto.trim();  // Asignar el contenido a la variable
variableDinamica=variableDinamica_real;
if(variableDinamica_forzada==1){
variableDinamica=1;
if(A_update_a_leerArchivo_conteo==3){
A_update_a_leerArchivo_conteo=0;
variableDinamica_forzada=0;
variableDinamica=variableDinamica_real;
}
}
}catch(error){}
///////////////////////////////
if(variableDinamica==1){
readFile(variableDinamica);
window.reiniciarProgreso();
}
if(variableDinamica==2){
localStorage.clear();
}
//////////////////////////////
}


function A_update_a_inicio(pvariableDinamica_forzada){
A_update_a_leerArchivo_conteo=0;
variableDinamica_forzada=0;
variableDinamica=0;
variableDinamica_forzada=pvariableDinamica_forzada;
setInterval(leerArchivo,5000); // Se actualizará cada 5 segundos
}

function A_update_a_final(){
clearInterval(window.A_update_a_intervalId);
}


////////////////////////////////////