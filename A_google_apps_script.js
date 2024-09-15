const url_getData ='https://script.google.com/macros/s/AKfycbweqU3DpAdbtoi92SzVfvvda0-gbMi_d9asRByqKlSyqUxpTU5FVRHjuiTRpTxUtYCq/exec';
const url_getUpdate ='https://script.google.com/macros/s/AKfycbzhVGJIVCZGV1UDhsxt6qR3F9_aVvGgF_mErFgqsgb9Zfd_4G_SiW-X-Z0SbfQwOlmjVA/exec';
////////////////////////
var outputMessages=''; // Variable para concatenar todos los mensajes
var conteo=0;
////////////////////////
const maxRetries = 60;
const delay = 1000;
///////////////////////////


////////////////////////////////
async function google_getData(){
return await get(url_getData);
}
////////////////////////////////
async function google_getUpdate(){
const update=await get(url_getUpdate);
return limpiar(update);
}
////////////////////////////////



////////////////////////////////////////////
async function set(scriptURL,datos){
return setBucle(scriptURL,datos)
.then(text => text)// Devuelve el texto al resolver la promesa
.catch(error => {
return 'Error al procesar los datos: ' + error.message; // Devuelve el mensaje de error
});
}


async function get(scriptURL) {
return getBucle(scriptURL)
.then(text => text)// Devuelve el texto al resolver la promesa
.catch(error => {
return 'Error al procesar los datos: ' + error.message; // Devuelve el mensaje de error
});
}


async function getBucle(scriptURL){
let attempts = 0;
while(attempts < maxRetries) {
try{
const response = await fetch(scriptURL, { mode: 'cors' });
if(!response.ok) {
throw new Error('Error al obtener la respuesta');
}
const response_text= await response.text();
let output = '';
output += 'Contenido del archivo: ' + response_text;
return response_text; // Devuelve el contenido si la solicitud es exitosa
}catch(error){
attempts++;
//console.error('Error:', error.message);
if (attempts >= maxRetries) {
// Maneja el error después de superar el límite de intentos
//console.error('Se alcanzó el límite de reintentos');
return Promise.reject(error);
}
// Espera antes de intentar nuevamente
await new Promise(resolve => setTimeout(resolve, delay));
}
}
}


async function setBucle(scriptURL,datos){
let attempts = 0;
while (attempts < maxRetries) {
try {
const response = await fetch(scriptURL + '?text=' + encodeURIComponent(datos), {
method: 'GET', // Cambiamos a 'GET' porque tu Google Apps Script usa doGet
mode: 'cors',
});
if(!response.ok){
throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
}
const responseText = await response.text();
return 'Respuesta del servidor: ' + responseText;
} catch (error) {
attempts++;
if (attempts >= maxRetries) {
return 'Error al procesar la solicitud: ' + error.message + ' después de ' + attempts + ' intentos';
}
// Espera antes de intentar nuevamente
await new Promise(resolve => setTimeout(resolve, delay));
}
}
}


async function limpiar(texto){
if (texto && texto.length > 1) { // Verifica si el texto no es nulo o no es de longitud 1
let length = texto.length;
if (texto.charAt(length - 1) === '\n') {
return texto.substring(0, length - 1);
}
}
return texto;
}
//////////////////////////////////////////////////////